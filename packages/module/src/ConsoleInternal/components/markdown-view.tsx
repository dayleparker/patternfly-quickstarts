import * as React from 'react';
import { css } from '@patternfly/react-styles';
import { Converter } from 'showdown';
import { useForceRender } from '@console/shared';
import { QuickStartContext, QuickStartContextValues } from '../../utils/quick-start-context';
import { sanitize } from './sanitize';
import './_markdown-view.scss';

type ShowdownExtension = {
  type: string;
  regex?: RegExp;
  replace?: (...args: any[]) => string;
};

export const markdownConvert = (markdown, extensions?: ShowdownExtension[]) => {
  const converter = new Converter({
    tables: true,
    openLinksInNewWindow: true,
    strikethrough: true,
    emoji: false,
  });

  if (extensions) {
    converter.addExtension(extensions);
  }

  return sanitize(converter.makeHtml(markdown));
};

type SyncMarkdownProps = {
  content?: string;
  emptyMsg?: string;
  exactHeight?: boolean;
  /* truncateContent?: boolean; */
  extensions?: ShowdownExtension[];
  renderExtension?: (contentDocument: HTMLDocument, rootSelector: string) => React.ReactNode;
  inline?: boolean;
  className?: string;
};

type InnerSyncMarkdownProps = Pick<SyncMarkdownProps, 'renderExtension' | 'exactHeight'> & {
  markup: string;
  isEmpty: boolean;
  className?: string;
};

export const SyncMarkdownView: React.FC<SyncMarkdownProps> = ({
  // truncateContent,
  content,
  emptyMsg,
  extensions,
  renderExtension,
  exactHeight,
  inline,
  className,
}) => {
  const { getResource } = React.useContext<QuickStartContextValues>(QuickStartContext);
  const markup = React.useMemo(() => {
    return markdownConvert(content || emptyMsg || getResource('Not available'), extensions);
  }, [content, emptyMsg, extensions, getResource]);
  const innerProps: InnerSyncMarkdownProps = {
    renderExtension: extensions?.length > 0 ? renderExtension : undefined,
    exactHeight,
    markup,
    isEmpty: !content,
    className,
  };
  return inline ? <InlineMarkdownView {...innerProps} /> : <IFrameMarkdownView {...innerProps} />;
};

const uniqueId = (function () {
  let num = 0;
  return function (prefix) {
    const prefixStr = String(prefix) || '';
    num += 1;
    return prefixStr + num;
  };
})();

type RenderExtensionProps = {
  renderExtension: (contentDocument: HTMLDocument, rootSelector: string) => React.ReactNode;
  selector: string;
  markup: string;
  docContext?: HTMLDocument;
};

const RenderExtension: React.FC<RenderExtensionProps> = ({
  renderExtension,
  selector,
  markup,
  docContext,
}) => {
  const forceRender = useForceRender();
  const markupRef = React.useRef<string>(null);
  const shouldRenderExtension = React.useCallback(() => {
    if (markupRef.current === markup) {
      return true;
    }
    markupRef.current = markup;
    return false;
  }, [markup]);
  /**
   * During a render cycle in which markup changes, renderExtension receives an old copy of document
   * because react is still updating the dom using `dangerouslySetInnerHTML` with latest markdown markup
   * which causes the component rendered by renderExtension to receive old copy of document
   * use forceRender to delay the rendering of extension by one render cycle
   */
  React.useEffect(() => {
    if (renderExtension) {
      forceRender();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markup]);
  return (
    <>{shouldRenderExtension() ? renderExtension?.(docContext ?? document, selector) : null}</>
  );
};

const InlineMarkdownView: React.FC<InnerSyncMarkdownProps> = ({
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const id = React.useMemo(() => uniqueId('markdown'), []);
  return (
    <div className={css('pfext-markdown-view', { 'is-empty': isEmpty }, className)} id={id}>
      <div dangerouslySetInnerHTML={{ __html: markup }} />
      {renderExtension && (
        <RenderExtension renderExtension={renderExtension} selector={`#${id}`} markup={markup} />
      )}
    </div>
  );
};

const IFrameMarkdownView: React.FC<InnerSyncMarkdownProps> = ({
  exactHeight,
  markup,
  isEmpty,
  renderExtension,
  className,
}) => {
  const [frame, setFrame] = React.useState<HTMLIFrameElement>();
  const [loaded, setLoaded] = React.useState(false);
  const updateTimeoutHandle = React.useRef<number>();

  const updateDimensions = React.useCallback(() => {
    if (!frame?.contentWindow?.document.body.firstChild) {
      return;
    }
    frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight}px`;

    // Let the new height take effect, then reset again once we recompute
    // @ts-ignore
    updateTimeoutHandle.current = setTimeout(() => {
      if (exactHeight) {
        frame.style.height = `${frame.contentWindow.document.body.firstElementChild.scrollHeight}px`;
      } else {
        // Increase by 15px for the case where a horizontal scrollbar might appear
        frame.style.height = `${
          frame.contentWindow.document.body.firstElementChild.scrollHeight + 15
        }px`;
      }
    });
  }, [frame, exactHeight]);

  React.useEffect(
    () => () => {
      clearTimeout(updateTimeoutHandle.current);
    },
    [],
  );

  const onLoad = React.useCallback(() => {
    updateDimensions();
    setLoaded(true);
  }, [updateDimensions]);

  // Find the app's stylesheets and inject them into the frame to ensure consistent styling.
  const filteredLinks = Array.from(document.getElementsByTagName('link')).filter((l) =>
    l.href.includes('app-bundle'),
  );

  const linkRefs = filteredLinks.reduce(
    (refs, link) => `${refs}
    <link rel="stylesheet" href="${link.href}">`,
    '',
  );

  const contents = `
  ${linkRefs}
  <style type="text/css">
  body {
    background-color: transparent !important;
    color: ${isEmpty ? '#999' : '#333'};
    font-family: var(--pf-global--FontFamily--sans-serif);
    min-width: auto !important;
  }
  table {
    display: block;
    margin-bottom: 11.5px;
    overflow-x: auto;
  }
  td,
  th {
    border-bottom: 1px solid #ededed;
    padding: 10px;
    vertical-align: top;
  }
  th {
    padding-top: 0;
  }
  </style>
  <body class="pf-m-redhat-font"><div style="overflow-y: auto;">${markup}</div></body>`;
  return (
    <>
      <iframe
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin"
        srcDoc={contents}
        style={{ border: '0px', display: 'block', width: '100%', height: '0' }}
        ref={(r) => setFrame(r)}
        onLoad={() => onLoad()}
        className={className}
      />
      {loaded && frame && renderExtension && (
        <RenderExtension
          markup={markup}
          selector={''}
          renderExtension={renderExtension}
          docContext={frame.contentDocument}
        />
      )}
    </>
  );
};

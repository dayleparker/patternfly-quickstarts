import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import '../../../../node_modules/@patternfly/patternfly/docs/components/Label/examples/./Label.css'
const pageData = {
  "id": "Label",
  "section": "components",
  "source": "html",
  "slug": "/components/label/html",
  "sourceLink": "https://github.com/patternfly/patternfly/blob/main/packages/docs/src/patternfly/components/Label/examples/Label.md",
  "cssPrefix": [
    "pf-c-label"
  ],
  "examples": [
    "Filled",
    "Outline",
    "Overflow",
    "Editable"
  ]
};
pageData.examples = {
  'Filled': props => 
    <Example {...pageData} {...props} {...{"code":"<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">Grey</span>\n</span>\n\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Grey icon\n  </span>\n</span>\n\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">Grey removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-grey-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-grey-close-button default-grey-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Grey icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-grey-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-grey-icon-close-button default-grey-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link</a>\n</span>\n\n<span class=\"pf-c-label\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-grey-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-grey-link-close-button default-grey-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Grey label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-grey-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-grey-icon-close-truncate-button default-grey-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">Blue</span>\n</span>\n\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Blue icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">Blue removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-blue-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-blue-close-button default-blue-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Blue icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-blue-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-blue-icon-close-button default-blue-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-blue-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-blue-link-close-button default-blue-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-blue\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Blue label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-blue-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-blue-icon-close-truncate-button default-blue-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">Green</span>\n</span>\n\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Green icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">Green removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-green-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-green-close-button default-green-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Green icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-green-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-green-icon-close-button default-green-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-green-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-green-link-close-button default-green-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-green\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Green label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-green-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-green-icon-close-truncate-button default-green-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">Orange</span>\n</span>\n\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Orange icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">Orange removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-orange-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-orange-close-button default-orange-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Orange icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-orange-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-orange-icon-close-button default-orange-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-orange-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-orange-link-close-button default-orange-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-orange\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Orange label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-orange-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-orange-icon-close-truncate-button default-orange-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">Red</span>\n</span>\n\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Red icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">Red removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-red-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-red-close-button default-red-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Red icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-red-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-red-icon-close-button default-red-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-red-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-red-link-close-button default-red-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-red\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Red label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-red-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-red-icon-close-truncate-button default-red-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">Purple</span>\n</span>\n\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Purple icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">Purple removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-purple-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-purple-close-button default-purple-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Purple icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-purple-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-purple-icon-close-button default-purple-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-purple-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-purple-link-close-button default-purple-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-purple\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Purple label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-purple-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-purple-icon-close-truncate-button default-purple-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">Cyan</span>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Cyan icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">Cyan removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-cyan-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-cyan-close-button default-cyan-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Cyan icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-cyan-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-cyan-icon-close-button default-cyan-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-cyan-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-cyan-link-close-button default-cyan-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    <span class=\"pf-c-label__text\">Cyan label with icon that truncates</span>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"default-cyan-icon-close-truncate-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"default-cyan-icon-close-truncate-button default-cyan-icon-close-truncate-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>","title":"Filled","lang":"html"}}>
      
    </Example>,
  'Outline': props => 
    <Example {...pageData} {...props} {...{"code":"<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">Grey</span>\n</span>\n\n<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Grey icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">Grey removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-grey-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-grey-close-button outline-grey-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Grey icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-grey-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-grey-icon-close-button outline-grey-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline\">\n  <a class=\"pf-c-label__content\" href=\"#\">Grey link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-grey-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-grey-link-close-button outline-grey-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">Blue</span>\n</span>\n\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Blue icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">Blue removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-blue-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-blue-close-button outline-blue-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-blue pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Blue icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-blue-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-blue-icon-close-button outline-blue-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-blue\">\n  <a class=\"pf-c-label__content\" href=\"#\">Blue link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-blue-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-blue-link-close-button outline-blue-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">Green</span>\n</span>\n\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Green icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">Green removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-green-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-green-close-button outline-green-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-green pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Green icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-green-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-green-icon-close-button outline-green-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-green\">\n  <a class=\"pf-c-label__content\" href=\"#\">Green link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-green-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-green-link-close-button outline-green-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">Orange</span>\n</span>\n\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Orange icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">Orange removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-orange-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-orange-close-button outline-orange-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-orange pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Orange icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-orange-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-orange-icon-close-button outline-orange-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-orange\">\n  <a class=\"pf-c-label__content\" href=\"#\">Orange link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-orange-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-orange-link-close-button outline-orange-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">Red</span>\n</span>\n\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Red icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">Red removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-red-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-red-close-button outline-red-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-red pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Red icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-red-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-red-icon-close-button outline-red-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-red\">\n  <a class=\"pf-c-label__content\" href=\"#\">Red link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-red-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-red-link-close-button outline-red-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">Purple</span>\n</span>\n\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Purple icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">Purple removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-purple-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-purple-close-button outline-purple-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-purple pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Purple icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-purple-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-purple-icon-close-button outline-purple-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-purple\">\n  <a class=\"pf-c-label__content\" href=\"#\">Purple link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-purple-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-purple-link-close-button outline-purple-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<br />\n<br />\n\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">Cyan</span>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Cyan icon\n  </span>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">Cyan removable</span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-cyan-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-cyan-close-button outline-cyan-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-cyan pf-m-outline\">\n  <span class=\"pf-c-label__content\">\n    <span class=\"pf-c-label__icon\">\n      <i class=\"fas fa-fw fa-info-circle\" aria-hidden=\"true\"></i>\n    </span>\n    Cyan icon removable\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-cyan-icon-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-cyan-icon-close-button outline-cyan-icon-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link</a>\n</span>\n\n<span class=\"pf-c-label pf-m-outline pf-m-cyan\">\n  <a class=\"pf-c-label__content\" href=\"#\">Cyan link removable</a>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"outline-cyan-link-close-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"outline-cyan-link-close-button outline-cyan-link-close-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>","title":"Outline","lang":"html"}}>
      
    </Example>,
  'Overflow': props => 
    <Example {...pageData} {...props} {...{"code":"<button class=\"pf-c-label pf-m-overflow\">\n  <span class=\"pf-c-label__content\">Overflow</span>\n</button>","title":"Overflow","lang":"html"}}>
      
    </Example>,
  'Editable': props => 
    <Example {...pageData} {...props} {...{"code":"<span class=\"pf-c-label pf-m-blue pf-m-editable\">\n  <span class=\"pf-c-label__content\">\n    <div class=\"pf-c-inline-edit\">\n      <div\n        class=\"pf-c-inline-edit__editable-text\"\n        role=\"textbox\"\n        id=\"editable-label-text\"\n        aria-label=\"Editable text\"\n      >Editable label</div>\n    </div>\n  </span>\n  <button\n    class=\"pf-c-button pf-m-plain\"\n    type=\"button\"\n    id=\"editable-label-button\"\n    aria-label=\"Remove\"\n    aria-labelledby=\"editable-label-button editable-label-text\"\n  >\n    <i class=\"fas fa-times\" aria-hidden=\"true\"></i>\n  </button>\n</span>\n\n<span class=\"pf-c-label pf-m-blue pf-m-editable pf-m-editable-active\">\n  <span class=\"pf-c-label__content\">\n    <div class=\"pf-c-inline-edit\">\n      <div\n        class=\"pf-c-inline-edit__editable-text\"\n        role=\"textbox\"\n        id=\"editable-label-active-text\"\n        contenteditable=\"true\"\n        aria-label=\"Editable text\"\n      >Editable active</div>\n    </div>\n  </span>\n</span>","title":"Editable","lang":"html"}}>
      
    </Example>
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"examples","size":"h2","className":"ws-title ws-h2"}}>
      {`Examples`}
    </AutoLinkHeader>
    {React.createElement(pageData.examples["Filled"])}
    {React.createElement(pageData.examples["Outline"])}
    {React.createElement(pageData.examples["Overflow"])}
    <AutoLinkHeader {...{"id":"editable-label-behavior-must-be-handled-with-javascript.","size":"h3","className":"ws-title ws-h3"}}>
      {`Editable label behavior must be handled with JavaScript.`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <code {...{"className":"ws-code"}}>
          {`.pf-c-inline-edit__editable-text`}
        </code>
        {` onClick event should:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Set `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-editable-active`}
            </code>
            {` on `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Set `}
            <code {...{"className":"ws-code"}}>
              {`contenteditable="true"`}
            </code>
            {` on `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__editable-text`}
            </code>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Return keypress, when content is editable, should:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Be captured to prevent line wrapping and save updates to label text`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Remove `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-editable-active`}
            </code>
            {` from `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Remove `}
            <code {...{"className":"ws-code"}}>
              {`contenteditable="true"`}
            </code>
            {` from `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__editable-text`}
            </code>
          </li>
        </ul>
      </li>
      <li {...{"className":"ws-li"}}>
        {`Esc keypress, when content is editable, should:`}
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            {`Undo any update to label text`}
          </li>
          <li {...{"className":"ws-li"}}>
            {`Remove `}
            <code {...{"className":"ws-code"}}>
              {`.pf-m-editable-active`}
            </code>
            {` from `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-label`}
            </code>
          </li>
          <li {...{"className":"ws-li"}}>
            {`Remove `}
            <code {...{"className":"ws-code"}}>
              {`contenteditable="true"`}
            </code>
            {` from `}
            <code {...{"className":"ws-code"}}>
              {`.pf-c-inline-edit__editable-text`}
            </code>
          </li>
        </ul>
      </li>
    </ul>
    {React.createElement(pageData.examples["Editable"])}
    <AutoLinkHeader {...{"id":"documentation","size":"h2","className":"ws-title ws-h2"}}>
      {`Documentation`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"usage","size":"h3","className":"ws-title ws-h3"}}>
      {`Usage`}
    </AutoLinkHeader>
    <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
      <thead>
        <tr {...{"role":"row"}}>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Class`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Applied to`}
            </div>
          </th>
          <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
            <div>
              {`Outcome`}
            </div>
          </th>
        </tr>
      </thead>
      <tbody {...{"role":"rowgroup"}}>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a label. Without a color modifier, the label's default style is grey. Use a color modifier to change the label color. Use a `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {` if the label is an overflow label used in the label group. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label__content`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
              {`, `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Iniates a label content. Use as an `}
              <code {...{"className":"ws-code"}}>
                {`<a>`}
              </code>
              {` element if the label serves as a link. Use a `}
              <code {...{"className":"ws-code"}}>
                {`<button>`}
              </code>
              {` if the label serves as an action. `}
              <strong>
                {`Required`}
              </strong>
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label__icon`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates a label icon.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label__text`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`<span>`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Initiates label text.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-outline`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies label for outline styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-overflow`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies label for overflow styles for use in a label group.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-blue`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label to have blue colored styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-green`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label to have green colored styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-orange`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label to have orange colored styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-red`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label to have red colored styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-purple`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label to have purple colored styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-cyan`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies the label to have cyan colored styling.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-editable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies label for editable styles.`}
            </div>
          </td>
        </tr>
        <tr {...{"role":"row"}}>
          <td {...{"role":"cell","data-label":"Class"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-m-editable-active`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Applied to"}}>
            <div>
              <code {...{"className":"ws-code"}}>
                {`.pf-c-label.pf-m-editable`}
              </code>
            </div>
          </td>
          <td {...{"role":"cell","data-label":"Outcome"}}>
            <div>
              {`Modifies editable label for active styles.`}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </React.Fragment>
);
Component.displayName = 'ComponentsLabelHtmlDocs';
Component.pageData = pageData;

export default Component;

import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';

const pageData = {
  "id": "Punctuation",
  "section": "UX writing",
  "source": "design-guidelines",
  "slug": "/ux-writing/punctuation/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/content/punctuation.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <AutoLinkHeader {...{"id":"ampersand-","size":"h2","className":"ws-title ws-h2"}}>
      {`Ampersand (&)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Avoid using ampersands (&), and use "and" instead.`}
    </p>
    <AutoLinkHeader {...{"id":"referring-to-text-in-the-ui","size":"h2","className":"ws-title ws-h2"}}>
      {`Referring to text in the UI`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use bold text (not quotation marks) when referring to an element or text in the UI.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {`Before`}
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                {`After`}
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`Add user to the “Group title” team`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Add user to the `}
                <strong>
                  {`Group title`}
                </strong>
                {` team`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"buttons","size":"h2","className":"ws-title ws-h2"}}>
      {`Buttons`}
    </AutoLinkHeader>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Avoid punctuation on buttons.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Do not create icons on buttons using punctuation (for example, "+"). Instead, refer to `}
        <PatternflyThemeLink {...{"to":"/guidelines/icons"}}>
          {`PatternFly's icons page`}
        </PatternflyThemeLink>
        {` for any icons you place on buttons.`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"commas","size":"h2","className":"ws-title ws-h2"}}>
      {`Commas`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`When a conjunction connects two independent clauses, a comma should precede it. Also put a comma before “and” if it’s the Oxford comma.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        <em>
          {`I like to run, and I like to swim`}
        </em>
        {` — A comma is needed before “and” because “and” connects two independent clauses.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`I like to run and swim`}
        </em>
        {` — A comma is not needed before “and” because “and” does not connect two independent clauses.`}
      </li>
      <li {...{"className":"ws-li"}}>
        <em>
          {`I like to run, swim, and hike`}
        </em>
        {` — The Oxford comma is included before “and.”`}
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"ellipses-...","size":"h2","className":"ws-title ws-h2"}}>
      {`Ellipses (...)`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Ellipses (...) are commonly used when information is omitted. You might use ellipses when you cannot fit all words onto a line or when you remove less relevant information (like in a quote).`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before ellipses`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After ellipses`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before ellipses"}}>
              <div>
                {`They said, “For many reasons, I think the PatternFly community is great.”`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After ellipses"}}>
              <div>
                {`They said, “...I think the PatternFly community is great.”`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <p {...{"className":"ws-p"}}>
      {`Ellipses can also be used in more creative contexts to signify someone’s thoughts or speech, like a pause for thinking.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`But I was just trying to...never mind, forget it.`}
    </p>
    <AutoLinkHeader {...{"id":"em-dash-en-dash-hyphen","size":"h2","className":"ws-title ws-h2"}}>
      {`Em dash, en dash, hyphen`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use an `}
      <strong>
        {`em dash (—)`}
      </strong>
      {` to add emphasis to the phrase or sentence following it. You can also use an em dash to provide additional information or specification in the middle of a sentence.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`Good design is not about you—it’s about the user.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`I like drinking something hot—coffee, tea, or cocoa—during my morning meetings.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Use an `}
      <strong>
        {`en dash ( – )`}
      </strong>
      {` to separate numbers in a series.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Example:
We plan on having 100–150 attendees.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`hyphen ( - )`}
      </strong>
      {`  if it's part of a term (such as "walk-through") or someone's name (such as "Mary-Jane").`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a `}
      <strong>
        {`hyphen ( - )`}
      </strong>
      {` for a compound adjective that comes before the noun it modifies, but omit the hyphen if the first adjective ends in "-ly."`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`I like when my documentation is up to date.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`I write up-to-date documentation.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`He is a highly talented writer.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`She is a high-quality job candidate.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Do NOT use a `}
      <strong>
        {`hyphen ( - )`}
      </strong>
      {` for most prefixes, specifically the following:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`auto- (autopopulate; autoloading)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Pre- (prerequisite)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Re-  (recreate)`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Sub- (submerge)`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`Exception: Use a hyphen ( - ) for prefixes when adding a modifer prefix like “non," such as "non-Red Hatter."`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Unsure about hyphenation for other terms? Refer to `}
      <PatternflyThemeLink {...{"to":"https://www.merriam-webster.com/"}}>
        {`Merriam-Webster's online dictionary`}
      </PatternflyThemeLink>
    </p>
    <AutoLinkHeader {...{"id":"exclamation-mark","size":"h2","className":"ws-title ws-h2"}}>
      {`Exclamation mark`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use exclamation marks sparingly. Don’t use one to generate excitement; only use an exclamation mark if the user is actually experiencing something exciting. You can also use an exclamation mark for something cautionary, like “Stop!” or “Watch out!”`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`To more accurately capture human expression, use an exclamation mark after just a few words, not after a long sentence.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`Congratulations on creating an account!`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Congratulations! You created an account.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"parallel-structure","size":"h2","className":"ws-title ws-h2"}}>
      {`Parallel structure`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`All items in a list or series should be of the same part of speech.`}
    </p>
    <div className="ws-content-table">
      <table {...{"className":"ws-table pf-c-table pf-m-grid-lg pf-m-compact","role":"grid"}}>
        <thead>
          <tr {...{"role":"row"}}>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`Before`}
                </strong>
              </div>
            </th>
            <th {...{"className":" pf-m-wrap","role":"columnheader","scope":"col"}}>
              <div>
                <strong>
                  {`After`}
                </strong>
              </div>
            </th>
          </tr>
        </thead>
        <tbody {...{"role":"rowgroup"}}>
          <tr {...{"role":"row"}}>
            <td {...{"role":"cell","data-label":"Before"}}>
              <div>
                {`Remember these important tips: Write clearly; conduct research; spelling and grammar.`}
              </div>
            </td>
            <td {...{"role":"cell","data-label":"After"}}>
              <div>
                {`Remember these important tips: Write clearly; conduct research; use correct spelling and grammar.`}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
</div>
    <AutoLinkHeader {...{"id":"parentheses","size":"h2","className":"ws-title ws-h2"}}>
      {`Parentheses`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use parentheses to indicate a possible plural of something, like "Account(s)." If a user can select one thing or multiple things, use the plural form.`}
    </p>
    <AutoLinkHeader {...{"id":"quotation-marks","size":"h2","className":"ws-title ws-h2"}}>
      {`Quotation marks`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use double quotation marks (“Example”) for quotes and article titles. Use single quotation marks (‘Example’) for quotes or article titles within double quotation marks.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Double quotation marks and single quotation marks are sometimes used interchangeably across various publications. In some contexts, they can mean the same thing. Double quotation marks are the standard in American English, and single quotation marks are usually the standard in British English.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`But double and single quotation marks are not always interchangeable, particularly when you need to use quotation marks within quotation marks. In this case, single quotation marks are used inside of double quotation marks.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`An article title within a dialogue:  `}
        <em>
          {`Abi said, “I love the article Cat wrote. It’s called ‘Improving product design with an open source mindset,’ and it’s such a fun read.”`}
        </em>
      </li>
      <li {...{"className":"ws-li"}}>
        {`A quote within a dialogue: `}
        <em>
          {`“I like Cat’s article too, Abi. My co-worker told me, ‘PatternFly has the best publication ever.’ That made me smile.”`}
        </em>
      </li>
    </ul>
    <AutoLinkHeader {...{"id":"semicolon-and-colon","size":"h2","className":"ws-title ws-h2"}}>
      {`Semicolon and colon`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use a colon to introduce a list or a series. You can also use it as a pause before introducing related information.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Use a semicolon to connect two closely related independent clauses. You can also use a semicolon instead of a comma to separate long list items for extra clarity.`}
    </p>
    <p {...{"className":"ws-p"}}>
      {`Examples:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`That leads me to my favorite hobby: running.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`I love running in the morning; it wakes me up.`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Every morning, I enjoy eating toast, bacon, and eggs; reading a book; and relaxing on the porch.`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      <strong>
        {`Note`}
      </strong>
      {`: If you're tempted to use a semicolon in the UI, try breaking up the sentence and cutting down on your words instead.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'UxWritingPunctuationDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;

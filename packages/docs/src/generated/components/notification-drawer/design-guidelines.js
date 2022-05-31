import React from 'react';
import { AutoLinkHeader, Example, Link as PatternflyThemeLink } from 'theme-patternfly-org/components';
import srcImport318 from '../../../content/design-guidelines/components/notification-drawer/./img/Simple-Notification-Drawer.png';
import srcImport319 from '../../../content/design-guidelines/components/notification-drawer/./img/Complex-Notification-Drawer.png';
import srcImport320 from '../../../content/design-guidelines/components/notification-drawer/./img/Notification-drawer-in-page.png';
const pageData = {
  "id": "Notification drawer",
  "section": "components",
  "source": "design-guidelines",
  "slug": "/components/notification-drawer/design-guidelines",
  "sourceLink": "https://github.com/patternfly/patternfly-org/blob/main/packages/docs/src/content/design-guidelines/components/notification-drawer/notification-drawer.md"
};
pageData.examples = {
  
};

const Component = () => (
  <React.Fragment>
    <p {...{"className":"ws-p"}}>
      {`A `}
      <strong>
        {`notification drawer`}
      </strong>
      {` is a place where users can view and manage notifications that are generated by the system. It allows them to see a list of notifications without the need to navigate away from the current screen.`}
    </p>
    <AutoLinkHeader {...{"id":"elements","size":"h2","className":"ws-title ws-h2"}}>
      {`Elements`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"basic-notification-drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Basic notification drawer`}
    </AutoLinkHeader>
    <img src={srcImport318} height={srcImport318.height * 743 / srcImport318.width} {...{"alt":"basic notification drawer","width":"743","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Header:`}
          </strong>
          {` The header contains the title of the drawer (default to “Notifications”).`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Unread count (optional):`}
          </strong>
          {` If unread notifications exist, report the number of unread notifications. Otherwise leave blank.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Global actions (optional):`}
          </strong>
          {` This menu contains actions that can be applied against all notifications in the drawer. The following are standard menu items. This menu may be added according to the needs of your application.`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Mark all read`}
            </strong>
            {`: Marks all notifications in the drawer as read.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Clear all`}
            </strong>
            {`: Clears all notifications from the drawer.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Unclear last`}
            </strong>
            {`: Unclears that last cleared or set of cleared notifications (if supported).`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Settings`}
            </strong>
            {`: Opens notification settings.`}
          </li>
        </ul>
      </li>
    </ol>
    <ol {...{"start":4,"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Close button:`}
          </strong>
          {` Closes the drawer.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Notification:`}
          </strong>
          {` Each notification has a status icon, message text, and is time stamped. The message text may include embedded links. Unread messages are displayed in bold-faced type. Single clicking a notification (or selecting the `}
          <strong>
            {`Mark as read`}
          </strong>
          {` action from the menu) marks it as read.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Time stamp:`}
          </strong>
          {` Time stamps can be displayed either in relative or absolute time. Relative time is good for events that are more recent. We recommend that any notification less than an hour old have a relative time stamp, for example 20 seconds ago, 5 minutes ago, etc., and that older events switch to absolute time for better precision, June 20 2019 12:45 PM, for example. The switchover point between relative and absolute time may be tuned to your application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Inline actions (optional):`}
          </strong>
          {` Actions that apply to the current notification, only. Standard actions include `}
          <strong>
            {`Mark as read`}
          </strong>
          {` and `}
          <strong>
            {`Clear`}
          </strong>
          {`. This menu may be customized as required by the application.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"grouped-notification-drawer","size":"h3","className":"ws-title ws-h3"}}>
      {`Grouped notification drawer`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`If you want to sort notifications by category, collapsible headers may be used to group content. The grouped notification drawer utilizes an accordion pattern where only one category will be opened at a time. By default, the first category will be opened, although if the drawer is closed and reopened, the prior state should persist.`}
    </p>
    <img src={srcImport319} height={srcImport319.height * 724 / srcImport319.width} {...{"alt":"grouped notification drawer","width":"724","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Notification group:`}
          </strong>
          {` Notifications can be grouped by category. You may have any number of categories, however more than 3-4 categories is not recommended. Each category header will have a name. Clicking on the header will expand the category (and collapse the current category).`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Unread badge (optional):`}
          </strong>
          {` A badge will report the number of unread notifications in each category. If there are no unread notifications, the badge is hidden.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Global actions (optional):`}
          </strong>
          {` For the grouped drawer, the global actions menu should further clarify what content the actions apply to. Standard menu items include (the menu may be customized according to the needs of your application):`}
        </p>
        <ul {...{"className":"ws-ul"}}>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Mark all read`}
            </strong>
            {`: Marks all notifications in the drawer as read.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Clear all`}
            </strong>
            {`: Clears all notifications from the drawer.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Mark current category read`}
            </strong>
            {`: Marks all notifications in the currently opened category as read.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Clear current category`}
            </strong>
            {`: Clears all notifications from the currently opened category.`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Unclear last`}
            </strong>
            {`: Unclears that last cleared or set of cleared notifications (if supported).`}
          </li>
          <li {...{"className":"ws-li"}}>
            <strong>
              {`Settings`}
            </strong>
            {`: Opens notification settings.`}
          </li>
        </ul>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"placement-in-a-page","size":"h3","className":"ws-title ws-h3"}}>
      {`Placement in a page`}
    </AutoLinkHeader>
    <img src={srcImport320} height={srcImport320.height * 825 / srcImport320.width} {...{"alt":"notification drawer placement","width":"825","className":"ws-img"}}>
    </img>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Notification badge:`}
          </strong>
          {` Whenever the notification drawer is used, a `}
          <PatternflyThemeLink {...{"to":"/components/notification-badge"}}>
            {`notification badge`}
          </PatternflyThemeLink>
          {` must be placed in the masthead. Clicking on the badge will toggle the drawer open or closed. Depending on options supported in the application, the badge can also be used to display the number of notifications in the drawer and whether there are unread or critical notifications needing attention. See the `}
          <PatternflyThemeLink {...{"to":"/components/notification-badge"}}>
            {`notification badge`}
          </PatternflyThemeLink>
          {` usage guidelines for more information about these options.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          <strong>
            {`Drawer:`}
          </strong>
          {` The notification drawer lives in slide-out panel that overlays page content and is anchored to the right-hand edge of the viewport.`}
        </p>
      </li>
    </ol>
    <AutoLinkHeader {...{"id":"usage","size":"h2","className":"ws-title ws-h2"}}>
      {`Usage`}
    </AutoLinkHeader>
    <AutoLinkHeader {...{"id":"when-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Use the notification drawer when you want a place for the user to easily access a history of notifications from any place within the application.`}
    </p>
    <AutoLinkHeader {...{"id":"when-not-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`When not to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`Do not use the notification drawer as the sole place to notify users about events requiring immediate action. In these cases, a modal message dialog is the preferred choice.`}
    </p>
    <AutoLinkHeader {...{"id":"how-to-use","size":"h4","className":"ws-title ws-h4"}}>
      {`How to use`}
    </AutoLinkHeader>
    <p {...{"className":"ws-p"}}>
      {`The notification drawer provides a flexible container where users can view and manage notifications. When using the notification drawer in an application, consider the following questions:`}
    </p>
    <ul {...{"className":"ws-ul"}}>
      <li {...{"className":"ws-li"}}>
        {`What notifications are important keep in the drawer?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`How many or how long will notifications be kept in the drawer?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`Will it help to sort notifications into categories?`}
      </li>
      <li {...{"className":"ws-li"}}>
        {`What does it mean to clear a notification from the drawer?`}
      </li>
    </ul>
    <p {...{"className":"ws-p"}}>
      {`When the notification drawer is being used, notifications will undergo the following life-cycle:`}
    </p>
    <ol {...{"className":"ws-ol"}}>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`New notifications should be added to the drawer according to policies established by the application. If the application can track new/unread notifications, then Notification badge will be set to reflect that new/unread notifications have been added to the drawer.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Notifications are always listed in reverse chronological order - newest to oldest.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`If supported, notifications are considered unread until a user takes action to mark them as read.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Notifications will remain in the drawer until either the user takes an action to clear them or they expire based on policies established by the application.`}
        </p>
      </li>
      <li {...{"className":"ws-li"}}>
        <p {...{"className":"ws-p"}}>
          {`Clearing a notification removes it from the drawer but does not delete it from the system. Depending on application requirements, notifications may be retained in an audit log or similar location after they have been removed from the drawer. Applications may consider supporting an Unclear action to restore the last cleared notification.`}
        </p>
      </li>
    </ol>
    <p {...{"className":"ws-p"}}>
      {`In cases where it makes sense to immediately notify the user about a change in state or other condition requiring attention, a `}
      <PatternflyThemeLink {...{"to":"/components/alert/design-guidelines#toast-alerts"}}>
        {`toast alert`}
      </PatternflyThemeLink>
      {` may be displayed at the same time as notifications are added to the drawer. The drawer has the advantage of preserving a history of notifications after they have been read where toast alerts cannot be recovered once they are dismissed. As part of your alerting design, you should consider what types of notifications may be generated by the system, whether there is benefit from immediately displaying them to the user, and whether it's important to preserve them.`}
    </p>
  </React.Fragment>
);
Component.displayName = 'ComponentsNotificationDrawerDesignGuidelinesDocs';
Component.pageData = pageData;

export default Component;

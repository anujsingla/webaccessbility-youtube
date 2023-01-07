import { List, ListItem } from "@patternfly/react-core";
import { ARIAExamples } from "../../examples/ARIAExamples";
import { Resources } from "./Resources";

export function ARIA() {
  return (
    <>
      <b>WAI-ARIA</b>
      <p>
        Web Accessibility Initiative — Accessible Rich Internet Applications
        (WAI-ARIA) It helps to improve the accessiblity of web to people with
        disabilities. WCAG (web accessibility guideline) focus on static web
        content and ARIA focus on making interaction or dynamic content more
        accessible. Interaction like submitting the form, purchasing from
        ecommerence, select value from dropdown, modals, many more.
      </p>
      <b>Note:</b>
      <p>
        You should only use WAI-ARIA when you need to. Always try to use
        semantic elements. Try to not use it if not required. It does not modify
        the DOM or add new functionality to elements. It won't change elements
        behaviour in any way. It just manipulates elements represenation in the
        accessibility tree. It modify an element role, name, state, properties
        for assistive technologies.
      </p>
      <List>
        <ListItem>Roles</ListItem>
        <ListItem>Properties</ListItem>
        <ListItem>States</ListItem>
        <ListItem>Name</ListItem>
      </List>
      <b>Roles:</b>
      <p>
        It defines what kind of UI element is this? It is a button, checkbox,
        text or else. ARIA roles used to describe elements that don't exist in
        html or not full support in browser or user don't want to use semantic
        elements. HTML introduce semantic elements to define page features
        &lt;nav /&gt;, &lt;footer /&gt; &lt;header /&gt; &lt;aside /&gt; or many
        more. Before that users use CSS classes or IDs to achieve this but it is
        problematic for screen readers or assistive technology. &lt;div
        className=&quot;nav&quot; /&gt; The role attribute provide semantics.
        many semantic elements have role like &lt;input type=&quot;radio&quot;
        /&gt;, it has radio as a role. &lt;ul role=&quot;tabpanel&quot;&gt;
        &lt;li&gt;hh&lt;/li&gt; &lt;/ul&gt; &lt;div
        role=&quot;form&quot;&gt;&lt;/div&gt; &lt;form&gt;&lt;/form&gt;
        (semantic form) - Always use this one
      </p>
      <b>Properties:</b>
      <p>
        It is used to give extra meaning to the elements. aria-required="true" -
        It indicates user input is required on the elements before submit the
        form.
      </p>
      <p>
        <b>aria-labelledby</b>- All interactive elements must have an accessible
        name. It is used to reference another element to define its accessible
        name. &lt;button&gt; &lt;a&gt; has their accessible name between opening
        closing tag. But &lt;input&gt; &lt;textarea&gt; get accessible name via
        label elements. &lt;div id=&quot;tbLabel&quot;&gt;Email Address
        *&lt;/div&gt; &lt;div role=&quot;textbox&quot; contenteditable
        aria-labelledby=&quot;tblabel&quot; aria-required=&quot;true&quot;
        id=&quot;email1&quot;&gt; &lt;/div&gt; &lt;label
        for=&quot;email1&quot;&gt;Email Address (required)&lt;/label&gt;
        &lt;input type=&quot;email&quot; id=&quot;email1&quot; required /&gt;
      </p>
      <b>States:</b>
      <p>
        It is used to define the current conditions of elements like enable,
        disable, hide, selected aria-disabled="true" - It define form input is
        disabled to the screen reader. We change state programmatically via
        javascript. aria-hidden - It helps to hide the elements to exposed to
        screen readers or accessiblitity API or tree. It remove elements and
        children from the accessible tree. It is used for collapsed content,
        hide modal, sidebar, images, icons. Don't use on focusable elements.
      </p>
      <b>Name:</b>
      <p>
        A label or identifier for element. It is used by screenreader to
        announce an element.
      </p>
      <b>Difference between aria-label, aria-labelledby, aria-describedby:</b>
      <p>
        <b>aria-label</b> - It is used to override element name and replacing it
        with name given by you.
      </p>
      <p>
        <b>aria-labelledby</b> - It is used to override the element name and
        replace it with the content of another element. aria-labelledby is set
        to the id of another element.
      </p>
      <pre>
        &lt;div id=&quot;tbLabel&quot;&gt;Email Address *&lt;/div&gt; &lt;div
        role=&quot;textbox&quot; contenteditable
        aria-labelledby=&quot;tblabel&quot; aria-required=&quot;true&quot;
        id=&quot;email1&quot;&gt; &lt;/div&gt;
      </pre>
      <p>
        <b>aria-describedby</b> - It is used to set element description of the
        another element. It takes an id of another element same as
        aria-labelledby. It provide extra information of the element.
      </p>
      <pre>
        &lt;form&gt; &lt;label for=&quot;name&quot;&gt;name&lt;/label&gt;
        &lt;input id=&quot;name&quot; type=&quot;text&quot;
        aria-describedby=&quot;nameValue&quot; /&gt; &lt;p
        id=&quot;nameValue&quot;&gt; Name may contain alphanumeric characters.
        &lt;/p&gt; &lt;/form&gt;
      </pre>
      <p>
        <b>ARIA Live Regions:</b>
      </p>
      <p>
        Suppose something is dynamically updates on the screen like alert
        message, time changes as per timer or many more. How screen reader know
        and let user know that content has changed. aria-live attribure let's
        screen reader know that content will change dynamically, they should
        take care and announce those changes as per priority. assertive - It is
        high priority and screen reader interrupt user actions to announce
        changes. polite - it is low priority and screen reader wait untitl the
        user is done to announuce updates. aria-atomic="true" - It is used to
        read all the content inside the aria-live region by the screen reader.
        It can be applied to any html elements. Try to not use if content is not
        important. https://www.w3.org/TR/wai-aria-1.1/#aria-live
      </p>
      <p>
        <b>Accessibility tree:</b>
      </p>
      <p>
        It is a part of DOM. It provides information from the DOM in a format
        that can be understood by assistive technologies like screen reader,
        speech input software. It needs semantic information of the element like
        button. It needs 4 properties of the element like Name, description,
        state, role. Suppose if you have button on the screen and you can easily
        see the button but if you are blind and use screen reader then you can
        not see it. You will use assistive technologies to check it on the web.
        Screen reader need to tell that it is button, state of the button.
        Accessibility tree provides all the information to the assistive
        technologies. Always try to use native html elements because html
        support all the type of assistive technology. How to view accessibility
        tree?
      </p>
      <br />
      <br />
      <h2>Examples:</h2>
      <ARIAExamples />
      <br />
      <Resources />
    </>
  );
}

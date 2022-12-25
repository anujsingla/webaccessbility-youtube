import { List, ListItem } from "@patternfly/react-core";
export function Resources() {
  return (
    <>
      <br />
      <h3>Helpful Resources:</h3>
      <List>
        <ListItem>
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.w3.org/WAI/standards-guidelines/wcag/
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://www.a11yproject.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.a11yproject.com/
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives"
            target="_blank"
            rel="noreferrer"
          >
            https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable"
            target="_blank"
            rel="noreferrer"
          >
            https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable
          </a>
        </ListItem>
        <ListItem>
          <a
            href="https://reactjs.org/docs/accessibility.html"
            target="_blank"
            rel="noreferrer"
          >
            https://reactjs.org/docs/accessibility.html
          </a>
        </ListItem>
      </List>
    </>
  );
}

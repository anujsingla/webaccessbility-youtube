import { List, ListItem } from "@patternfly/react-core";
import { Resources } from "./Resources";

export function Home() {
  return (
    <>
      <h2>What we will learn from this playlist:</h2>
      <List>
        <ListItem>
          What is Web accessibility and how it is benefit for disable people
        </ListItem>
        <ListItem>4 Principle, Standard of Web accessibility - POUR</ListItem>
        <List>
          <ListItem>Perceivable</ListItem>
          <ListItem>Operable</ListItem>
          <ListItem>Understandable</ListItem>
          <ListItem>Robust</ListItem>
        </List>
        <ListItem>
          Create accessible Form that include error and validation message
        </ListItem>
        <ListItem>Accessibility in UI components</ListItem>

        <ListItem>
          Debug website with tools.
          <List>
            <ListItem>axe devtool</ListItem>
            <ListItem>Lighthouse</ListItem>
            <ListItem>web developer tool</ListItem>
            <ListItem>Many more...</ListItem>
          </List>
        </ListItem>
        <ListItem>Tool which help us to check the Web accessibility</ListItem>
        <ListItem>Keyboard focus</ListItem>
        <ListItem>Manual and automate testing</ListItem>
        <ListItem>
          eslint plugin (eslint-plugin-jsx-a11y)
          <List>
            <ListItem>
              (eslint-plugin-jsx-a11y) -
              https://www.npmjs.com/package/eslint-plugin-jsx-a11y
            </ListItem>
            <ListItem>
              (@axe-core/react) - https://www.npmjs.com/package/@axe-core/react
            </ListItem>
          </List>
        </ListItem>
      </List>
      <br />
      <h2>
        WCAG categorized guidelines into three levels that represents the
        importance of each guidelines:
      </h2>
      <List>
        <ListItem>
          <b>Level A:</b> Must be done or some group will not be able to access
          the content.
        </ListItem>
        <ListItem>
          <b>Level AA:</b> Should be done, or some group will have difficulty
          accessing the content.
        </ListItem>
        <ListItem>
          <b>Level AAA:</b> Can be done to improve usability or enhance
          accessibility further.
        </ListItem>
      </List>
      <br />
      <Resources />
    </>
  );
}

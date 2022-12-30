import { Resources } from "./Resources";

export function Robust() {
  return (
    <>
      <h2>Robust</h2>
      <p>
        Robust means web content is compatible with different browsers,
        assistive technologies and other user agents..
      </p>
      <p>In Principle 1, we learn users can see the content.</p>
      <p>In principle 2, we learn users can interact with content.</p>
      <p>
        In principle 3, We learn users can undserstand and read the content.
      </p>
      <p>
        In principle 4, We will learn, users must be able to access the content
        on different machine, browser or devices.
      </p>
      <p>
        We should develop our web in such a way, it will not break in the new
        version or assistive technologies. Web technologies change quickly and
        our web application should work with present and future technologies.
      </p>
      <br />
      <Resources />
    </>
  );
}

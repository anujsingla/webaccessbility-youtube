export function Operable() {
  return (
    <>
      <h2>Operable</h2>
      <ul className="pf-c-list">
        <li>
          Keyboard Accessible (Make all functionality available from a keyboard
          instead of a mouse)
        </li>
        <li>Enough Time (Give time to users to perform actions)</li>
        <li>
          Flashing and Seizures (Avoid flashes or flickers information as it may
          trigger seizures)
        </li>
        <li>Navigable (Users can easily navigate, find contents).</li>
      </ul>
      <div>
        <br />
        <h3>Keyboard Accessible:</h3>
        <p>
          We should make our website UI in such a way it can be accessible by
          keyboard. Make all functionality available from a keyboard.Users don't
          need to use mouse. A common way to move from one component to another
          component by pressing tab key. A component like button should have
          visible focus around the selected button or link in the list. We can
          access web fast by keyboard if you know the shortcuts.
        </p>
        <br />
        <h3>Why we make web pages accessible without a mouse?</h3>
        <ul className="pf-c-list">
          <li>Some users don't want to use mouse.</li>
          <li>Some users have difficulties using a mouse.</li>
          <li>Blind users can see screen and not able to see mouse pointer.</li>
          <li>
            Low vision may have trouble to see the mouse pointer on the screen.
          </li>
          <li>Some users not able to hold the mouse for the long time.</li>
          <li>Some users forgot for left, right, double clicks.</li>
        </ul>
        <p>
          <b>No Keyboard trap:</b> A keyboard trap is an area of a web page
          where a person gets stuck and can not come out without a mouse.
          Textarea and media are the main culprints for this. We should provide
          proper information to escape from a keyboard trap.
        </p>
      </div>
      <div>
        <br />
        <h3>Enough Time:</h3>
        <p>
          We should provide enough time to read and use content on the web. Some
          users have problems to understand information fast or take more time
          to use the content. Some users have learning disability to read text.
          Users who use assistive technologies need more time to consume
          information on a web page. Screeen reader users need to explore a page
          before they understand how the page is organized. Seniors citizen or
          low vision users need to zoom a lot to process information. Banking
          websites or other secure website automatically logout after some
          period of time. They should provide proper time period, what time you
          have or have no possiblity to extend that time. Users will not confuse
          if you provide proper information on the web. Some website need to
          update the content frequently like news, weather reports, stock
          market. We can provide someways to users to refresh website content
          like provide dropdown 15,30,60 minutes or manually refresh the page.
          Users can set it as per their requirement.
        </p>
      </div>
      <div>
        <br />
        <h3>Flashing and Seizures:</h3>
        <p>Some users have problem with flashing or flicking lights</p>
        <br />
        <h3>Try to avoid some content on the web.</h3>
        <ul className="pf-c-list">
          <li>Flashes more than three times in one second.</li>
          <li>Covers a large area of the screen.</li>
          <li>Is very bright.</li>
        </ul>
        <h3>
          There are three reason for flickering lights on computer screen:
        </h3>
        <ul className="pf-c-list">
          <li>Flashes can be caused by display.</li>
          <li>
            Flashes can be caused by computer setting how it renders images or
            other content on the screen.
          </li>
          <li>
            Flashes can be caused by content like SVG images or animation.
          </li>
        </ul>
        <p>
          As a developer or content author, we don't have control for first two
          but we can control for content animation. Try to avoid or disable
          animation from interactions if it is not essential.
        </p>
        <p>
          Examples:
          https://www.google.com/search?q=svg+animation+gif&tbm=isch&hl=en-US&sa=X&ved=2ahUKEwjQ88SQhpn8AhWojNgFHVz1C0cQrNwCKAB6BQgBEPkB&biw=1522&bih=758#imgrc=MaNxzOc2fRLbSM
          https://www.google.com/search?q=svg+animation+gif&tbm=isch&hl=en-US&sa=X&ved=2ahUKEwjQ88SQhpn8AhWojNgFHVz1C0cQrNwCKAB6BQgBEPkB&biw=1522&bih=758#imgrc=1hNx_ufnRJIFmM
        </p>
        <h3>Who does this help?</h3>
        <ul className="pf-c-list">
          <li>Users have certain seizure or migraine disorders.</li>
          <li>Users who have difficulty tracking moving objects.</li>
          <li>Users who have attention deficit disorders.</li>
        </ul>
      </div>
      <div>
        <br />
        <h3>Navigable:</h3>
        <p>
          We should structure our content in such a way so that users can easily
          navigate, find content, and determine where they are. Screen reader
          users navigate from heading to heading to check the information. Some
          users only navigate by keyboard also. We should divide large
          information or large block of content like text passages into smaller
          one and adding heading to each. Divide long form into small one. It
          help to navigate content and understand it easily. We should also
          update the page title as per page content like homepage, shopping car
          or checkout page, Product page. Example: Explain by ecommerge website
          like amazon Skip to content: Many web pages have repeated content like
          navigation links in the header. We show same links on every page.
          Suppose if page has 10 navigation on every page then users need to
          press 10 tabs to navigate it and go on the main content. we can skip
          this by using "skip to content" link as the first link on every page.
        </p>
      </div>
    </>
  );
}

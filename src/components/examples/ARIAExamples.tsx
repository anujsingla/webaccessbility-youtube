import { useState } from "react";

export function ARIAExamples() {
  const [firstName, onChangeFirstName] = useState("");
  const onClickButton = () => {
    console.log("onClickButton");
  };
  return (
    <>
      <h2>ARIA Examples</h2>
      <div
        role="button"
        className="pf-c-button pf-m-primary"
        tabIndex={0}
        onClick={onClickButton}
        onKeyDown={onClickButton}
      >
        Div Button
      </div>
      <button className="pf-c-button pf-m-primary" onClick={onClickButton}>
        semantic button
      </button>

      <button className="pf-c-button pf-m-primary" onClick={onClickButton}>
        x
      </button>
      <p>Button with aria-label</p>
      <button
        aria-label="close button"
        className="pf-c-button pf-m-primary"
        onClick={onClickButton}
      >
        x
      </button>

      <div aria-hidden="true">Aria hidden value</div>
      <div>Not Aria hidden value</div>

      <br />
      <br />
      <form>
        <label htmlFor="name">name</label>
        <input id="name" type="text" aria-describedby="nameValue" />
        <p id="nameValue">Name may contain alphanumeric characters.</p>
      </form>
      <br />
      <br />
      <p>aria-describedby with multiple id</p>
      <form>
        <label htmlFor="name1">name</label>
        <input
          id="name1"
          type="text"
          aria-describedby="nameValue extradetails"
        />
        <p id="nameValue">Name may contain alphanumeric characters.</p>
        <p id="extradetails">Start name value with A.</p>
      </form>
      <br />
      <br />
      <p>ARIA Live Regions with aria-live</p>
      <form>
        <label htmlFor="firtName">First Name</label>
        <input
          id="firtName"
          type="text"
          value={firstName}
          onChange={(e) => onChangeFirstName(e.target.value)}
        />
        {firstName && (
          <div aria-atomic="true" aria-live="assertive">
            Welcome {`${firstName} alertlive`}
          </div>
        )}
      </form>
    </>
  );
}

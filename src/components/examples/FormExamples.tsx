// import { useState } from "react";

import { useState } from "react";

const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function FormExamples() {
  const [email, setEmail] = useState("");
  const onValidateEmail = () => {
    return mailformat.test(email) || !email ? true : false;
  };
  return (
    <>
      <h2>Form Examples:</h2>
      <br />
      <b>Form as per web accessibility:</b>
      <form className="pf-c-form">
        <div className="mb">
          <label className="mr" htmlFor="full-name">
            Full Name
            <b className="ml">*</b>
          </label>
          <div>
            <input
              type="text"
              name="name"
              id="full-name"
              aria-describedby="fullNameExtraDesc"
              aria-required="true"
              required
            />
            <div id="fullNameExtraDesc">
              Include your middle name if you have one.
            </div>
          </div>
        </div>
        <div className="mb">
          <label className="mr" htmlFor="email">
            Email
            <b className="ml">*</b>
          </label>
          <div>
            <input
              type="email"
              name="name"
              id="email"
              aria-required="true"
              aria-describedby="invalidEmail expirationWarning"
              aria-invalid={!onValidateEmail()}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!onValidateEmail() && (
              <div
                className="color-red"
                aria-atomic="true"
                id="invalidEmail"
                aria-live="polite"
              >
                Please enter valid email id - {email}
              </div>
            )}
          </div>
        </div>
        <div className="mb">
          <label className="mr" htmlFor="password">
            Password
            <b className="ml">*</b>
          </label>
          <div>
            <input
              type="password"
              name="name"
              id="password"
              aria-describedby="passwordExtraDesc"
              aria-required="true"
              required
            />
            <div id="passwordExtraDesc">
              Use 8 or more characters with a mix of letters, numbers & symbols
            </div>
          </div>
        </div>
        <div className="mb" role="group" aria-labelledby="gender">
          <div id="gender">Gender</div>
          <div>
            <input type="radio" name="gendername" value="male" id="male" />
            <label className="ml" htmlFor="male">
              Male
            </label>
          </div>
          <div>
            <input type="radio" name="gendername" value="female" id="female" />
            <label className="ml" htmlFor="female">
              Female
            </label>
          </div>
        </div>
        <div className="mb">
          <label className="mr" htmlFor="message">
            Message
          </label>
          <div>
            <textarea id="message" />
          </div>
        </div>
        <div className="mb">
          <label className="mr" htmlFor="favoriteCity">
            Which is your favorite city?
          </label>
          <div>
            <select id="favoriteCity" name="select">
              <option value="1">Pune</option>
              <option value="2">Mumbai</option>
              <option value="3">Chandigarh</option>
              <option value="4">Ambala</option>
              <option value="5">Karnal</option>
            </select>
          </div>
        </div>
        <div className="mb">
          <button>Submit</button>
        </div>
      </form>
      <br />
      <b>There is no web accessibility rule follow in this form:</b>
      <form className="pf-c-form">
        <div className="mb">
          <span className="mr">
            Full Name
            <b className="ml">*</b>
          </span>
          <div>
            <input type="text" name="name" id="full-name" />
            <div id="fullNameExtraDesc">
              Include your middle name if you have one.
            </div>
          </div>
        </div>
        <div className="mb">
          <label className="mr">
            Email
            <b className="ml">*</b>
          </label>
          <div>
            <input
              type="email"
              name="name"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {!onValidateEmail() && (
              <div className="color-red" id="invalidEmail">
                Please enter valid email id - {email}
              </div>
            )}
          </div>
        </div>
        <div className="mb" role="group" aria-labelledby="gender">
          <div id="gender">Gender</div>
          <div>
            <input type="radio" name="gendername" value="male" id="male" />
            <label className="ml">Male</label>
          </div>
          <div>
            <input type="radio" name="gendername" value="female" id="female" />
            <label>Female</label>
          </div>
        </div>
      </form>
    </>
  );
}

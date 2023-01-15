// import { useState } from "react";

import { useState } from "react";
import { AuditingToolsExample } from "./AuditingToolsExample";

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
      <form>
        <div className="mb">
          <label htmlFor="full-name">Full Name</label>
          <b className="ml">*</b>
          <div>
            <input
              type="text"
              id="full-name"
              required
              aria-required="true"
              aria-describedby="fullname-desc"
            />
          </div>
          <div id="fullname-desc">Include middle name if you have one.</div>
        </div>
        <div className="mb">
          <label htmlFor="email">Email</label>
          <b className="ml">*</b>
          <div>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-required="true"
              aria-describedby="email-desc invalidEmail"
              aria-invalid={!onValidateEmail()}
            />
          </div>
          <div id="email-desc">Please provide valid email id</div>
          {!onValidateEmail() && (
            <div
              className="color-red"
              id="invalidEmail"
              aria-atomic="true"
              aria-live="polite"
            >
              Please enter valid email id - {email}
            </div>
          )}
        </div>
        <div className="mb" role="group" aria-labelledby="gender">
          <div id="gender"> Gender</div>
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
          <label className="mr" htmlFor="city">
            Favorite City
          </label>
          <div>
            <select id="city" name="select">
              <option value="pune">Pune</option>
              <option value="delhi">Delhi</option>
              <option value="chandigarh">Chandigarh</option>
              <option value="karnal">karnal</option>
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
          <label htmlFor="email2" className="mr">
            Email
            <b className="ml">*</b>
          </label>
          <div>
            <input
              type="email"
              name="name"
              id="email2"
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
            <input type="radio" name="gendername" value="male" id="male2" />
            <label htmlFor="male2" className="ml">
              Male
            </label>
          </div>
          <div>
            <input type="radio" name="gendername" value="female" id="female2" />
            <label htmlFor="female2">Female</label>
          </div>
        </div>
        <div className="mb">
          <label htmlFor="placeholder" className="mr">
            Placeholder
            <b className="ml">*</b>
          </label>
          <div>
            <input id="placeholder" type="text" placeholder="text value" />
          </div>
        </div>
      </form>
      <br />
      <AuditingToolsExample />
    </>
  );
}

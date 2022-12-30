import { Resources } from "./Resources";

export function Understandable() {
  return (
    <>
      <h2>Understandable</h2>
      <p>In Principle 1, we learn users can see the content.</p>
      <p>In principle 2, we learn users can interact with content.</p>
      <p>
        In principle 3, We will learn, users can undserstand and read the
        content.
      </p>
      <p>
        We should use simple proper language. Try to avoid abbreviations,
        unusual words and phrases. If we want to use it, please explain in
        details so that anybody with disability or without disability can easily
        understand it. The site is not fully accessible if they cannot make
        sense of it.
      </p>
      <p>
        Abbreviations
        (https://englishgrammarhere.com/abbreviations/10-abbreviations-and-meaning-in-english/):
        LOL: Laugh out loud OMG: Oh my God
      </p>
      <p>
        Unusual words
        (https://www.thelanguagegallery.com/blog/10-unusual-words-to-add-to-your-english-vocabulary)
        Not easy to understand, we need to check on google or with any expert
        for meaning.
      </p>
      <p>
        Phrases (https://www.ef.edu/english-resources/english-idioms/) Better
        late than never - Better to arrive late than not to come at all. Call it
        a day - Stop working on something.
      </p>
      <ul className="pf-c-list">
        <li>Readable content</li>
        <li>Predictable content</li>
        <li>Input Assistance</li>
      </ul>
      <p>hello, how are you</p>
      <p lang="ja">こんにちは元気ですか</p>

      <div>
        <br />
        <h3>Readable content:</h3>
        <p>
          Content should be readable and understandable for all the users (with
          disability or without disability).
        </p>
        <br />
        <ul className="pf-c-list">
          <li>Identify the primary language on the page.</li>
          <li>Explain abbreviations, unusual words, and phrases.</li>
          <li>Use simple language which is easy to understand.</li>
          <li>
            void Jargon words (Jargon words are special or technical words that
            are understable by a goup of people in a particular profession.)
            SPAM, BUGS, Algorithm, many more.
          </li>
        </ul>
      </div>

      <div>
        <br />
        <h3>Predictable content:</h3>
        <p>
          We should use consistent pattern in our website like links or position
          of the link, button color, shape of headers or many more. It helps
          users to understand or readable our content on the web.They can easily
          predict the content and easy to understand it. If you use different
          header tag for different header then it is not easily to understand by
          disabled users because they are not able to understand either it is h1
          or h2 tag or reason behind it. Pressing the tab, which is normally use
          to jump from one control to another, should not initiate the search.
        </p>
        <br />
      </div>

      <div>
        <br />
        <h3>Input Assistance:</h3>
        <p>
          It means Users to understand the process of entering information. When
          user fill the form details, we should provide proper information,
          which field is required and what need to fill in the input area. If
          user gets error on the screen, how to recover from it. People with
          disability maybe get few errors if we don;t provide proper instruction
          in the form. This guideline seeks to reduce the number of errors that
          users make and help users understand what they must do to correct
          errors.
        </p>
        <br />
        <p>Who will get help from this:</p>
        <ul className="pf-c-list">
          <li>People with disabilities.</li>
          <li>People with screen reader.</li>
          <li>People with braille.</li>
          <li>People who are colorblind.</li>
        </ul>
      </div>
      <br />
      <Resources />
    </>
  );
}

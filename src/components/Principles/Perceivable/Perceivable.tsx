import dinosaurImage from "../../../images/dinosaur.png";
import { Resources } from "./Resources";
export function Perceivable() {
  return (
    <>
      <h2>Perceivable</h2>
      <ul className="pf-c-list">
        <li>Text Alternatives</li>
        <li>Time-Based Media</li>
        <li>Adaptable</li>
        <li>Distinguishable content</li>
      </ul>
      <div>
        <br />
        <h3>Text Alternatives: </h3>
        <br />
        <div>
          <p>Without alt attribute:</p>
          <img width="100" height="100" src={dinosaurImage} />
        </div>
        <div>
          <p>With alt attribute:</p>
          <img
            src={dinosaurImage}
            width="100"
            height="100"
            alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
          />
        </div>

        <div>
          <p>With alt and title attribute:</p>
          <img
            src={dinosaurImage}
            width="100"
            height="100"
            title="The Mozilla red dinosaur"
            alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
          />
        </div>

        <div>
          <p>With aria-labelledby attribute:</p>
          <img
            aria-labelledby="dino-label"
            width="100"
            height="100"
            src={dinosaurImage}
          />
          <p id="dino-label">
            The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing
            upright like a human, with small arms, and a large head with lots of
            sharp teeth.
          </p>
        </div>

        <div>
          <p>With figure and figcaption tag:</p>
          <figure>
            <img
              width="100"
              height="100"
              src={dinosaurImage}
              alt="The Mozilla Tyrannosaurus"
              aria-describedby="dinodescr"
            />
            <figcaption id="dinodescr">
              A red Tyrannosaurus Rex: A two legged dinosaur standing upright
              like a human, with small arms, and a large head with lots of sharp
              teeth.
            </figcaption>
          </figure>
        </div>
      </div>
      <div>
        <br />
        <h3>Time-Based Media: </h3>
        <p>Audio - Podcast, Video plus audio - any video, Video only.</p>
        <p>
          Provide captions, transcripts for the recorded or live video content.
          It helps for people that have hearing loss or problem understanding
          speech. Check youtube video and we can start captions by click on cc
          (Subtilte and close captions) button. Captions, Transcripts, Audio
          descriptions, Sign Language
          https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia#audio_transcripts
          Transcript and captions
          https://www.udemy.com/course/microfrontend-course/learn/lecture/23206832#overview
        </p>
      </div>
      <div>
        <br />
        <h3>Adaptable: </h3>
        <p>
          Website content should be properly aligned and structured which can be
          seen properly on any device like mobile, web, tablet. Heading and
          lists are correctly coded. A lot of people benefit from proper heading
          strcuture, Check with web developer toolbar extension.
        </p>
      </div>
      <div>
        <br />
        <h3>Distinguishable content: </h3>
        <p>
          It means user can easily identify the content including separating
          foreground with background.
        </p>
        <ul className="pf-c-list">
          <li>
            Make color and icon properly to distinguish the content like form
            user should easily see error, success message.
          </li>
          <li>
            Users can resize the text easily. Resize should not lost the
            information.
          </li>
          <li>
            User can control the audio, video like pause, stop, adjust the
            volume.
          </li>
          <li>
            Foreground and background color combination should be accurate.
          </li>
        </ul>
      </div>
      <div></div>
      <Resources />
    </>
  );
}

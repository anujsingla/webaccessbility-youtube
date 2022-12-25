/*
Web accessbility

What we will learn from this playlist:
- What is Web accessibility and how it is benefit for disable people
- 4 Principle, Standard of Web accessibility - POUR
-- Perceivable, Operable, Understandable, Robust
- Create accessible Form that include error and validation message
- Accessibility in UI components
- Debug website with tools.
- Tool which help us to check the Web accessibility
-- axe devtool, Lighthouse, web developer tool
- Keyboard focus
- Use ARIA
- Manual and automate testing.
-- eslint plugin (eslint-plugin-jsx-a11y) - https://www.npmjs.com/package/eslint-plugin-jsx-a11y

Resources:
https://www.w3.org/WAI/standards-guidelines/wcag/
https://www.a11yproject.com/
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable
https://reactjs.org/docs/accessibility.html

Web accessibility means anybody with disabilities or without disabilities
can access the web application. Web is an increasingly important resource
in many aspects of life: government information, education resources,
news or many more. So we should make web accessible to provide equal acess
and equal opportunity to people with disabilities.
Accessibility is a team effort so we need equal efforts from all team members
like designers, developers, QA, Program team.

- web access with disabilities images 
https://www.google.com/search?q=web+access+with+disabilities&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiyx6qDvIP8AhW41nMBHUZeBOAQ_AUoAXoECAEQAw&biw=1536&bih=758&dpr=1.25

First step to understand how people with disabilities use the web.
How blind people use screen reader to interact with web.
How people use joystick to interact with web
Mouth stick
Some people use text-to-speech app

some people think accessbility is just a checklist.
Digital information be accessible and well coded.

Important points:
- Page title is very important because we have multiple tabs open. It helps 
to understand where on the web they are.

- Properly heading structure (h1, h2, h3 - h6) of the page. It helps to
understand the format of the information.

- Link text is very important. We should not use link with ("learn more", "click here")
or shortcut text.
We use like this "Signup for the family plan" "more information for family plan"

- Alt text important for image to understand it.

- List items properly align.

- Captions makes video accessible

- Provide proper space, font size, color contrast.

- Web focus is clearnly visible like button focus, link focus.

How blind and deaf users access web: Digital Braille display
https://www.youtube.com/watch?v=tVuLGrab9JA
https://en.wikipedia.org/wiki/Refreshable_braille_display

Screens Reader example - https://www.youtube.com/watch?v=dEbl5jvLKGQ

- Deaf and sighted,low hearing, hard to hear disability users: 
Captions and Transcripts for video and audio information

- Vision decline due to aging (Parents) - People zoom to read the text.

- Screen magnification to navigate the web.
https://www.youtube.com/watch?v=4ZRVDgeMpXc

International Standard for web accessibility

The guideline and success criteria are organized around the following
four principles:

4 Principles:

- Perceivable
- Operable
- Understandable
- Robust

- Perceivable
Perceivable Synonyms -> open, clear, visible, recognizable
https://www.wordhippo.com/what-is/another-word-for/perceivable.html

We will provide information and components of our site in such a way so that
all users can understand.

This principle broken into four guidelines:

1. Text Alternatives:
We should provide alternatives text to graphical and non-text objects on the
screen like images, charts, diagrams, buttons and actionable objects,form controls.
ALternative text conveys the purpose of the image. Try to provide less words
and should be meaningful.

<img src="dinosaur.png" /> Screen reader speak file name

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />

Screen reader speak alt text.

<img
  src="dinosaur.png"
  alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth."
  title="The Mozilla red dinosaur" />

Title show on mouse over of the image.
screen reader speak title and alt text.

<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">
  The Mozilla red Tyrannosaurus Rex: A two legged dinosaur standing upright like
  a human, with small arms, and a large head with lots of sharp teeth.
</p>

Screen reader speak for paragraph text because we used aria-labelledby
it is useful if we want to use same text for multiple images.

<figure>
  <img
    src="dinosaur.png"
    alt="The Mozilla Tyrannosaurus"
    aria-describedby="dinodescr" />
  <figcaption id="dinodescr">
    A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a
    human, with small arms, and a large head with lots of sharp teeth.
  </figcaption>
</figure>

Figure element - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure

It helps to set image description.

2. Time-Based Media
Audio - Podcast, Video plus audio - any video, Video only.

Provide captions, transcripts for the recorded or live video content.
It helps for people that have hearing loss or problem understanding speech.
Check youtube video and we can start captions by click on 
cc (Subtilte and close captions) button.

Captions, Transcripts, Audio descriptions, Sign Language
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia#audio_transcripts
Transcript and captions
https://www.udemy.com/course/microfrontend-course/learn/lecture/23206832#overview

3. Adaptable
Website content should be properly aligned and structured which can be
seen properly on any device like mobile, web, tablet.
Heading and lists are correctly coded.
A lot of people benefit from proper heading strcuture,

Check with web developer toolbar extension.

4. Distinguishable content
It means user can easily identify the content including separating
foreground with background.
- Make color and icon properly to distinguish the content like form
user should easily see error, success message.
- Users can resize the text easily. Resize should not lost the information.
- User can control the audio, video like pause, stop, adjust the volume.
- Foreground and background color combination should be accurate.



Source:
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable
 */

export {};

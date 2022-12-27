/*
Web accessibility

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

- Captions makes video accessible.

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

- eslint-plugin-jsx-a11y eslint plugin to add accessibility check directly
in your JSX.

- @axe-core/react It catch any issues on the final rendered DOM and show error
in the chrome devtools console.

International Standard for web accessibility

The guideline and success criteria are organized around the following
four principles:

4 Principles: (POUR)

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
seen properly on any 
device like mobile, web, tablet.
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

- Operable
operable synonym - usable, functional, useful, practicable,
availabe
User interface components and navigation must be operable/functional.
User must be able to operate (navigate) the interface.

Principle 1 (Perceivable) -User will be able to perceive the content on
the web. Principle 2 (Operable) Once visitors can percieve the content,
they must be able to act on it. The content must be operable.

- Keyboard Accessible (Make all functionality available from a keyboard instead
  of a mouse)
- Enough Time (Give time to users to perform actions)
- Seizures (Avoid flashes or flickers information as it may trigger seizures)
- Navigable (Users can easily navigate, find contents).

- Keyboard Accessible
We should make our website UI in such a way it can be accessible by
keyboard. Make all functionality available from a keyboard.Users don't need
to use mouse.
A common way to move from one component to another component by pressing
tab key. A component like button should have visible focus around the selected
button or link in the list.
We can access web fast by keyboard if you know the shortcuts.

<Example - Show on the website (https://www.w3.org/WAI/)>

Why we make web pages accessible without a mouse?
- Some users don't want to use mouse.
- Some users have difficulties using a mouse.
- Blind users can see screen and not able to see mouse pointer.
- Low vision may have trouble to see the mouse pointer on the screen.
- Some users not able to hold the mouse for the long time.
- Some users forgot for left, right, double clicks.

No Keyboard trap:
A keyboard trap is an area of a web page where a person
gets stuck and can not come out without a mouse.
Textarea and media are the main culprints for this.
We should provide proper information to escape from a keyboard trap.

- Enough Time
We should provide enough time to read and use content on the web.
Some users have problems to understand information fast or take more time
to use the content. Some users have learning disability to read text.
Users who use assistive technologies need more time to consume information
on a web page. Screeen reader users need to explore a page before they 
understand how the page is organized.
Seniors citizen or low vision users need to zoom a lot to process information.
Banking websites or other secure website automatically logout after some
period of time. They should provide proper time period, what time you have or
have no possiblity to extend that time. Users will not confuse if you provide
proper information on the web.
Some website need to update the content frequently like news, weather reports,
stock market.
We can provide someways to users to refresh website content like provide
dropdown 15,30,60 minutes or manually refresh the page.
Users can set it as per their requirement.

- Flashing and Seizures
Some users have problem with flashing or flicking lights
Try to avoid some content on the web.
- Flashes more than three times in one second.
- Covers a large area of the screen.
- Is very bright.

There are three reason for flickering lights on computer screen:
- Flashes can be caused by display
- Flashes can be caused by computer setting how it renders images or other
content on the screen.
- Flashes can be caused by content like SVG images or animation.

As a developer or content author, we don't have control for first two but we
can control for content animation.
Try to avoid or disable animation from interactions if it is not essential.
Examples:
https://www.google.com/search?q=svg+animation+gif&tbm=isch&hl=en-US&sa=X&ved=2ahUKEwjQ88SQhpn8AhWojNgFHVz1C0cQrNwCKAB6BQgBEPkB&biw=1522&bih=758#imgrc=MaNxzOc2fRLbSM
https://www.google.com/search?q=svg+animation+gif&tbm=isch&hl=en-US&sa=X&ved=2ahUKEwjQ88SQhpn8AhWojNgFHVz1C0cQrNwCKAB6BQgBEPkB&biw=1522&bih=758#imgrc=1hNx_ufnRJIFmM

Who does this help?
- Users have certain seizure or migraine disorders.
- users who have difficulty tracking moving objects.
- Users who have attention deficit disorders.

- Navigable
We should structure our content in such a way so that users can easily navigate,
find content, and determine where they are.
Screen reader users navigate from heading to heading to check the information.
Some users only navigate by keyboard also.
We should divide large information or large block of content like text 
passages into smaller one and adding heading to each.
Divide long form into small one.
It help to navigate content and understand it easily.
We should also update the page title as per page content like homepage,
shopping car or checkout page, Product page.
Example: Explain by ecommerge website like amazon
Skip to content:
Many web pages have repeated content like navigation links in the header.
We show same links on every page. Suppose if page has 10 navigation on every
page then users need to press 10 tabs to navigate it and go on the main
content.
we can skip this by using "skip to content" link as the first link on every
page.
Example: https://github.com/
<Navigate the page and use "skip to content" link>


Source:
https://courses.idrc.ocadu.ca/understandinga11y/1_perceivable.html
https://learning.edx.org/course/course-v1:W3Cx+WAI0.1x+3T2019/block-v1:W3Cx+WAI0.1x+3T2019+type@sequential+block@6e4c1abff9594e6a8f5138b1ade5c4cf/block-v1:W3Cx+WAI0.1x+3T2019+type@vertical+block@3b020caf4f38401fbe71f056a6fefc84

Source:
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable
 */

export {};

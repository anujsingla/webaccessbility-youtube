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

WCAG categorized guidelines into three levels that represents the importance
of each guidelines:
- Level A: Must be done or some group will not be able to access the content.
- Level AA: Should be done, or some group will have difficulty accessing the
content.
- Level AAA: Can be done to improve usability or enhance accessibility further.

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

In Principle 1, we learn users can see the content.
In principle 2, we will learn, users can interact with content.
They must be able to act on it.

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

- Understandable

In Principle 1, we learn users can see the content.
In principle 2, we learn users can interact with content.
In principle 3, We will learn, users can undserstand and read the content.

We should use simple proper language. Try to avoid abbreviations, unusual
words and phrases. If we want to use it, please explain in details so that
anybody with disability or without disability can easily understand it.
The site is not fully accessible if they cannot make sense of it.


Abbreviations (https://englishgrammarhere.com/abbreviations/10-abbreviations-and-meaning-in-english/):
LOL: Laugh out loud
OMG: Oh my God

Unusual words (https://www.thelanguagegallery.com/blog/10-unusual-words-to-add-to-your-english-vocabulary)
Not easy to understand, we need to check on google or with any expert for meaning.

Phrases (https://www.ef.edu/english-resources/english-idioms/)
Better late than never - Better to arrive late than not to come at all.
Call it a day - Stop working on something.

Readable content
Predictable content
Input Assistance

- Readable content
Content should be readable and understandable for all the 
users (with disability or without disability).

- Identify the primary language on the page. <html lang="en">
- Explain abbreviations, unusual words, and phrases
- Use simple language which is easy to understand.
- Avoid Jargon words (Jargon words are special or technical words that are
  understable by a goup of people in a particular profession.)
  SPAM, BUGS, Algorithm, many more.


- Predictable content
We should use consistent pattern in our website like links or position of the link,
button color, shape of headers or many more.
It helps users to understand or readable our content on the web.They can
easily predict the content and easy to understand it.
If you use different header tag for different header then it is not easily to
understand by disabled users because they are not able to understand either
it is h1 or h2 tag or reason behind it.
Pressing the tab, which is normally use to jump from one control to another,
should not initiate the search.

- Input Assistance
It means Users to understand the process of entering information. When user
fill the form details, we should provide proper information, which field
is required and what need to fill in the input area. If user gets error on the
screen, how to recover from it.
People with disability maybe get few errors if we don;t provide proper
instruction in the form.
This guideline seeks to reduce the number of errors that users make and help
users understand what they must do to correct errors.

Who will get help from this:
- People with disabilities
- People with screen reader
- People with braille
- People who are colorblind

https://www.w3.org/WAI/tutorials/forms/
https://www.w3.org/WAI/fundamentals/accessibility-principles/#tolerant


- Robust
Robust means web content is compatible with different browsers,
assistive technologies and other user agents.

In Principle 1, we learn users can see the content.
In principle 2, we learn users can interact with content.
In principle 3, We learn users can undserstand and read the content.
In principle 4, We will learn, users must be able to access the content
on different machine, browser or devices.

We should develop our web in such a way, it will not break in the new version
or assistive technologies.
Web technologies change quickly and our web application should work with
present and future technologies.

WAI-ARIA
Web Accessibility Initiative — Accessible Rich Internet Applications (WAI-ARIA)
It helps to improve the accessiblity of web to people with disabilities. 
WCAG (web accessibility guideline) focus on static web content and ARIA 
focus on making interaction or dynamic content more accessible. 
Interaction like submitting the form, purchasing from ecommerence, 
select value from dropdown, modals, many more.

Note:
You should only use WAI-ARIA when you need to. Always try to use
semantic elements. Try to not use it if not required. It does not modify
the DOM or add new functionality to elements. It won't change elements
behaviour in any way. It just manipulates elements represenation in the
accessibility tree. It modify an element role, name, state, properties for
assistive technologies.


Features of ARIA:
Roles, Properties, States, Name

Roles:
It defines what kind of UI element is this? It is a button, checkbox, text
or else.
ARIA roles used to describe elements that don't exist in html or not
full support in browser or user don't want to use semantic elements.
HTML introduce semantic elements to define page features <nav>, <footer>
<header> <aside> or many more. Before that users use CSS classes or IDs
to achieve this but it is problematic for screen readers or assistive technology.
<div class="nav"></div>
The role attribute provide semantics. many semantic elements have role like
<input type="radio">, it has radio as a role.
<ul role="tabpanel"></ul>
<div role="form"></div> 
<form></form> (semantic form) - Always use this one

https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles
https://www.w3.org/TR/wai-aria-1.1/#role_definitions

Properties:
It is used to give extra meaning to the elements.
aria-required="true" - It indicates user input is required on the elements before
submit the form.

aria-labelledby - All interactive elements must have an accessible name.
It is used to reference another element to define its accessible name.
<button> <a> has their accessible name between opening closing tag.
But <input> <textarea> get accessible name via label elements.

<div id="tbLabel">Email Address *</div>
<div
  role="textbox"
  contenteditable
  aria-labelledby="tblabel"
  aria-required="true"
  id="email1">
</div>

<label for="email1">Email Address (required)</label>
<input type="email" id="email1" required />

States:
It is used to define the current conditions of elements like enable, disable,
hide, selected
aria-disabled="true" -> It define form input is disabled to the screen reader.
We change state programmatically via javascript.

aria-hidden - It helps to hide the elements to exposed to screen readers or
accessiblitity API or tree. It remove elements and children from the accessible
tree.
It is used for collapsed content, hide modal, sidebar, images, icons.
Don't use on focusable elements.

Resources:
ARIA Github link: https://github.com/w3c/aria/
https://www.w3.org/WAI/standards-guidelines/aria/

Name:
A label or identifier for element. It is used by screenreader to announce
an element.

Difference between aria-label, aria-labelledby, aria-describedby
aria-label - It is used to override element name and replacing it with
name given by you.
<button aria-label="Close">
	×
</button>

aria-labelledby - It is used to override the element name and replace it with
the content of another element. aria-labelledby is set to the id of another
element.
<div id="tbLabel">Email Address *</div>
<div
  role="textbox"
  contenteditable
  aria-labelledby="tblabel"
  aria-required="true"
  id="email1">
</div>

aria-describedby - It is used to set element description of the another 
element. It takes an id of another element same as aria-labelledby.
It provide extra information of the element.
<form>
	<label for="name">name</label>
	<input id="name" type="text" aria-describedby="nameValue" />
	<p id="nameValue">
		Name may contain alphanumeric characters.
	</p>
</form>

ARIA Live Regions:
Suppose something is dynamically updates on the screen like alert message,
time changes as per timer or many more. How screen reader know and let
user know that content has changed.
aria-live attribure let's screen reader know that content will change
dynamically, they should take care and announce those changes as per priority.
assertive - It is high priority and screen reader interrupt user actions
to announce changes.
polite - it is low priority and screen reader wait untitl the user is done
to announuce updates.
aria-atomic="true" - It is used to read all the content inside the aria-live
region by the screen reader.
It can be applied to any html elements.
Try to not use if content is not important.
https://www.w3.org/TR/wai-aria-1.1/#aria-live

Accessibility tree
It is a part of DOM. It provides information from the DOM in a format
that can be understood by assistive technologies like screen reader,
speech input software.
It needs semantic information of the element like button. It needs 4 properties
of the element like
Name, description, state, role.
Suppose if you have button on the screen and you can easily see the button
but if you are blind and use screen reader then you can not see it. You will
use assistive technologies to check it on the web. Screen reader need to
tell that it is button, state of the button. Accessibility tree provides
all the information to the assistive technologies.
Always try to use native html elements because html support all the type of
assistive technology.

How to view accessibility tree?
https://developer.chrome.com/blog/full-accessibility-tree/
https://web.dev/the-accessibility-tree/

Source:
https://courses.idrc.ocadu.ca/understandinga11y/1_perceivable.html
https://learning.edx.org/course/course-v1:W3Cx+WAI0.1x+3T2019/block-v1:W3Cx+WAI0.1x+3T2019+type@sequential+block@6e4c1abff9594e6a8f5138b1ade5c4cf/block-v1:W3Cx+WAI0.1x+3T2019+type@vertical+block@3b020caf4f38401fbe71f056a6fefc84
https://benmyers.dev/blog/aria-labels-and-descriptions/

Source:
https://developer.mozilla.org/en-US/docs/Learn/Accessibility/HTML#text_alternatives
https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable
https://developer.mozilla.org/en-US/docs/Web/Accessibility
 */

export {};

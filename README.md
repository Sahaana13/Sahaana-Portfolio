# Stellar Portfolio

Create a premium, highly interactive, dark-themed personal portfolio website for a Computer Science Engineering student and aspiring software developer.

The website should feel like a modern futuristic developer portfolio rather than a traditional static resume website.

IMPORTANT:

The website must be built STRICTLY using:

- React.js

- Framer Motion for UI/page animations

- Three.js / React Three Fiber for 3D elements and animations

- Particles.js / React-compatible particle library for interactive background particles

- HTML5

- CSS3

- JavaScript

Do NOT use:

- Next.js

- Vue

- Angular

- Bootstrap

- jQuery

- WordPress

- Static HTML-only implementation

- Any unnecessary UI framework

Use reusable React components and maintain a clean, scalable project structure.

==================================================

OVERALL DESIGN DIRECTION

==================================================

Create a futuristic, premium, dark-themed portfolio.

Visual style:

- Dark black/deep navy background

- Subtle gradient blurs

- Glassmorphism cards

- Soft glowing borders

- Neon-style accent gradients

- Large typography

- Smooth micro-interactions

- 3D elements

- Interactive particles

- Depth and layered backgrounds

- Subtle grid/noise effects

- Smooth scrolling

- Cinematic page transitions

The website should feel:

- Modern

- Professional

- Futuristic

- Minimal but visually rich

- Developer-focused

- Premium

- Highly animated without becoming distracting

Avoid making it look like a generic template.

==================================================

SITE STRUCTURE

==================================================

Create these main sections/pages:

1. Home / Hero

2. About

3. Skills

4. Projects

5. Articles / Featured Articles

6. Coding Profiles

7. Resume

8. Contact

9. Social Links / Footer

Navigation should allow seamless movement between all sections.

The navigation bar should remain accessible while scrolling.

==================================================

NAVIGATION

==================================================

Create a futuristic navigation bar.

Navigation items:

- Home

- About

- Skills

- Projects

- Articles

- Coding

- Resume

- Contact

Features:

- Transparent/glass background

- Sticky navigation

- Active section indicator

- Animated underline/glow

- Smooth hover animations

- Mobile hamburger menu

- Animated mobile menu

- Navigation links should smoothly scroll to sections

When navigating between major sections, use Framer Motion transitions.

The transitions should feel cinematic and seamless.

==================================================

HOME / HERO SECTION

==================================================

The Hero section should immediately communicate who I am.

Layout:

LEFT SIDE:

- Small greeting

- Large name

- Professional title

- Short introduction

- CTA buttons

Example structure:

"Hello, I'm"

"[YOUR NAME]"

"Computer Science Engineering Student

| Software Developer | Frontend Developer"

Short description explaining:

- Computer Science background

- Interest in software development

- Frontend development

- Programming

- Problem solving

- Building practical projects

CTA buttons:

1. View Projects

2. Download Resume

3. Contact Me

Add a subtle availability/status indicator such as:

"Open to opportunities"

RIGHT SIDE:

Create an interactive 3D developer-themed scene using Three.js / React Three Fiber.

Possible 3D elements:

- Floating laptop

- Rotating code cube

- Floating programming symbols

- React logo

- JavaScript symbol

- Python symbol

- Database icon

- HTML/CSS elements

- Floating geometric objects

The 3D elements should:

- Slowly rotate

- Float naturally

- React slightly to mouse movement

- Have subtle glow

- Have depth

- Respond to cursor movement

Do not make the 3D scene overwhelming.

==================================================

PARTICLE BACKGROUND

==================================================

Implement an interactive particle background.

Particles should:

- Move slowly

- React to mouse movement

- Connect subtly when close

- Have different opacity

- Create depth

- Avoid reducing readability

Particles should be more visible in the Hero section and subtly continue throughout the website.

Optimize particles for mobile devices.

Reduce particle count automatically on smaller screens.

==================================================

GRADIENT BACKGROUNDS

==================================================

Use multiple animated gradient blobs.

Examples:

- Purple

- Blue

- Cyan

- Magenta

Use blurred radial gradients.

The gradients should slowly move using CSS/Framer Motion.

Do NOT make the background too bright.

The gradients should create a premium dark atmosphere.

==================================================

ABOUT SECTION

==================================================

Create an elegant About section.

Include:

- Short professional introduction

- Education

- Career interests

- Development interests

- Personal strengths

- Current learning focus

Use animated cards/timeline.

Possible layout:

LEFT:

About me text

RIGHT:

Interactive information cards

Cards:

- Education

- Programming

- Development

- Problem Solving

Add animated statistics such as:

"X+ Projects"

"X+ Technologies"

"X+ Coding Problems"

"CGPA: X.XX"

These should be easy to edit from a central data file.

==================================================

SKILLS SECTION

==================================================

Create a visually impressive skills section.

Group skills into categories.

Categories:

Programming:

- Java

- Python

- JavaScript

Frontend:

- HTML

- CSS

- JavaScript

- React

Database:

- SQL

- MySQL

Data / Analytics:

- Python

- Excel

- Data Analytics tools

Tools:

- Git

- GitHub

- VS Code

Each skill should have:

- Icon

- Skill name

- Small description

- Optional proficiency indicator

DO NOT use fake percentage-based skill levels unless explicitly provided.

Instead, use categories such as:

- Familiar

- Intermediate

- Comfortable

- Currently Learning

Skill cards should have:

- 3D hover effect

- Tilt effect

- Glow

- Icon animation

- Border animation

==================================================

PROJECTS SECTION

==================================================

Create a premium project showcase.

Each project should be represented by a large interactive card.

Each project card should contain:

- Project image / preview

- Project title

- Short description

- Technologies used

- GitHub button

- Live Demo button

- View Details button

Project cards should have advanced hover animations.

When hovering:

- Card slightly rotates in 3D

- Image zooms subtly

- Gradient border appears

- Shadow/glow increases

- Technology badges animate

- Arrow/icon moves

- Background elements shift based on cursor position

Use Framer Motion for these animations.

Use Three.js only where it genuinely improves the experience.

Create project data as an array so new projects can easily be added.

Example project structure:

{

  title: "...",

  description: "...",

  technologies: ["React", "JavaScript", "CSS"],

  image: "...",

  github: "...",

  demo: "...",

  category: "Web Development"

}

Add project filtering:

- All

- Web Development

- Java

- Data Analytics

- Other

The filter transition should be animated.

==================================================

FEATURED ARTICLES SECTION

==================================================

Create a Featured Articles section.

Each article card should contain:

- Article title

- Short description

- Publication date

- Reading time

- Category

- Article link

Cards should animate when entering the viewport.

Hover animation:

- Card lifts

- Image/gradient moves

- Arrow slides

- Border glow appears

Include an "View All Articles" CTA.

Make article data editable from a central array.

==================================================

CODING PROFILES SECTION

==================================================

Create a Coding Profiles section.

Include profile cards for:

- GitHub

- LeetCode

- HackerRank

- CodeChef

- GeeksforGeeks

Only display profiles that have URLs.

Each profile card should include:

- Platform icon

- Platform name

- Username

- Short description

- Visit Profile button

Add hover effects.

Possible animation:

When hovering over a profile card, the icon rotates or moves slightly in 3D.

==================================================

RESUME SECTION

==================================================

Create a dedicated Resume section.

Display:

"Want to know more about my experience?"

Add:

1. Download Resume

2. View Resume

The Download Resume button should download a PDF file.

Use a configurable resume path such as:

/assets/resume.pdf

The resume button should have:

- Animated icon

- Glow

- Hover movement

- Download animation

Also create a small resume preview/card.

==================================================

CONTACT SECTION

==================================================

Create a professional Contact Me section.

Heading:

"Let's Build Something Together"

Include a contact form with:

- Name

- Email

- Subject

- Message

- Send Message button

The form should have:

- Validation

- Animated labels

- Focus glow

- Error animations

- Success animation

- Loading state

The website should be able to send email.

Structure the implementation so the email service can be configured easily.

Do not expose private API keys in frontend code.

Also provide direct contact options:

- Email

- LinkedIn

- GitHub

Create a mailto fallback if no backend/email service is configured.

==================================================

SOCIAL LINKS

==================================================

Create a premium social links section/footer.

Include:

- LinkedIn

- GitHub

- LeetCode

- HackerRank

- Email

Social icons should:

- Animate on hover

- Rotate/scale subtly

- Glow

- Have tooltip labels

Use accessible links.

==================================================

FOOTER

==================================================

Footer should contain:

[YOUR NAME]

"Computer Science Engineering Student | Developer"

Quick links:

- Home

- About

- Skills

- Projects

- Contact

Social icons

Copyright:

© 2026 [YOUR NAME]. All rights reserved.

Add a small animated "Back to top" button.

==================================================

PAGE TRANSITIONS

==================================================

The website should feel like a single cinematic application.

Use Framer Motion for section/page transitions.

Each major section can have its own animation identity.

Examples:

HOME:

- Fade + scale

- 3D elements floating

ABOUT:

- Slide + blur reveal

SKILLS:

- Staggered card reveal

PROJECTS:

- 3D card entrance

ARTICLES:

- Horizontal/vertical stagger

CODING:

- Floating profile cards

CONTACT:

- Smooth fade + gradient expansion

Avoid excessive animation that makes the website slow.

Transitions must feel smooth and professional.

==================================================

SCROLL ANIMATIONS

==================================================

Every major section should animate into view.

Use Framer Motion viewport detection.

Examples:

- Text fades upward

- Cards stagger

- Images scale from 0.95 to 1

- Gradient blobs move

- Icons rotate slightly

Animations should trigger only when appropriate.

Do not repeatedly replay aggressive animations while scrolling.

==================================================

3D EFFECTS

==================================================

Use Three.js / React Three Fiber for selected 3D experiences.

Hero:

- Interactive 3D developer scene

Projects:

- Optional 3D project previews

Skills:

- Floating technology icons where appropriate

Background:

- Subtle floating geometric objects

Make sure 3D elements don't destroy performance.

Use:

- Lazy loading

- Suspense

- Optimized geometries

- Reduced object count

- Mobile fallback

On low-powered/mobile devices, gracefully reduce 3D complexity.

==================================================

RESPONSIVE DESIGN

==================================================

The website MUST be fully responsive.

Desktop:

- Large cinematic layout

- 3D hero

- Multi-column sections

Tablet:

- Reduced 3D

- Adjusted spacing

- 2-column layouts where appropriate

Mobile:

- Single-column layout

- Mobile navigation

- Reduced particle count

- Reduced 3D complexity

- Touch-friendly buttons

- No hover-dependent functionality

- Proper text sizing

- No horizontal overflow

The website must work properly on:

- Desktop

- Laptop

- Tablet

- Android

- iPhone

Do not simply shrink the desktop design.

Create mobile-specific layout adjustments.

==================================================

ACCESSIBILITY

==================================================

Implement:

- Semantic HTML

- Keyboard navigation

- Accessible buttons

- Accessible links

- Proper aria-labels

- Good contrast

- Visible focus states

- Reduced motion support

If the user has enabled prefers-reduced-motion:

Reduce or disable:

- Heavy animations

- Particle movement

- 3D motion

- Page transitions

Keep the website usable.

==================================================

PERFORMANCE

==================================================

Because this website contains heavy animations, performance is extremely important.

Implement:

- Lazy loading

- Code splitting where useful

- Optimized images

- Responsive images

- Lazy loading for 3D sections

- Reduced particles on mobile

- Reduced 3D objects on mobile

- Avoid unnecessary React re-renders

- Use memoization where appropriate

- Avoid expensive scroll listeners

- Use requestAnimationFrame only where necessary

The site should feel smooth and maintain a high frame rate.

==================================================

CODE ARCHITECTURE

==================================================

Use a clean React structure.

Example:

src/

  components/

    Navbar.jsx

    Hero.jsx

    About.jsx

    Skills.jsx

    Projects.jsx

    Articles.jsx

    CodingProfiles.jsx

    Resume.jsx

    Contact.jsx

    Footer.jsx

    ParticleBackground.jsx

    GradientBackground.jsx

    PageTransition.jsx

    LoadingScreen.jsx

    SocialLinks.jsx

    ProjectCard.jsx

    SkillCard.jsx

  data/

    projects.js

    skills.js

    articles.js

    codingProfiles.js

    socialLinks.js

  assets/

    images/

    icons/

    resume.pdf

  styles/

    global.css

  App.jsx

  main.jsx

Keep personal information, links, projects, skills, articles and social profiles inside data files rather than hardcoding them throughout components.

==================================================

LOADING EXPERIENCE

==================================================

Create a short premium loading screen.

Example:

[YOUR NAME / INITIALS]

Loading portfolio...

Use:

- Animated text

- Gradient glow

- Small progress animation

Do not make the loading screen unnecessarily long.

==================================================

MICRO INTERACTIONS

==================================================

Add subtle micro-interactions throughout the site:

- Cursor-following gradient

- Button magnetic movement

- Hover glow

- Icon rotation

- Text reveal

- Animated arrows

- Card tilt

- Border animations

- Smooth focus effects

- Scroll progress indicator

Do not overuse every effect simultaneously.

==================================================

CUSTOM CURSOR

==================================================

On desktop, optionally create a custom cursor.

The cursor can have:

- Small central dot

- Outer glowing circle

- Smooth interpolation

- Different state when hovering buttons/cards

Disable custom cursor on touch devices.

==================================================

SEO

==================================================

Add:

- Proper page title

- Meta description

- Open Graph metadata

- Semantic headings

- Alt text for images

- Descriptive link text

Example title:

"[YOUR NAME] | Computer Science Student & Developer"

==================================================

CONTENT PLACEHOLDERS

==================================================

Use clearly identifiable placeholders for personal information:

[YOUR NAME]

[YOUR EMAIL]

[YOUR PHONE]

[LINKEDIN URL]

[GITHUB URL]

[LEETCODE URL]

[HACKERRANK URL]

[RESUME FILE]

[PROJECT DATA]

[ARTICLE DATA]

Do NOT invent achievements, companies, certifications, statistics or experience.

Make all personal information easy to replace.

==================================================

IMPORTANT DESIGN RULES

==================================================

1. Do NOT make the website look like a generic Bootstrap portfolio.

2. Do NOT use excessive bright colors.

3. Keep the primary visual identity dark and futuristic.

4. Use gradients and glows carefully.

5. Animations should feel intentional.

6. Maintain readability above visual effects.

7. 3D should enhance the website rather than dominate it.

8. Keep navigation intuitive.

9. Make every interaction feel smooth.

10. Ensure the site remains fast despite heavy animation.

11. Mobile responsiveness is mandatory.

12. All external links should open safely.

13. Do not expose API keys.

14. Keep components reusable.

15. Keep content/data separate from UI components.

==================================================

FINAL EXPERIENCE

==================================================

The final result should feel like an award-winning modern developer portfolio.

The first impression should be:

"Modern developer + futuristic technology + strong attention to detail."

The website should combine:

React

+

Framer Motion

+

Three.js / React Three Fiber

+

Interactive Particles

+

Glassmorphism

+

Gradient Blur

+

3D interactions

+

Smooth transitions

+

Responsive design

The result should be visually impressive while still being professional enough for recruiters and technical interviewers.

Before finishing:

- Verify every navigation link works

- Verify mobile menu works

- Verify resume download works

- Verify contact form works

- Verify social links work

- Verify project links work

- Verify particles work

- Verify 3D scene loads

- Verify animations don't cause horizontal overflow

- Verify mobile responsiveness

- Verify prefers-reduced-motion behavior

- Verify there are no console errors

- Verify there are no broken assets

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://cosmic-canvas-364.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3ebde072-c2e2-57fb-85ec-39ce00ebb002).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

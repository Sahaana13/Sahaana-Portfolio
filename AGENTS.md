# Architecture decisions

- Keep the portfolio as one client-rendered index route because the requested experience uses smooth in-page navigation and browser-only 3D rendering.
- Store all editable personal, project, article, skill, coding-profile, and social content in a central data module so placeholders are easy to replace.
- Use a procedural React Three Fiber hero scene and DOM-based controls/content to balance visual depth, accessibility, and performance.

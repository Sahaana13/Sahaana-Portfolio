# Match the Mobile Hero Composition to Desktop

## Changes
- Remove the separate mobile-only skill rows.
- Render the same 3D laptop, Salesforce cloud, decorative object, and floating skill labels at every screen size.
- Scale the complete scene proportionally within its existing mobile container, preserving the desktop label positions and hierarchy.
- Keep desktop and laptop styling unchanged.

## Verification
- Check the Hero at 320px, 375px, and 430px widths.
- Confirm every skill remains readable, the composition stays inside its box, and the page has no horizontal scrolling.
- Confirm the desktop composition remains unchanged and review build/runtime diagnostics.

## Technical details
- Reuse the existing React Three Fiber `Tag` placement rather than a separate DOM layout.
- Adjust only mobile scene scaling and rendering behavior in the Hero scene component and remove obsolete mobile-only CSS.

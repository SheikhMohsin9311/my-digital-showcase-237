# Unify Name Font Styling in Hero

## Current State
In `src/components/Hero.tsx`, the name "Sheikh Mohsin" is split into two spans: "Sheikh" is rendered in italic while "Mohsin" is rendered in regular weight. The user wants a single, consistent font treatment for the full name.

## Proposed Change
- Remove the `italic` span wrapper so the entire name uses the same `font-display font-semibold` styling.
- Keep the existing `text-5xl md:text-7xl tracking-tight leading-tight` sizing and spacing.
- Preserve the dark academia visual direction (serif display font, warm palette).

## Files to Update
- `src/components/Hero.tsx` — adjust the `<h1>` name markup.

## Verification
- Type-check the project.
- Capture a preview screenshot of the Hero section to confirm the name appears uniform.

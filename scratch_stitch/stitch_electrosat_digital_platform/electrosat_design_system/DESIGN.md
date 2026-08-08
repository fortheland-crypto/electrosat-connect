---
name: ElectroSat Design System
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#4e5e84'
  on-secondary: '#ffffff'
  secondary-container: '#c1d1fe'
  on-secondary-container: '#49597f'
  tertiary: '#006229'
  on-tertiary: '#ffffff'
  tertiary-container: '#007e37'
  on-tertiary-container: '#c1ffc5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b6c6f2'
  on-secondary-fixed: '#071a3d'
  on-secondary-fixed-variant: '#36466b'
  tertiary-fixed: '#6bff8f'
  tertiary-fixed-dim: '#4ae176'
  on-tertiary-fixed: '#002109'
  on-tertiary-fixed-variant: '#005321'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Outfit
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Outfit
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Outfit
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  price-display:
    fontFamily: Outfit
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 24px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 24px
  margin-desktop: 40px
  margin-mobile: 16px
  section-gap: 80px
  card-padding: 24px
---

## Brand & Style

The design system for this brand focuses on a "Premium Local Tech" aesthetic. It balances the precision of high-end electronics retail with the approachability of a trusted local service provider. The visual language is rooted in **Modern Minimalism** with a technical edge, using expansive white space, structured grids, and high-quality product photography to establish authority.

The personality is professional, efficient, and reliable. It avoids excessive decorative elements in favor of functional clarity. The "Premium" aspect is conveyed through generous padding, sophisticated typography pairings, and subtle depth transitions that make the interface feel tactile and high-quality.

Key stylistic pillars:
- **Clarity first:** Information architecture is prioritized to ensure technical specs are easily scannable.
- **Trustworthy Tech:** Use of deep blues and crisp whites to evoke a sense of corporate stability and technical expertise.
- **Service-Oriented:** Prominent, high-contrast action points (CTAs) for immediate communication via WhatsApp or phone.

## Colors

The color palette is architected to differentiate between content, brand identity, and action.

- **Primary (Royal Blue):** Used for primary CTAs, links, and brand highlights. It signifies intelligence and technology.
- **Secondary (Deep Navy):** Reserved for high-impact sections (headers, footers, or hero banners) to provide grounding and a premium feel.
- **Tertiary (WhatsApp Green):** A functional color specifically for immediate communication and conversion-oriented trust signals.
- **Neutrals:** A range of Slate-based grays ensures the interface feels cool and technical rather than muddy. The `#F8FAFC` background provides a soft canvas that makes pure white cards (`#FFFFFF`) pop with subtle elevation.

## Typography

This design system utilizes a dual-font strategy. **Outfit** is used for headlines to provide a geometric, modern, and slightly "tech" feel. **Manrope** is used for body text and UI labels for its exceptional legibility and balanced proportions, ensuring technical descriptions are easy to read.

- **Headlines:** Use tight letter spacing for large displays to maintain impact.
- **Price Formatting:** Prices using the ₸ currency should always use the `price-display` role with bold weights to stand out against descriptions.
- **Language Support:** All fonts must support the Cyrillic character set.
- **Hierarchy:** Use secondary text color (`#64748B`) for body-sm and supporting labels to create a clear visual path for the user's eye.

## Layout & Spacing

The layout follows a **Fixed-Fluid hybrid grid**. On desktop, content is contained within a 1280px max-width container with a 12-column grid. On mobile, it switches to a single column with 16px side margins.

- **Section Spacing:** A generous `section-gap` of 80px (60px on mobile) is used to separate major service areas, preventing the UI from feeling cluttered.
- **Rhythm:** All spacing (padding, margins) should follow an 8px base grid (4, 8, 16, 24, 32, 48, 64).
- **Component Padding:** Cards and containers use a standard 24px padding to allow the product photography and text to breathe.

## Elevation & Depth

This design system uses a combination of **Tonal Layers** and **Soft Ambient Shadows** to create a clean, organized hierarchy.

- **Base Layer:** Background in `#F8FAFC`.
- **Surface Layer:** Cards and containers in `#FFFFFF`.
- **Shadows:** Use a single, very soft shadow for cards: `0px 4px 20px rgba(15, 23, 42, 0.05)`. This creates a subtle lift without feeling heavy.
- **Interactive State:** On hover, card elevation should increase slightly with a more pronounced shadow: `0px 10px 30px rgba(15, 23, 42, 0.08)` to indicate interactivity.
- **Dividers:** Use 1px solid `#E2E8F0` for internal card divisions or subtle section breaks.

## Shapes

The shape language is modern and "friendly-tech," utilizing large corner radii to soften the industrial nature of electronics.

- **Primary Cards:** Use `rounded-2xl` (1rem / 16px) or `rounded-3xl` (1.5rem / 24px) for main content containers and product cards.
- **Buttons:** Use `rounded-xl` (0.75rem / 12px) for a professional look, or full pill-shape for high-conversion CTAs (like WhatsApp).
- **Inputs:** Use `rounded-lg` (0.5rem / 8px) to maintain a structured, functional feel for data entry.

## Components

### Buttons
- **Primary:** Royal Blue background, white text. Pill-shaped.
- **Secondary/Outline:** Border 1px `#E2E8F0`, Text `#0F172A`. High-contrast.
- **Communication (WhatsApp):** Green `#22C55E` background, white text, includes icon.

### Cards
- **Product Cards:** Pure white background, 1px border `#E2E8F0`. Images should be centered with ample padding. Price is placed at the bottom left, primary action (e.g., "Add") at the bottom right.
- **Service Cards:** Feature a large icon or photography at the top, followed by a bold headline and short description.

### Input Fields
- Transparent or light gray background with a 1px border. Focus state uses a 2px Royal Blue ring. Placeholder text in `#64748B`.

### Chips / Badges
- Used for categories (e.g., "In Stock", "New"). Small, semi-transparent background of the brand blue with high-contrast text.

### Icons
- Use modern, 2px stroke line icons (e.g., Lucide or Phosphor). Icons should be consistent in weight and style across the entire platform.
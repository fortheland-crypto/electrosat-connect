---
name: Precision Tech Horizon
colors:
  surface: '#faf8ff'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b24'
  on-surface-variant: '#424655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fc'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053d9'
  primary: '#0045b7'
  on-primary: '#ffffff'
  primary-container: '#095be8'
  on-primary-container: '#dfe4ff'
  inverse-primary: '#b3c5ff'
  secondary: '#4d5e88'
  on-secondary: '#ffffff'
  secondary-container: '#bdceff'
  on-secondary-container: '#465781'
  tertiary: '#8e2d00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b73c00'
  on-tertiary-container: '#ffded3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b3c5ff'
  on-primary-fixed: '#00174a'
  on-primary-fixed-variant: '#003ea7'
  secondary-fixed: '#d9e2ff'
  secondary-fixed-dim: '#b4c6f6'
  on-secondary-fixed: '#051a41'
  on-secondary-fixed-variant: '#35466f'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#822800'
  background: '#faf8ff'
  on-background: '#191b24'
  surface-variant: '#e1e2ed'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Sora
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
  label-md:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
  margin-desktop: 64px
  margin-mobile: 20px
  section-gap: 80px
  card-padding: 24px
---

## Brand & Style

The design system is engineered for a modern technology service provider, balancing high-performance technical authority with approachable consumer service. The brand personality is **reliable, precise, and sophisticated**, evoking a sense of "expert installation meets cutting-edge technology."

The aesthetic follows a **Corporate / Modern** style with subtle **Glassmorphism** influences for functional depth. It prioritizes clarity through expansive whitespace, high-fidelity product photography, and a structured information hierarchy. The interface should feel "airy" yet grounded, utilizing premium finishes like soft shadows and high-contrast typography to guide the user through complex service offerings and technical catalogs.

## Colors

The palette is anchored by a vibrant **Electric Blue** used for primary actions, signifying technology and trust. A deep **Midnight Navy** is reserved for high-impact banners and headers, providing the necessary visual weight to anchor large layouts.

- **Primary Blue:** Used for CTA buttons, active states, and key navigational highlights.
- **Dark Blue:** Employed for immersive section backgrounds and hero banners.
- **WhatsApp Green:** Reserved exclusively for communication triggers and live support status.
- **Neutrals:** A light slate background (#F8FAFC) separates content blocks, while pure white cards (#FFFFFF) create a crisp layer for product information. 
- **Typography:** Deep slate (#0F172A) provides maximum legibility for body and titles, while a muted steel (#64748B) is used for metadata and labels.

## Typography

This design system utilizes **Sora** for headlines to project a bold, geometric, and professional image. Its slightly wider character set conveys stability. **Manrope** is used for body copy and labels, chosen for its exceptional legibility and modern grotesque qualities that complement Sora’s geometry.

**Usage Rules:**
- **Headlines:** Use Sora Bold for H1-H2 to establish strong visual hierarchy. Tighten letter spacing slightly on larger displays.
- **Body Text:** Use Manrope Regular for readability. 
- **Interactive Elements:** Use Manrope Semibold for buttons and navigation items to ensure they stand out as clickable elements.
- **Accessibility:** Never drop below 12px for any functional text.

## Layout & Spacing

The system employs a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The layout philosophy emphasizes "contained breathing room," where related content is grouped in highly defined cards.

- **Grid:** Use 24px gutters to maintain clear separation between technical product listings.
- **Margins:** Large 64px horizontal margins on desktop create a premium, gallery-like feel for equipment showcases.
- **Sectioning:** Distinct background color shifts (White to Light Slate) are used to delineate sections instead of heavy horizontal rules.
- **Mobile Reflow:** For product grids, use a 2-column layout on mobile to keep product photography large and legible.

## Elevation & Depth

Visual hierarchy is established using a combination of **Tonal Layers** and **Ambient Shadows**. The design system avoids harsh borders in favor of depth.

- **Base Layer:** Background (#F8FAFC) sits at the lowest elevation.
- **Surface Layer:** Cards and containers (#FFFFFF) use a very soft, diffused shadow: `0px 4px 20px rgba(15, 23, 42, 0.05)`. This creates a subtle "lift" without looking heavy.
- **Interactive States:** On hover, cards should increase their shadow spread and lift slightly (y-offset -2px) to provide tactile feedback.
- **Navigation:** The top header uses a backdrop blur (Glassmorphism) when scrolling to maintain context without obscuring content.

## Shapes

The shape language is defined by **generous, friendly curves** that soften the technical nature of the products.

- **Sections:** Large container blocks (like hero banners or map sections) use a **24px** radius.
- **Cards:** Product and service cards use a **16px** radius for a balanced, modern look.
- **Buttons & Nav:** All primary buttons and category navigation items use a **Pill-shape** (fully rounded) to contrast with the rectangular card structures.
- **Inputs:** Form fields should match the card radius (16px) to maintain consistency in the service flow.

## Components

### Buttons
- **Primary:** Pill-shaped, Primary Blue background, White text. Large padding (16px 32px).
- **Secondary/Ghost:** Pill-shaped, Transparent background, 1.5px Primary Blue border.
- **Icon Buttons:** Use a subtle background tint or 1px border; ensure icons are consistent (24px size).

### Cards
- **Product Cards:** White background, 16px corner radius, soft ambient shadow. Images should have a consistent "studio lighting" treatment with soft shadows.
- **Service Cards:** Feature a top-aligned icon in a tinted circle, followed by Headline-md and Body-md text.

### Navigation
- **Top Nav:** Pill-shaped active states. Use `label-md` for links with 32px horizontal spacing.
- **Category Tabs:** Compact pill buttons with a light grey background, switching to Primary Blue when active.

### Input Fields
- **Search/Forms:** 16px radius, #E2E8F0 border. On focus, the border transitions to Primary Blue with a 2px outer glow.

### Specialized Components
- **WhatsApp Trigger:** A floating or prominent button using WhatsApp Green (#16C85B) with a white icon, specifically styled to stand out from the tech-blue brand colors.
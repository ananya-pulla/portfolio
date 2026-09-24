---
name: Tactile Spatial Sketchbook
colors:
  surface: '#fef9f1'
  surface-dim: '#ded9d2'
  surface-bright: '#fef9f1'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f8f3eb'
  surface-container: '#f2ede5'
  surface-container-high: '#ece8e0'
  surface-container-highest: '#e7e2da'
  on-surface: '#1d1c17'
  on-surface-variant: '#47464b'
  inverse-surface: '#32302b'
  inverse-on-surface: '#f5f0e8'
  outline: '#78767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5e5e65'
  primary: '#05050a'
  on-primary: '#ffffff'
  primary-container: '#1e1e24'
  on-primary-container: '#87858d'
  inverse-primary: '#c8c5cd'
  secondary: '#984632'
  on-secondary: '#ffffff'
  secondary-container: '#ff987f'
  on-secondary-container: '#772e1c'
  tertiary: '#000700'
  on-tertiary: '#ffffff'
  tertiary-container: '#0d230c'
  on-tertiary-container: '#738d6d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1ea'
  primary-fixed-dim: '#c8c5cd'
  on-primary-fixed: '#1b1b21'
  on-primary-fixed-variant: '#47464d'
  secondary-fixed: '#ffdad2'
  secondary-fixed-dim: '#ffb4a3'
  on-secondary-fixed: '#3d0700'
  on-secondary-fixed-variant: '#792f1e'
  tertiary-fixed: '#ceeac5'
  tertiary-fixed-dim: '#b3ceab'
  on-tertiary-fixed: '#0a2009'
  on-tertiary-fixed-variant: '#354d31'
  background: '#fef9f1'
  on-background: '#1d1c17'
  surface-variant: '#e7e2da'
  paper-canvas: '#FBF9F4'
  paper-layer: '#F5F0E8'
  paper-contrast: '#EAE2D5'
  ink-black: '#1E1E24'
  ink-muted: '#575653'
  terracotta-rich: '#C04328'
  terracotta-soft: '#EE8A72'
  sage-deep: '#3E6B48'
  sage-soft: '#A8C3A0'
  lilac-rich: '#7E528F'
  lilac-soft: '#D8B4E2'
  ochre-deep: '#8A6805'
  ochre-warm: '#F4D06F'
  teal-deep: '#1F5460'
  teal-dusty: '#5E9CA8'
  washi-tape: rgba(244, 208, 111, 0.45)
typography:
  display-hero:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Playfair Display
    fontSize: 38px
    fontWeight: '600'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 26px
    fontWeight: '500'
    lineHeight: 34px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  annotation-lead:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 30px
    letterSpacing: 0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
  label-spatial:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-badge:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
  space-2xl: 5rem
---

## Brand & Style

This design system embodies the intersection of tactile sketchbook intimacy and cutting-edge spatial computing. Designed for a creative technologist and human-computer interaction engineer, the identity merges physical media—handcrafted paper-cuts, washi tape joints, loose editorial margins, and organic collage arrangements—with the structural precision required for spatial UX and interactive 3D computing.

The aesthetic fuses **Tactile / Skeuomorphic** nuances with **Editorial Minimalism**. Rather than flat digital planes, surfaces feel like fibrous cardstock layered atop an architect's tracing desk. The emotional tone is introspective yet ambitious: warm, scholarly, curious, and humanistic. It directly counters the clinical glass-and-neon monotony of conventional XR portfolios, presenting technical computing through an intimate, handcrafted lens.

## Colors

The palette reproduces physical drafting paper, natural pigments, and archival ink:
- **Base Surfaces (`paper-canvas`, `paper-layer`, `paper-contrast`)**: Warm, unbleached alabaster and creamy paper stock establish a low-fatigue, grounding background.
- **Primary Line & Tone (`ink-black`, `ink-muted`)**: Saturated sumi-ink charcoal replaces cold digital blacks, providing authentic linework, scribbles, and typographic weight.
- **Accent Chromas**: Paired dynamic sets allow two-tier hierarchy:
  - *Terracotta / Warm Coral*: Critical focal points, primary interactions, interactive 3D state triggers.
  - *Sage*: Structural annotations, HCI research tags, environmental VR markers.
  - *Lilac*: Creative technology experiments, tactile card backs, interactive toggles.
  - *Ochre*: Washi-tape joints, highlights, and conceptual footnotes.
  - *Dusty Teal*: Technical architectural notes, spatial wireframes, and hardware specs.

Every chromatic accent must maintain sufficient contrast against the unbleached paper surface (`#FBF9F4`), utilizing the `-deep` counterpart for text and iconography whenever legibility demands strict compliance.

## Typography

The typographic system creates an interplay between three distinct registers:
1. **Editorial Authority (`Playfair Display`)**: Applied to portfolio project titles, case-study headers, and italicized callouts. It conveys academic rigor and bespoke artistic design.
2. **Ergonomic Clarity (`Plus Jakarta Sans`)**: Delivers effortless readability for long-form case studies, technical summaries, and interface descriptions.
3. **Engineering Rigor (`Space Mono`)**: Used for spatial coordinates, code snippets, hardware metrics, and device metadata, evoking technical blueprints and spatial mapping data.

For informal annotations, marginalia, and authorial scribbles, italicized `Playfair Display` with deliberate manual tracking or organic SVG handwriting vectors are applied as visual layers over technical diagrams.

## Layout & Spacing

The layout is built on an intentional **Asymmetric Fluid Collage**. While grounded in an underlying 12-column framework on desktop and 4-column system on mobile, elements break strict column alignment through deliberate rotations (`-1.5deg` to `+2deg`), staggered vertical offsets, and overlapping cards mimicking layered paper sheets.

- **Desktop (>1024px)**: 12 columns with `1.5rem` gutters and generous `3rem` canvas margins. Case-study spreads leverage dual-page sketchbook layouts with an off-center visual spine.
- **Tablet (768px - 1023px)**: 8 columns with dynamic scaling of paper margins, stacking secondary project annotations alongside imagery.
- **Mobile (<768px)**: 4 columns with `1rem` gutters and `1.25rem` margins. Complex collage overlaps collapse into an articulated vertical stream where paper edges peek from horizontal bounds.

## Elevation & Depth

Rather than conventional blur-heavy drop shadows or neon glows, depth mimics **physical paper layers on an illuminated workspace**:

- **Paper Stack Tier 1 (Base Collage)**: Flat, fibrous, no shadow. Borders defined by crisp paper cutouts or `1px solid rgba(30, 30, 36, 0.08)`.
- **Paper Stack Tier 2 (Cards & Swatches)**: `0 3px 6px -1px rgba(30, 30, 36, 0.07), 0 1px 3px rgba(30, 30, 36, 0.04)`. Imparts the physical presence of 300gsm watercolor paper.
- **Floating Overlays (Active Tooltips, Flip Cards, Stickers)**: `0 14px 28px -6px rgba(30, 30, 36, 0.12), 0 6px 12px -2px rgba(30, 30, 36, 0.06)`. Accompanied by a subtle scale transformation (`1.02x`) and micro-rotation.
- **Washi Tape & Stickers**: Positioned above paper surfaces with zero physical elevation shadow, but rendered with semi-translucent alpha blending (`rgba(244, 208, 111, 0.65)`) and textured irregular end-cuts to seal cards onto the canvas.

## Shapes

The shape hierarchy is subtly softened (`roundedness: 1`), simulating precision die-cut paper, hand-cut tags, and matte prints:
- **Base Cards & Canvases**: Softened by `0.25rem` to `0.5rem`, preventing sterile razor-sharp edges without looking synthetic or bubbly.
- **Washi Tape Elements**: Asymmetrical rectangles with raw clipped edges (`polygon` clip-paths generating jagged 2px fraying on horizontal ends).
- **Ink Stamps & Badges**: Organic geometric contours (circular seals, scalloped oval rings, and rounded hexagon coordinates).
- **Skill & Tech Pills**: Fully rounded pill forms (`rounded-full`) contrasting against rectangular torn-paper cards.

## Screen Architecture & Page Layouts

Extracted from the latest Stitch screen instances:
1. **Unified Portfolio Page (`fe3302171406499eb1eb357b0d6aa082`)**:
   - Single continuous scrollable canvas stitching Hero, About, Projects, Experience, Chaos Drawer, and Contact.
2. **About & Introspect (`fafc08c41cdb4491aaf4afead5cebc95`)**:
   - Asymmetric bio grid, tactile bio swatches, paper margin notes, and spatial computing philosophy.
3. **Projects Archive (`d42613a5116748d0bce4127ad88fc8d2`)**:
   - Interactive project collage with 3D flip card technical details, GLSL shader previews, and prototype links.
4. **Experience & Career Journey (`c73f2e21cd3f47db85680e97d6272d1a`)**:
   - Vertical inked blueprint timeline with tagged spatial hardware/software metrics.
5. **Personal Drawer & Chaos (`bd20d9f572054617a1c63163ed33ccf9`)**:
   - Experimental lab sandbox featuring raw sketches, interactive audio visualizers, and tactile stickers.
6. **Contact & Connect (`8d0673e52600487b931fbf9f9e638436`)**:
   - Sketchpad charcoal input fields, handwritten callouts, and ink stamp submit button.

## Components

### Buttons
- **Primary Ink Button**: Background of `#1E1E24`, text in `#FBF9F4` (`label-badge`), `0.25rem` radius, with a subtle wobbly inset border (`box-shadow: inset 0 0 0 1px rgba(255,255,255,0.15)`). Hover triggers a tactile `-1px` Y-axis lift.
- **Taped Action Button**: Cream paper surface, framed with a faux washi tape strip bridging its top edge, featuring handwritten or serif interactive labels.
- **Secondary Ghost Button**: Transparent background, `1.5px solid #1E1E24`, styled like an ink-ruled diagram frame.

### Cards & Project Flips
- **Collage Card**: Heavy alabaster background (`#F5F0E8`), `0.25rem` radius, accented with an offset tape strip (`#F4D06F` tint) on one corner and an organic rotation between `-1.2deg` and `+1.5deg`.
- **Card Flip Mechanism**: 3D perspective flip (`perspective: 1200px`) revealing spatial computing architecture, GLSL shaders, or HCI user testing observations on an inverted textured reverse side (`#1E1E24` background with cream typography and sage linework).

### Chips & Skill Pills
- **Spatial Floating Pill**: Low-saturation tactile badges (`sage-soft`, `lilac-soft`, `teal-dusty` backgrounds with high-contrast `-deep` ink text). Set with `Space Mono` uppercase lettering, functioning as filters for AR, VR, WebGPU, and Spatial Audio.

### Corner Stickers & Washi Tape
- Semi-transparent, rotated `-3deg` to `+4deg`, fixed over card perimeters to evoke pinned notes on an idea board.
- Translucent backdrop filter with fibrous matte surface overlay.

### Input Fields
- Underlined sketchpad inputs featuring a bottom border simulating a ruled charcoal line (`1.5px solid #1E1E24`), shifting to `terracotta-rich` upon focus. Placeholders set in muted charcoal italic.

### Ink Stamps
- Monochromatic vector badges (e.g., "PROTOTYPE TESTED", "SPATIAL COMPUTING LAB", "PATENT PENDING") rendered with deliberate ink-fade stippling, rotated at `-6deg`.

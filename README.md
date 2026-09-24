# Tactile Spatial Sketchbook Portfolio

A living portfolio experience built at the intersection of tactile sketchbook intimacy and cutting-edge spatial computing. Designed with physical paper textures, dynamic layering, and high-precision spatial UI components.

---

## 🎨 Design System

This project strictly adheres to the design specification documented in [`DESIGN.md`](file:///c:/Users/ANANYA/Desktop/portfolio/DESIGN.md).

- **Theme**: Tactile Spatial Sketchbook (Skeuomorphic Paper + Editorial Minimalism)
- **Typography**:
  - `Playfair Display` — Display titles & editorial headers
  - `Plus Jakarta Sans` — Body copy & UI labels
  - `Space Mono` — Code, spatial coordinates & device metadata
- **Color Palette**:
  - Surfaces: `#FBF9F4` (Paper Canvas), `#F5F0E8` (Paper Layer), `#EAE2D5` (Paper Contrast)
  - Ink: `#1E1E24` (Sumi Ink Black), `#575653` (Muted Charcoal Ink)
  - Chromatic Accents: Terracotta (`#C04328`), Sage (`#3E6B48`), Lilac (`#7E528F`), Ochre (`#F4D06F`), Dusty Teal (`#5E9CA8`)

---

## 🧩 Components & Features Registry

This registry maintains the active state of all elements, components, and features in the repository.

### Active Components
- 🔘 **Buttons**
  - `Primary Ink Button` — Solid sumi-ink background (`#1E1E24`) with wobbly inset border and tactile lift.
  - `Taped Action Button` — Cream paper base framed with faux washi tape strip.
  - `Secondary Ghost Button` — Transparent background with ink-ruled border frame.
- 🃏 **Cards & Spreads**
  - `Collage Card` — Layered alabaster sheet with slight rotation (`-1.2°` to `+1.5°`) and washi tape accent.
  - `Card Flip Mechanism` — 3D perspective flip (`perspective: 1200px`) revealing spatial specs & GLSL code on reverse ink side.
- 🏷️ **Badges & Micro-Elements**
  - `Spatial Floating Pill` — Low-saturation pill tags (`Space Mono`) for spatial computing/HCI categorization.
  - `Corner Stickers & Washi Tape` — Semi-transparent tape overlays (`rgba(244, 208, 111, 0.45)`).
  - `Ink Stamp` — Monochromatic stippled vector seals rotated at `-6°`.
- ✏️ **Inputs**
  - `Sketchpad Input` — Underlined charcoal-ruled input shifting to terracotta on focus.

### Active Page Screens (Stitch Synchronized)
- 📜 **Unified Portfolio Canvas** (`Ananya Pulla's Unified Portfolio — Single Scrollable Page`) — Continuous single-scroll layout combining all sections.
- 👤 **About Section** (`About — Ananya Pulla's Retro Pop Portfolio`) — Bio collage, tactile swatches, and design philosophy.
- 📁 **Projects Archive** (`Projects — Ananya Pulla's Retro Pop Archive`) — Case studies with 3D flip card technical details.
- 💼 **Experience Timeline** (`Experience — The Journey`) — Inked blueprint career journey.
- 🎨 **Personal Drawer** (`Fun Stuff — Personal Drawer & Chaos`) — Experimental lab sandbox, audio visualizers, and stickers.
- ✉️ **Contact Module** (`Contact — Say Hello`) — Sketchpad input fields with ink stamp submission.

### Core Layout Modules
- 📐 **Asymmetric Fluid Collage**: 12-column desktop / 4-column mobile grid breaking strict alignment with staggered card rotation and paper layering depth.

---

## 📜 Project Changelog (Component & Feature Updates)

All additions, modifications, and subtractions of elements, features, or components are tracked here chronologically.

### [2026-09-13] — Synchronized with Latest Stitch Design Updates
- 🔄 **Updated**: Re-synchronized [`DESIGN.md`](file:///c:/Users/ANANYA/Desktop/portfolio/DESIGN.md) with updated Stitch project `final version` layout architecture.
- ➕ **Added**: Integrated **Screen Architecture & Page Layouts** covering Unified Portfolio Canvas, About, Projects Archive, Experience Timeline, Personal Drawer, and Contact screens.
- 🔄 **Updated**: Updated [`README.md`](file:///c:/Users/ANANYA/Desktop/portfolio/README.md) registry to reflect the latest active screen definitions.

### [2026-09-13] — Initial Foundation Setup
- ➕ **Added**: Imported design system from Stitch project `final version` into [`DESIGN.md`](file:///c:/Users/ANANYA/Desktop/portfolio/DESIGN.md).
- ➕ **Added**: Created [`README.md`](file:///c:/Users/ANANYA/Desktop/portfolio/README.md) as the living project and component registry.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm / pnpm / yarn

### Development Workflow
1. Refer to [`DESIGN.md`](file:///c:/Users/ANANYA/Desktop/portfolio/DESIGN.md) for style tokens before adding new components.
2. Update this [`README.md`](file:///c:/Users/ANANYA/Desktop/portfolio/README.md) under **Components & Features Registry** and **Project Changelog** whenever elements are added or removed.

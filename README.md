# Trip Builder

A React-based ski trip customization interface. Users can review a recommended trip package and customize individual components (resort, hotel, room, skipass, transfer, flight, insurance, add-ons) via modal selectors.

## Structure & Technical Choices

```
src/
├── components/          # Reusable UI and feature components
│   ├── ui/              # Primitives: Button, Card, Modal, Option, Text
│   ├── TripCard/        # Trip component display
│   ├── TotalPrice/      # Price summary (desktop + mobile)
│   └── ...
├── features/            # Feature modules with internal logic
│   └── TripBuilder/     # Main feature with selectors
├── data/                # Mock data
├── styles/              # SCSS variables & global styles
└── utils/               # Helpers (formatters)
```

The project uses **SCSS** (non-modules) with centralized design tokens in `_variables.scss`. Components are split into `ui/` (reusable primitives) and `features/` (business logic). The layout is **desktop-first** with a sticky sidebar for price summary and a fixed bottom bar on mobile.

## Getting Started

```bash
npm install
npm run dev
```

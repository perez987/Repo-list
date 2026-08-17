# CLAUDE.md

This file provides guidance to AI agents working on this repository.

## Project overview

A standalone, single-page repository gallery (`index.html`) for perez987's GitHub projects. It has no build step, no package manager, and no framework — plain HTML, CSS, and JavaScript.

## File structure

- `index.html` — main page; contains the gallery markup and loads `script.js` and `styles.css`
- `script.js` — all application logic: repository data array (`repos`), rendering, filtering, search, category pills, highlights modal, and canvas star-field animation
- `styles.css` — all styles; uses CSS custom properties for theming and accent colors
- `README.md` — project description
- `Cycle-colors.md` — notes on the accent-color cycling feature

## Repository data

Each repository entry lives in the `repos` array at the top of `script.js` and has the shape:

```js
{
  id: <number>,
  name: "<string>",
  url: "<GitHub URL>",
  description: "<string>",
  category: "<string>",   // e.g. "SwiftUI App", "Hackintosh", "Guide"
  accent: "<hex color>",  // card accent color
  highlights: ["<tag>", ...],
}
```

To add or remove a repository, edit the `repos` array directly.

## Key DOM elements

| ID | Purpose |
|----|---------|
| `repo-count` | Total number of repositories |
| `highlight-count` | Number of highlighted repos |
| `repo-grid` | Container for rendered repo cards |
| `category-pills` | Container for category filter buttons |
| `search-input` | Free-text search field |
| `empty-state` | Shown when no repos match the current filter |
| `back-to-top` | Scroll-to-top button |

## Development

Open `index.html` directly in a browser — no server or build step required.

There are no automated tests, linters, or build scripts in this project.

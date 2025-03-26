<div align="center">
    <br />
    <a href="https://github.com/dcastil/tailwind-merge">
        <img src="./tailwind-light-dark-logo.svg" alt="tailwind-light-dark" height="150px" />
    </a>
</div>

# Tailwind Light-Dark Plugin

A Tailwind CSS plugin that generates shorthand utilities for light and dark mode color pairs.

## Installation

```bash
npm install tailwind-light-dark
# or
yarn add tailwind-light-dark
```

## Usage

### Tailwind CSS v4

Add the plugin to your `app.css` or `app.postcss` file:

```css
@import "tailwindcss";

@plugin 'tailwind-light-dark';

/* Required: Make dark mode class based */
@custom-variant dark (&:where(.dark, .dark *));

/* ... */
```

### Tailwind CSS v3

Add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  darkMode: 'class', // This is required
  // ...
  plugins: [
    require('tailwind-light-dark')({ version = 3 }),
    // ...
  ],
}
```

Then use the generated utilities in your HTML:

```html
<!-- Background colors -->
<div class="bg-red-200-700">
  <!-- This will be red-200 in light mode and red-700 in dark mode -->
</div>

<!-- Text colors -->
<div class="text-blue-300-900">
  <!-- This will be blue-300 in light mode and blue-900 in dark mode -->
</div>

<!-- White/black shortcuts -->
<div class="bg-white-black text-black-white">
  <!-- White background with black text in light mode -->
  <!-- Black background with white text in dark mode -->
</div>
```

## Available Utilities

This plugin generates the following utility types:

- `bg-{color}-{lightShade}-{darkShade}` - Background colors
- `text-{color}-{lightShade}-{darkShade}` - Text colors
- `border-{color}-{lightShade}-{darkShade}` - Border colors
- `decoration-{color}-{lightShade}-{darkShade}` - Text decoration colors
- `outline-{color}-{lightShade}-{darkShade}` - Outline colors
- `shadow-{color}-{lightShade}-{darkShade}` - Box shadow colors
- `inset-shadow-{color}-{lightShade}-{darkShade}` - Inset box shadow colors
- `ring-{color}-{lightShade}-{darkShade}` - Ring shadow colors
- `inset-ring-{color}-{lightShade}-{darkShade}` - Inset ring shadow colors
- `accent-{color}-{lightShade}-{darkShade}` - Accent colors
- `caret-{color}-{lightShade}-{darkShade}` - Caret colors
- `fill-{color}-{lightShade}-{darkShade}` - SVG fill colors
- `stroke-{color}-{lightShade}-{darkShade}` - SVG stroke colors
- `from-{color}-{lightShade}-{darkShade}` - Gradient from colors
- `to-{color}-{lightShade}-{darkShade}` - Gradient to colors

## Special Utilities

The plugin also provides convenient white/black pairs:

- `bg-white-black` / `bg-black-white`
- `text-white-black` / `text-black-white`
- `border-white-black` / `border-black-white`
- `fill-white-black` / `fill-black-white`
- `stroke-white-black` / `stroke-black-white`
- `from-white-black` / `from-black-white`
- `to-white-black` / `to-black-white`

## License

MIT

## Inspiration

This plugin was heavily inspired by [SkeletonUI](https://www.skeleton.dev/). They provide light-dark color pairings for their own themed colors (e.g. primary-100-900, secondary-600-400, surface-950-50, etc.) and I wanted light-dark pairings available for every tailwind color.
# COB Slim Header

The cob-slim-header is a lightweight header component designed for City of Boston web applications. It provides a simple, clean header with a logo, separator, mayor text, and optional additional content.

## Features

- Fixed-height header that sticks to the top of the page
- Boston logo with a link to the Boston.gov website
- Visual separator (thin vertical black line) for content organization
- "Mayor Michelle Wu" text in italics
- Optional area for additional content
- 1px border using the Charles Blue color token
- Clean white background
- Responsive design
- Accessible (508-compliant)
- USWDS-compliant theming, leveraging Boston's branding

## Usage

### HTML

```html
<div class="cob-slim-header" data-slim-header>
  <div class="cob-slim-header__content">
    <a href="https://www.boston.gov" class="cob-slim-header__logo-link">
      <img src="/path/to/boston-logo.svg" alt="City of Boston" class="cob-slim-header__logo" />
    </a>
    <div class="cob-slim-header__separator"></div>
    <p class="cob-slim-header__mayor-text">Mayor Michelle Wu</p>
    <div class="cob-slim-header__additional-content">
      <!-- Optional additional content -->
    </div>
  </div>
</div>
```

### SCSS

```scss
// Import the component
@use "cob-slim-header";

// Or import the entire USWDS library
@use "uswds";
```

### JavaScript

The component's JavaScript will automatically initialize when the DOM is loaded. If you're using a module bundler, you can import it explicitly:

```js
import slimHeader from "@uswds/uswds/js/cob-slim-header";

// Initialize
slimHeader.on();

// Or with a specific root element
slimHeader.on(document.querySelector(".my-container"));
```

## Accessibility

- Uses semantic HTML elements
- Provides proper alt text for images
- Ensures sufficient color contrast
- Supports keyboard navigation

## Customization

You can customize the component by modifying the SCSS variables:

```scss
$slim-header-height: units(8); // Default: units(6) (48px)
$slim-header-icon-size: units(5); // Default: units(4) (32px)
$slim-header-border-color: color("primary"); // Default: color("cob-charles-blue")
$slim-header-background-color: color("gray-5"); // Default: color("white")
$slim-header-separator-color: color("gray-90"); // Default: color("black")
```

## Component Structure

The component follows USWDS package conventions, integrating into the existing SCSS and JavaScript structure:

```
📦 cob-uswds (Boston's USWDS Fork)
 ┣ 📂 src
 ┃ ┣ 📂 stylesheets
 ┃ ┃ ┣ 📂 packages
 ┃ ┃ ┃ ┣ _cob-slim-header.scss  # forwards package
 ┃ ┃ ┃ ┗ 📜 uswds.scss  # global compilation
 ┃ 
 ┣ 📂 packages
 ┃ ┣ 📂 cob-slim-header
 ┃ ┃ ┣ 📂 src
 ┃ ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┃ ┣ _index.scss  # Forwards component styles
 ┃ ┃ ┃ ┃ ┗ _cob-slim-header.scss  # Component styles
 ┃ ┃ ┃ ┣ 📂 img
 ┃ ┃ ┃ ┃ ┗ boston-logo.svg  # Boston logo
 ┃ ┃ ┃ ┣ 📂 content
 ┃ ┃ ┃ ┃ ┣ index.js  # Exports content
 ┃ ┃ ┃ ┃ ┗ cob-slim-header.json  # Default content
 ┃ ┃ ┃ ┣ 📂 test
 ┃ ┃ ┃ ┃ ┣ cob-slim-header.spec.js  # Component tests
 ┃ ┃ ┃ ┃ ┗ template.html  # Test template
 ┃ ┃ ┃ ┣ 📜 index.js  # Component JavaScript
 ┃ ┃ ┃ ┣ 📜 cob-slim-header.stories.js  # Storybook stories
 ┃ ┃ ┃ ┗ 📜 cob-slim-header.twig  # Twig template
 ┃ ┃ ┗ 📜 _index.scss  # Importable SCSS module
```

## Browser Support

This component supports all browsers specified in the USWDS browser support policy, including:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Internet Explorer 11
- iOS (latest 2 versions)
- Android (latest 2 versions)

## Implementation Notes

1. **Fixed Height**: The header has a fixed height (default: 48px) that can be customized through SCSS variables.
2. **Border**: The header has a 1px bottom border using the Charles Blue color token.
3. **Logo Sizing**: The logo is sized using the `$slim-header-icon-size` variable (default: 32px).
4. **Sticky Positioning**: The header uses `position: sticky` to stay at the top of the viewport when scrolling.
5. **Separator**: A thin vertical black line is included to visually separate the logo from the mayor text. The separator does not take up the full height of the header.
6. **Mayor Text**: "Mayor Michelle Wu" is displayed in italics after the separator.
7. **Additional Content**: An optional area is provided for additional content after the mayor text.

## Creating a New Component

If you want to create a new component for the Boston USWDS fork, follow these steps:

1. **Create the component directory structure**:
   ```bash
   mkdir -p packages/your-component-name/src/{styles,img,content,test}
   ```

2. **Create the main component files**:
   - `packages/your-component-name/_index.scss` - Main SCSS entry point
   - `packages/your-component-name/src/styles/_index.scss` - Forwards component styles
   - `packages/your-component-name/src/styles/_your-component-name.scss` - Component styles
   - `packages/your-component-name/src/index.js` - Component JavaScript
   - `packages/your-component-name/src/your-component-name.twig` - Twig template
   - `packages/your-component-name/src/your-component-name.stories.js` - Storybook stories

3. **Create content files**:
   - `packages/your-component-name/src/content/your-component-name.json` - Default content
   - `packages/your-component-name/src/content/index.js` - Exports content

4. **Create test files**:
   - `packages/your-component-name/src/test/your-component-name.spec.js` - Component tests
   - `packages/your-component-name/src/test/template.html` - Test template

5. **Add the component to the main SCSS imports**:
   - Create `src/stylesheets/packages/_your-component-name.scss` that forwards your component

6. **Document your component**:
   - Create a comprehensive README.md with usage examples, customization options, and accessibility considerations 
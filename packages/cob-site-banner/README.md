# COB Site Banner

The cob-site-banner is a custom, collapsible security banner designed to be placed at the top of City of Boston web applications. It follows USWDS conventions, ensuring accessibility, modularity, and government compliance.

## Features

- Displays a security message at the top of the page
- Accordion-based expandable content, providing details about .boston.gov and HTTPS security
- Entire banner is clickable to toggle the expanded state
- Arrow rotates 180 degrees with animation when expanding/collapsing
- Accessible (508-compliant) behavior with keyboard support
- Optimized for both static and interactive use cases
- USWDS-compliant theming, leveraging Boston's branding
- Works in React apps using Vite + TypeScript (compiled CSS or SASS import)

## Usage

### HTML

```html
<div class="cob-site-banner" data-site-banner>
  <div class="cob-site-banner__content">
    <div class="cob-site-banner__left">
      <img src="/path/to/boston-icon.svg" alt="Boston.gov Icon" class="cob-site-banner__icon" />
      <span>An official website of the City of Boston. 
        <button class="cob-site-banner__toggle" aria-expanded="false" aria-controls="cob-site-banner-content">
          Here's how you know
        </button>
      </span>
    </div>
    <div class="cob-site-banner__right">
      <button class="cob-site-banner__toggle-icon" aria-expanded="false" aria-controls="cob-site-banner-content">
        <span class="cob-site-banner__chevron"></span>
      </button>
    </div>
  </div>

  <div class="cob-site-banner__details" id="cob-site-banner-content" hidden>
    <div class="cob-site-banner__details-inner">
      <div class="cob-site-banner__info">
        <img src="/path/to/boston-icon.svg" alt="" class="cob-site-banner__info-icon" />
        <div>
          <strong>Official websites use .boston.gov</strong>
          <p>A .boston.gov website belongs to an official government organization in the City of Boston.</p>
        </div>
      </div>
      <div class="cob-site-banner__info">
        <img src="/path/to/https-icon.svg" alt="" class="cob-site-banner__info-icon" />
        <div>
          <strong>Secure .gov websites use HTTPS</strong>
          <p>A lock () or https:// means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.</p>
        </div>
      </div>
    </div>
  </div>
</div>
```

### SCSS

```scss
// Import the component
@use "cob-site-banner";

// Or import the entire USWDS library
@use "uswds";
```

### JavaScript

The component's JavaScript will automatically initialize when the DOM is loaded. If you're using a module bundler, you can import it explicitly:

```js
import siteBanner from "@uswds/uswds/js/cob-site-banner";

// Initialize
siteBanner.on();

// Or with a specific root element
siteBanner.on(document.querySelector(".my-container"));
```

## Accessibility

- Uses proper ARIA attributes (aria-expanded, aria-controls)
- Supports keyboard navigation
- Provides visual feedback for focus states
- Works without JavaScript (CSS-only fallback)

## Customization

You can customize the component by modifying the SCSS variables:

```scss
$banner-icon-size: 2.5rem; // Default: 2rem
$banner-icon-size-mobile: 2rem; // Default: 1.5rem
$banner-chevron-size: 1rem; // Default: 0.8rem
$banner-background-color: color("blue-warm-10v"); // Default color
$banner-text-color: color("ink"); // Default text color
$banner-link-color: color("primary"); // Default link color
$banner-details-background-color: color("blue-warm-5"); // Default details background
```

## Component Structure

The component follows USWDS package conventions, integrating into the existing SCSS and JavaScript structure:

```
📦 cob-uswds (Boston's USWDS Fork)
 ┣ 📂 src
 ┃ ┣ 📂 stylesheets
 ┃ ┃ ┣ 📂 packages
 ┃ ┃ ┃ ┣ _cob-site-banner.scss  # forwards package
 ┃ ┃ ┃ ┗ 📜 uswds.scss  # global compilation
 ┃ 
 ┣ 📂 packages
 ┃ ┣ 📂 cob-site-banner
 ┃ ┃ ┣ 📂 src
 ┃ ┃ ┃ ┣ 📂 styles
 ┃ ┃ ┃ ┃ ┣ _index.scss  # Forwards component styles
 ┃ ┃ ┃ ┃ ┗ _cob-site-banner.scss  # Component styles
 ┃ ┃ ┃ ┣ 📂 img
 ┃ ┃ ┃ ┃ ┣ boston-icon.svg  # Boston icon
 ┃ ┃ ┃ ┃ ┣ https-icon.svg  # HTTPS icon
 ┃ ┃ ┃ ┃ ┗ angle-arrow-down-primary.svg  # Chevron icon
 ┃ ┃ ┃ ┣ 📂 content
 ┃ ┃ ┃ ┃ ┣ index.js  # Exports content
 ┃ ┃ ┃ ┃ ┗ cob-site-banner.json  # Default content
 ┃ ┃ ┃ ┣ 📂 test
 ┃ ┃ ┃ ┃ ┣ cob-site-banner.spec.js  # Component tests
 ┃ ┃ ┃ ┃ ┗ template.html  # Test template
 ┃ ┃ ┃ ┣ 📜 index.js  # Component JavaScript
 ┃ ┃ ┃ ┣ 📜 cob-site-banner.stories.js  # Storybook stories
 ┃ ┃ ┃ ┗ 📜 cob-site-banner.twig  # Twig template
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

## Behavior

| State | Behavior |
|-------|----------|
| Collapsed (default) | Shows the Boston.gov icon, primary security message, and an "Here's how you know" button. |
| Expanded (onclick) | Reveals additional details about .boston.gov websites and HTTPS security. |
| ARIA-compliant | Uses aria-expanded, aria-controls, and hidden attributes to ensure accessibility. |
| Keyboard Navigable | Users can tab to the toggle and press Enter or Space to expand/collapse. |
| Graceful Degradation | Works without JavaScript (CSS-only fallback). |

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

7. **Follow USWDS conventions**:
   - Use BEM naming for CSS classes (e.g., `.your-component-name__element`)
   - Use USWDS utility functions and mixins for consistency
   - Ensure accessibility compliance
   - Write tests for all functionality

8. **Test in Storybook**:
   - Run Storybook to verify your component works as expected
   - Test different states and variations

By following these steps, you'll create a component that integrates seamlessly with the USWDS ecosystem and follows best practices for maintainability and accessibility. 
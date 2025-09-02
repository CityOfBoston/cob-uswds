# Introduction to Using the `cob-uswds` Fork in React Vite Frontends

## Overview

The `cob-uswds` library is a custom fork of the U.S. Web Design System (USWDS), tailored for the City of Boston's digital services. This fork is intended as the standard styling foundation for all standalone React web applications developed by DOIT. It is designed to be integrated seamlessly with modern frontend tooling, such as Vite, and provides a robust, accessible, and maintainable design system for city-branded applications.

## Why Use a Custom USWDS Fork?

While the existing "fleet patterns" styling library has served many projects, maintaining a dedicated fork of USWDS offers several key advantages:

- **Accessibility**: USWDS is built with accessibility as a core principle, ensuring compliance with federal and local standards out of the box.
- **Maintenance**: By tracking upstream USWDS changes, `cob-uswds` can more easily incorporate security patches, bug fixes, and new features.
- **Modularity**: The fork allows for selective inclusion of components and utilities, reducing CSS bloat and improving performance.
- **City Branding**: Custom tokens and styles ensure a consistent City of Boston look and feel across all applications.

## Key Modifications in `cob-uswds`

- **Fonts**: The original USWDS font stack has been replaced with City of Boston branded fonts—Lora (serif) and Montserrat (sans-serif)—to align with city identity guidelines. These font tokens are defined in `packages/uswds-core/src/styles/tokens/font/`.
- **Color Tokens**: New color tokens have been added for Boston branding, including:
  - **Charles Blue**
  - **Optimistic Blue**
  - **Freedom Trail Red**

  These tokens are defined in `packages/uswds-core/src/styles/tokens/color/` and configured in `packages/uswds-core/src/theme/_uswds-theme.scss`.

These tokens are available as design tokens and utility classes, making it easy to apply city colors consistently.

## Using the `cob-uswds` package in any Node based project

1. **Install the package** (if not already included):
   ```sh
   npm install cob-uswds
   # or
   yarn add cob-uswds
   ```
2. **Import the styles** in your main entry point (e.g., `main.jsx` or `App.jsx`):
   ```js
   import 'cob-uswds/dist/css/cob-uswds.min.css';
   ```
3. **Add** these scripts to your html file, make sure it's in the head and in this order:
    ```
    <script type="module" src=".path-to-cob-uswds/js/uswds-init.min.js"></script>
    <script type="module" src=".path-to-cob-uswds/js/cob-uswds.min.js"></script>
    ```
## Best Practices

- **Always use `grid-container()`** for main content wrappers to ensure proper alignment and responsive behavior. Other mixins such as `at-media('mobile-lg')` is also prefered for conditional rendering. 
- **Leverage utility classes** for spacing, color, and typography to maintain consistency and reduce custom CSS.
- **Consult the USWDS documentation** for component and utility usage, but refer to this fork's documentation for Boston-specific tokens and overrides.

## Conclusion

By standardizing on `cob-uswds`, DOIT ensures that all React web apps are accessible, maintainable, and visually aligned with the City of Boston brand. This approach streamlines development, reduces technical debt, and provides a better experience for both developers and end users.

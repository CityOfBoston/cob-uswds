# USWDS Patterns Integration Guide

This guide provides instructions on adding a custom component to the USWDS project, compiling and packaging it, and using the npm package in different application types. These will be the three actions that developers will need to perform to maintain and build upon this USWDS fork.

## Part 1: Adding a New Custom COB Component

To add a new custom COB component, follow these steps:

### File Structure and Conventions

1. **Create a New Directory**: Under the `packages` directory, create a new folder for your component, e.g., `packages/my-new-component`. At the root of this new directory, create a src folder `packages/my-new-component/src` as well as a _index.scss file `packages/my-new-component/_index.scss`. The contents of this file should be `@forward "src/styles"` and other dependencies you might have to existing assets in usa-core, usa-fonts or usa-icons. See other components to learn more about which dependencies you should include.

2. **SCSS Styles, Content, Tests and Image Assets**: Define the styles for your component in a new SCSS file within `packages/my-new-component/src/styles/`, e.g., `_my-new-component.scss`. Use design tokens such as color tokens for consistency. Ensure to create an `_index.scss` file in the same directory to forward your component styles. Likewise, create separate folders `packages/my-new-component/src/content/`, `packages/my-new-component/src/test/`, `packages/my-new-component/src/img/` for storing content templates, unit tests as well as image assets.

3. **JavaScript**: Add a new file as `packages/my-new-component/src/index.js` and add your javascript here. It's best to avoid global or non component native selectors.

4. **HTML Template**: Create an HTML template for documentation or testing purposes, e.g., `packages/my-new-component/src/my-new-component.twig`. You should also have a `packages/my-new-component/src/my-new-component.stories.js` file that include a basic storybook setup.

5. **Update Global Styles**: Create `src/stylesheets/packages/_my-new-component.scss` to forward your component styles. Ensure you follow the existing import conventions. This will ensure that any new components' styles are built and compiled into `dist/css/uswds.css` for distribution.

6. **Update Global Javascript**: In `packages/uswds-core/src/js/index.js` add your new component as an exported object. Follow existing exports' paths to properly include your new component. This will ensure that any new components' styles are built and minimized into both `dist/js/cob-uswds.min.js` and `dist/js/uswds-init.min.js` for distribution.

### Formats and Conventions

- **Design Tokens**: Use USWDS design tokens for colors, spacing, and typography to maintain consistency.
- **Imports**: Follow the existing import structure to ensure your component is correctly integrated.

## Part 2: Compiling and Packaging

### Compiling

- **Command**: Run `npm run build` to compile the SCSS and JavaScript.
- **Purpose**: Compiling generates the CSS from SCSS, allowing both SCSS source and compiled CSS to be included in the package. This hybrid approach supports React apps that use SCSS and other apps that use CSS.

### Testing

- **Command**: Run `npm start` to test your component in a development environment.
- **Purpose**: Testing ensures your component behaves as expected across different browsers and devices.

### Packaging and Shipping

- **Condition**: You must change the version number in package.json to a version higher than any previously published version.

- **Command**: Use `npm pack` to package the repository as cob-uswds-x.x.x.tgz.
- **Purpose**: Packaging the repo is a prerequisite to publishing the package on npm.

- **Command**: Use `npm publish` to package and ship your component to npm.
- **Purpose**: Publishing makes your component available for use in other projects via npm.

## Part 3: Using the NPM Package

### In a React App

1. **Install the Package**: Use the following command to install the package:
   ```bash
   npm install @account/cob-uswds
   ```
2. **Import SCSS**: Import the SCSS source in your React app if it supports SCSS:
   ```scss
   @import 'node_modules/@account/cob-uswds/dist/scss/stylesheets/uswds.scss';
   ```
3. **Using Theme Tokens**: Utilize USWDS theme tokens for consistent design:
   ```scss
   .my-component {
     color: $theme-color-primary;
     margin: $theme-spacing-unit;
   }
   ```

### In a Non-React NPM based project

1. **Install the Package**: Use the following command to install the package:
   ```bash
   npm install @account/cob-uswds
   ```
2. **Import CSS**: Import the compiled CSS in your project:
   ```html
   <link rel="stylesheet" href="node_modules/@account/cob-uswds/dist/css/uswds.min.css">
   ```
3. **Using Theme Tokens**: Reference theme tokens in your custom styles:
   ```html
   <style>
     .my-component {
       color: var(--theme-color-primary);
       margin: var(--theme-spacing-unit);
     }
   </style>
   ```

For more detailed information on using USWDS tokens and utilities, refer to the [USWDS documentation](https://designsystem.digital.gov/ ).

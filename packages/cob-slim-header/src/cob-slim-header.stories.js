import component from "./cob-slim-header.twig";
import behavior from "./index.js";
import bostonLogo from "./img/cob-boston-logo.svg";
import bostonLogoMobile from "./img/cob-boston-logo-mobile.svg";

export default {
  title: "Components/COB Slim Header",
  argTypes: {
    stickToTop: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the header should stick to the top of the viewport when scrolling"
    },
    logoUrl: {
      control: { type: "text" },
      description: "URL for the logo link",
      defaultValue: "https://www.boston.gov",
    },
    logoAlt: {
      control: { type: "text" },
      description: "Alt text for the logo",
      defaultValue: "City of Boston",
    },
    mayorText: {
      control: { type: "text" },
      description: "Text for the mayor's name",
      defaultValue: "Mayor Michelle Wu",
    },
    additionalContent: {
      control: { type: "text" },
      description: "Additional content to display after the separator",
    }
  },
  parameters: {
    docs: {
      description: {
        component: "A slim header component for City of Boston web applications.",
      },
    },
  },
};

const Template = (args) => {
  const defaultArgs = {
    ...args,
    // In Storybook, we use the imported assets directly
    assetPath: "",
    bostonLogo,
    bostonLogoMobile,
  };

  // Render the component
  const element = document.createElement('div');
  element.innerHTML = component(defaultArgs);
  
  // Initialize the behavior after a short delay to ensure DOM is ready
  setTimeout(() => {
    behavior.on(element);
  }, 0);
  
  return element;
};

export const Default = Template.bind({});
Default.args = {
  stickToTop: false,
  logoUrl: "https://www.boston.gov",
  logoAlt: "City of Boston",
  mayorText: "Mayor Michelle Wu",
  additionalContent: ""
}; 
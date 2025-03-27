import component from "./cob-slim-header.twig";
import behavior from "./index.js";
import bostonLogo from "./img/boston-logo.svg";

export default {
  title: "Components/COB Slim Header",
  argTypes: {
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
    },
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
  // Add assets to args
  const argsWithAssets = {
    ...args,
    bostonLogo,
  };

  // Render the component
  const element = document.createElement('div');
  element.innerHTML = component(argsWithAssets);
  
  // Initialize the behavior after a short delay to ensure DOM is ready
  setTimeout(() => {
    behavior.on(element);
  }, 0);
  
  return element;
};

export const Default = Template.bind({});
Default.args = {
  logoUrl: "https://www.boston.gov",
  logoAlt: "City of Boston",
  mayorText: "Mayor Michelle Wu",
  additionalContent: "",
}; 
import component from "./cob-slim-footer.twig";
import behavior from "./index.js";
import footerIcon from "./img/footer-icon.svg";

export default {
  title: "Components/COB Slim Footer",
  argTypes: {
    iconUrl: {
      control: { type: "text" },
      description: "URL for the icon",
      defaultValue: footerIcon,
    },
    iconAlt: {
      control: { type: "text" },
      description: "Alt text for the icon",
      defaultValue: "Footer Icon",
    },
    footerText: {
      control: { type: "text" },
      description: "Text for the footer",
      defaultValue: "This is the footer text.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A slim footer component for City of Boston web applications.",
      },
    },
  },
};

const Template = (args) => {
  // Render the component
  const element = document.createElement('div');
  element.innerHTML = component(args);
  
  // Initialize the behavior after a short delay to ensure DOM is ready
  setTimeout(() => {
    behavior.on(element);
  }, 0);
  
  return element;
};

export const Default = Template.bind({});
Default.args = {
  iconUrl: footerIcon,
  iconAlt: "Footer Icon",
  footerText: "This is the footer text.",
}; 
import component from "./cob-site-banner.twig";
import behavior from "./index.js";
import bostonIcon from "./img/boston-icon.svg";
import cityHallIcon from "./img/city-hall-icon.svg";
import httpsLockIcon from "./img/https-lock-icon.svg";
import angleArrowDown from "./img/angle-arrow-down.svg";

export default {
  title: "Components/COB Site Banner",
  argTypes: {
    bannerText: {
      control: { type: "text" },
      defaultValue: "An official website of the City of Boston.",
    },
    toggleText: {
      control: { type: "text" },
      defaultValue: "Here's how you know",
    },
    officialWebsiteHeading: {
      control: { type: "text" },
      defaultValue: "Official websites use .boston.gov",
    },
    officialWebsiteText: {
      control: { type: "text" },
      defaultValue: "A .boston.gov website belongs to an official government organization in the City of Boston.",
    },
    secureWebsiteHeading: {
      control: { type: "text" },
      defaultValue: "Secure .gov websites use HTTPS",
    },
    secureWebsiteText: {
      control: { type: "text" },
      defaultValue: "A lock or https:// means you've safely connected to the .gov website. Share sensitive information only on official, secure websites.",
    },
    bostonIcon: {
      control: { type: "text" },
      defaultValue: bostonIcon,
    },
    cityHallIcon: {
      control: { type: "text" },
      defaultValue: cityHallIcon,
    },
    httpsLockIcon: {
      control: { type: "text" },
      defaultValue: httpsLockIcon,
    },
    angleArrowDown: {
      control: { type: "text" },
      defaultValue: angleArrowDown,
    }
  },
  parameters: {
    docs: {
      description: {
        component: "A custom, collapsible security banner for City of Boston web applications.",
      },
    },
  },
};

const Template = (args) => {
  const defaultArgs = {
    ...args,
    isExpanded: false
  };
  
  const element = document.createElement('div');
  element.innerHTML = component(defaultArgs);
  
  setTimeout(() => {
    behavior.on(element);
  }, 0);
  
  return element;
};

export const Default = Template.bind({});
Default.args = {}; 
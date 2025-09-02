import component from "./cob-site-banner.twig";
import behavior from "./index.js";
import bostonIcon from "./img/cob-boston-icon.svg";
import cityHallIcon from "./img/cob-city-hall-icon.svg";
import httpsLockIcon from "./img/cob-https-lock-icon.svg";
import angleArrowDown from "./img/cob-angle-arrow-down.svg";

export default {
  title: "Components/COB Site Banner",
  argTypes: {
    stickToTop: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Whether the banner should stick to the top of the viewport when scrolling"
    },
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
    isExpanded: false,
    bostonIcon,
    cityHallIcon,
    httpsLockIcon,
    angleArrowDown
  };
  
  const element = document.createElement('div');
  element.innerHTML = component(defaultArgs);
  
  // USWDS components are initialized by uswds-core/start.js globally
  // This shouldn't be necessary, but we'll add it as a safety
  window.addEventListener('load', () => {
    behavior.on(element);
  });
  
  return element;
};

export const Default = Template.bind({});
Default.args = {}; 
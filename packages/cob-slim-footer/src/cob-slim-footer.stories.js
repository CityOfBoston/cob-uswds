import component from "./cob-slim-footer.twig";
import behavior from "./index.js";
import footerIcon from "./img/footer-icon.png";
import threeoneoneSvg from "./img/311.svg";

export default {
  title: "Components/COB Slim Footer",
  argTypes: {
    footerIcon: {
      control: { type: "text" },
      description: "URL for the footer icon",
      defaultValue: footerIcon,
    },
    threeoneoneSvg: {
      control: { type: "text" },
      description: "URL for the 311 icon",
      defaultValue: threeoneoneSvg,
    },
    privacyPolicyUrl: {
      control: { type: "text" },
      description: "URL for Privacy Policy",
      defaultValue: "#",
    },
    contactUrl: {
      control: { type: "text" },
      description: "URL for Contact Us",
      defaultValue: "#",
    },
    jobsUrl: {
      control: { type: "text" },
      description: "URL for Jobs",
      defaultValue: "#",
    },
    publicRecordsUrl: {
      control: { type: "text" },
      description: "URL for Public Records",
      defaultValue: "#",
    },
    accessibilityUrl: {
      control: { type: "text" },
      description: "URL for Language and Disability Access",
      defaultValue: "#",
    },
    reportIssueUrl: {
      control: { type: "text" },
      description: "URL for Report an Issue",
      defaultValue: "#",
    }
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
  footerIcon: footerIcon,
  threeoneoneSvg: threeoneoneSvg,
  privacyPolicyUrl: "#",
  contactUrl: "#",
  jobsUrl: "#",
  publicRecordsUrl: "#",
  accessibilityUrl: "#",
  reportIssueUrl: "#"
}; 
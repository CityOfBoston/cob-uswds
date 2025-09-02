import component from "./cob-slim-footer.twig";
import behavior from "./index.js";

export default {
  title: "Components/COB Slim Footer",
  argTypes: {
    stickToBottom: {
      control: { type: "boolean" },
      description: "Whether the footer should stick to the bottom of the viewport",
      defaultValue: false,
    },
    privacyPolicyUrl: {
      control: { type: "text" },
      description: "URL for Privacy Policy",
      defaultValue: "https://www.boston.gov/departments/innovation-and-technology/terms-use-and-privacy-policy-city-boston-digital-services",
    },
    contactUrl: {
      control: { type: "text" },
      description: "URL for Contact Us",
      defaultValue: "https://www.boston.gov/departments/mayors-office/contact-boston-city-hall",
    },
    jobsUrl: {
      control: { type: "text" },
      description: "URL for Jobs",
      defaultValue: "https://www.boston.gov/career-center",
    },
    publicRecordsUrl: {
      control: { type: "text" },
      description: "URL for Public Records",
      defaultValue: "https://www.boston.gov/departments/public-records",
    },
    accessibilityUrl: {
      control: { type: "text" },
      description: "URL for Language and Disability Access",
      defaultValue: "https://www.boston.gov/departments/language-and-communications-access/notice-accommodations",
    },
    reportIssueUrl: {
      control: { type: "text" },
      description: "URL for Report an Issue",
      defaultValue: "http://www.cityofboston.gov/311/",
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
  const defaultArgs = {
    ...args,
    // No need for assetPath or direct asset imports since we're using background images
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
  // Using the default values from argTypes
};
import Component from "./cob-landing.twig";
import DefaultContent from "./cob-landing.json";

export default {
  title: "Pages/Landing Page",
};

const Template = (args) => Component(args);

export const LandingPage = Template.bind({});
LandingPage.args = DefaultContent;

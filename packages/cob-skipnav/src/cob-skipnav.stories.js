import Component from "./cob-skipnav.twig";
import Content from "./cob-skipnav.json";

export default {
  title: "Components/Skipnav",
};

const Template = (args) => Component(args);

export const Skipnav = Template.bind({});
Skipnav.args = Content;

import Component from "./cob-hero.twig";
import Content from "./cob-hero.json";

export default {
  title: "Components/Hero",
};

const Template = (args) => Component(args);

export const Hero = Template.bind({});
Hero.args = Content;

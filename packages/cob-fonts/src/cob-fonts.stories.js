import Component from "./cob-fonts.twig";
import Content from "./cob-fonts.json";

export default {
  title: "Design Tokens/Fonts",
  argTypes: {
    typefaces: {
      table: { disable: true },
    },
  },
};

const Template = (args) => Component(args);

export const Fonts = Template.bind({});
Fonts.args = Content;

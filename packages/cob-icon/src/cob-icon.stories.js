import Component from "./cob-icon.twig";
import Content from "./cob-icon.json";

export default {
  title: "Design Tokens/Icons",
  argTypes: {
    icons: {
      table: { disable: true },
    },
  },
};

const Template = (args) => Component(args);

export const Icons = Template.bind({});
Icons.args = Content;
Icons.parameters = {
  axe: {
    skip: true,
  },
};

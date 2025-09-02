import Component from "./cob-media-block.twig";
import Content from "./cob-media-block.json";

export default {
  title: "Components/Media Block",
};

const Template = (args) => Component(args);

export const MediaBlock = Template.bind({});
MediaBlock.args = Content;

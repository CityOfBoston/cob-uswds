import Component from "./cob-process-list.twig";
import Tile from "./cob-process-list--custom-sizing.twig";
import Test from "./cob-process-list--no-text.twig";

export default {
  title: "Components/Process List",
};

const Template = (args) => Component(args);
const CustomTemplate = (args) => Tile(args);
const NoTextTemplate = (args) => Test(args);

export const Default = Template.bind({});
export const ProcessListCustomSizing = CustomTemplate.bind({});
export const ProcessListNoText = NoTextTemplate.bind({});

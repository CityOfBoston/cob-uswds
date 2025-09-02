import Medium from "./cob-footer.twig";
import Big from "./cob-footer--big/cob-footer--big.twig";
import Slim from "./cob-footer--slim/cob-footer--slim.twig";

import DefaultContent from "./cob-footer.json";
import BigContent from "./cob-footer--big/cob-footer--big.json";
import SlimContent from "./cob-footer--slim/cob-footer--slim.json";

export default {
  title: "Components/Footer",
};

const Template = (args) => Medium(args);
const BigTemplate = (args) => Big(args);
const SlimTemplate = (args) => Slim(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const BigFooter = BigTemplate.bind({});
BigFooter.args = BigContent;

export const SlimFooter = SlimTemplate.bind({});
SlimFooter.args = SlimContent;

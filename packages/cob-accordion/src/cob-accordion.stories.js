import Component from "./cob-accordion.twig";
import { DefaultContent, BorderedContent, MultiContent } from "./content";

import IconTest from "./test/test-patterns/test-accordion-icon.twig";
import HeaderContent from "../../cob-header/src/cob-header.json";
import BannerContent from "../../cob-banner/src/content/cob-banner.json";

export default {
  title: "Components/Accordion",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => IconTest(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Bordered = Template.bind({});
Bordered.args = BorderedContent;

export const Multiselectable = Template.bind({});
Multiselectable.args = MultiContent;

export const TestIcons = TestTemplate.bind({});
TestIcons.args = {
  ...DefaultContent,
  ...HeaderContent,
  ...BannerContent,
};

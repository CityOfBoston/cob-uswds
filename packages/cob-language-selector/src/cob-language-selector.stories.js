import Component from "./cob-language-selector.twig";
import ComponentThreeOrMore from "./cob-language-selector--three-or-more/cob-language-selector--three-or-more.twig";
import ComponentHeader from "./cob-language-selector--header/cob-language-selector--header.twig";
import UnstyledHeader from "./cob-language-selector--unstyled/cob-language-selector--unstyled.twig";
import DefaultContent from "./cob-language-selector.json";
import ThreeOrMoreContent from "./cob-language-selector--three-or-more/cob-language-selector--three-or-more.json";
import HeaderContent from "./cob-language-selector--header/cob-language-selector--header.json";
import UnstyledContent from "./cob-language-selector--unstyled/cob-language-selector--unstyled.json";

export default {
  title: "Components/Language Selector",
};

const Template = (args) => Component(args);
const ThreeOrMoreTemplate = (args) => ComponentThreeOrMore(args);
const HeaderTemplate = (args) => ComponentHeader(args);
const UnstyledTemplate = (args) => UnstyledHeader(args);

export const TwoLanguages = Template.bind({});
TwoLanguages.args = DefaultContent;

export const ThreeOrMoreLanguages = ThreeOrMoreTemplate.bind({});
ThreeOrMoreLanguages.args = ThreeOrMoreContent;

export const InHeaderExample = HeaderTemplate.bind({});
InHeaderExample.args = HeaderContent;

export const UnstyledExample = UnstyledTemplate.bind({});
UnstyledExample.args = UnstyledContent;

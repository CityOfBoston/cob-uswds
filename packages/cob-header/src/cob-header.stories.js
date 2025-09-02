import Component from "./cob-header.twig";
import ComponentExtended from "./cob-header--extended/cob-header--extended.twig";
import DefaultContent from "./cob-header.json";
import MegamenuContent from "./cob-header~megamenu.json";
import ExtendedContent from "./cob-header--extended/cob-header--extended.json";
import ExtendedMegamenuContent from "./cob-header--extended/cob-header--extended-megamenu.json";
import navSecondaryContent from "../../cob-nav/src/cob-nav__secondary/cob-nav__secondary.json";
import { SmallContent as SmallSearchContent } from "../../cob-search/src/content";
import TitleContent from "../../cob-site-title/src/cob-site-title.json";

export default {
  title: "Components/Header",
  args: {
    // Default search settings - Alternatively override in `cob-header.json`
    search: {
      ...SmallSearchContent,
      search_js: true,
    },
    ...TitleContent,
  },
};

const Template = (args) => Component(args);
const ExtendedTemplate = (args) => ComponentExtended(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Megamenu = Template.bind({});
Megamenu.args = {
  ...MegamenuContent,
};

export const Extended = ExtendedTemplate.bind({});
Extended.args = {
  ...ExtendedContent,
  navSecondaryContent: {
    ...navSecondaryContent,
    search: true,
  },
};

export const ExtendedMegamenu = ExtendedTemplate.bind({});
ExtendedMegamenu.args = {
  ...ExtendedMegamenuContent,
  navSecondaryContent: {
    ...navSecondaryContent,
    search: true,
  },
};

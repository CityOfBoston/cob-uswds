import Component from "./cob-table.twig";
import SortableComponent from "./cob-table--sortable/cob-table--sortable.twig";
import SortableContent from "./cob-table--sortable/cob-table--sortable.json";
import DefaultContent from "./cob-table.json";
import BorderlessContent from "./cob-table~borderless.json";
import StripedContent from "./cob-table~striped.json";
import StickyHeaderContent from "./cob-table~stickyheader.json";
import TestMultipleStickyRowsComponent from "./test/test-patterns/test-cob-table--multiple-sticky-headers.twig";

export default {
  title: "Components/Table",
  argTypes: {
    scrollable: {
      name: "Scrollable (Turning this on will disable sticky headers)",
      control: { type: "boolean" },
      defaultValue: false,
    },
    sticky_header: {
      name: "Sticky header",
      control: { type: "boolean" },
      defaultValue: false,
    },
  },
};

const Template = (args) => Component(args);
const SortableTemplate = (args) => SortableComponent(args);
const TestMultipleStickyRowsTemplate = (args) =>
  TestMultipleStickyRowsComponent(args);

export const Default = Template.bind({});
Default.args = DefaultContent;

export const Borderless = Template.bind({});
Borderless.args = BorderlessContent;

export const Striped = Template.bind({});
Striped.args = StripedContent;

export const StickyHeader = Template.bind({});
StickyHeader.args = {
  ...DefaultContent,
  ...StickyHeaderContent,
};

export const Sortable = SortableTemplate.bind({});
Sortable.args = {
  ...SortableContent,
};

export const TestStickyHeaderMultipleRows = TestMultipleStickyRowsTemplate.bind(
  {},
);
TestStickyHeaderMultipleRows.argTypes = {
  sticky_header: {
    defaultValue: true,
  },
  scrollable: {
    table: { disable: true },
  },
};

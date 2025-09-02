import Component from "./cob-sidenav.twig";
import TestComponent from "./test/test-patterns/test-sidenav-button.twig";
import LevelOneContent from "./cob-sidenav~one-level.json";
import LevelTwoContent from "./cob-sidenav~two-levels.json";
import LevelThreeContent from "./cob-sidenav~three-levels.json";

export default {
  title: "Components/Side Navigation",
};

const Template = (args) => Component(args);
const TestTemplate = (args) => TestComponent(args);

export const LevelOne = Template.bind({});
LevelOne.args = LevelOneContent;

export const LevelTwo = Template.bind({});
LevelTwo.args = LevelTwoContent;

export const LevelThree = Template.bind({});
LevelThree.args = LevelThreeContent;

export const Test = TestTemplate.bind({});

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Counter } from "./Counter";

export default {
  title: "Components/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Storybook Example",
};

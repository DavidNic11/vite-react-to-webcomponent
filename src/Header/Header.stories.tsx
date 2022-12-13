import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Without_Text = Template.bind({});
Without_Text.args = {
  text: "",
};

export const With_Text = Template.bind({});
With_Text.args = {
  text: "Hello World",
};

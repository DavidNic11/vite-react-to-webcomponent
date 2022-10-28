import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./Header";

export default {
  title: "Components/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Without_Title = Template.bind({});
Without_Title.args = {
  title: "",
};

export const With_Title = Template.bind({});
With_Title.args = {
  title: "Hello World",
};

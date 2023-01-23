import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ReactComponent as Ic } from "../bag.svg";
import { Button, ButtonVariant } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Filled.args = {
  leftIcon: Ic,
  variant: ButtonVariant.Filled1,
  disabled: true,
  children: "Button",
};

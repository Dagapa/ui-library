import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@ui-library/react";

const meta = {
  title: "Sorin/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};


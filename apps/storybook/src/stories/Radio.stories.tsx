import type { Meta, StoryObj } from "@storybook/react-vite";
import { Radio } from "@ui-library/react";

const options = [{ value: "1" }, { value: "2" }];

const meta = {
  title: "Sorin/Radio",
  component: Radio,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  args: { options, defaultValue: "1" },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioDefault: Story = {};

export const RadioWithLabel: Story = {
  args: {
    options: [
      { value: "1", label: "Texto de Radiobutton" },
      { value: "2", label: "Texto de Radiobutton" },
    ],
  },
};

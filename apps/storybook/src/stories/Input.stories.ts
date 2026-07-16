import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@ui-library/react";
import { within } from "storybook/test";

const meta = {
  title: "Sorin/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { label: "Label", placeholder: "Digita", disabled: false },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {};

export const InputActive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await input.focus()
  },
};

export const InputDisabled: Story = {
  args: {
    disabled: true
  }
};

export const InputError: Story = {
  args: {
    error: "Error",
  },
};

export const InputWithLength: Story = {
  args: {
    showCounter: true,
    maxLength: 100,
  },
};

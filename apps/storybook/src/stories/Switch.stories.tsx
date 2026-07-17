import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@ui-library/react";

const meta = {
  title: "Sorin/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { label: 'Label', checked: false},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {}

export const SwitchActive: Story = {
  args: {
    checked: true
  }
}
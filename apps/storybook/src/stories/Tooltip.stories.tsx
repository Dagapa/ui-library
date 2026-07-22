import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip, Input } from "@ui-library/react";

const meta = {
  title: "Sorin/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "radio",
      options: ["top", "left", "bottom", "right"],
    },
  },
  args: {
    text: "Tooltip",
    children: <Button>Tooltip</Button>
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SideLeft: Story = {
  args: {
    side: "left",
  },
};

export const InputWithTooltip = {
  args: {
    text: "Input With Tooltip",
    children: <Input label='Tootip' />
  }
}
import type { Meta, StoryObj } from "@storybook/react-vite";
import { LogoutButton } from "@ui-library/react";
import { userEvent, within } from "storybook/test";

const meta = {
  title: "Sorin/LogoutButton",
  component: LogoutButton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    side: {
      control: "radio",
      options: ["top", "left"],
    },
  },
  args: {
    tooltip: "Tooltip",
  },
} satisfies Meta<typeof LogoutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole("button");

    await userEvent.hover(trigger);
  }
};

export const SideLeft: Story = {
  args: {
    side: "left",
  },
};

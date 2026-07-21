import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipButton } from "@ui-library/react";
import { userEvent, within } from "storybook/test";

const meta = {
  title: "Sorin/TooltipButton",
  component: TooltipButton,
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
} satisfies Meta<typeof TooltipButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TooltipButtonDefault: Story = {};

export const TooltipButtonHover: Story = {
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button')

    await userEvent.hover(trigger)
  }
};

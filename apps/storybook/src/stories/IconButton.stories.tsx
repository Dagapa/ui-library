import type { Meta, StoryObj } from "@storybook/react-vite";

import { fn } from "storybook/test";

import { IconButton, ArrowLeftIcon, HomeIcon, LogoutIcon } from "@ui-library/react";

const meta = {
  title: "Sorin/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["main", "secondary"] },
    icon: { control: false },
  },
  args: { onClick: fn(), icon: <ArrowLeftIcon /> },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    icon: <ArrowLeftIcon />,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: <ArrowLeftIcon />,
  },
};

export const HomeButton: Story = {
  args: {
    icon: <HomeIcon />,
  },
};

export const LogoutButton: Story = {
  args: {
    icon: <LogoutIcon />,
    rounded: true
  },
};

export const DisabledMain: Story = {
  args: {
    disabled: true,
    icon: <ArrowLeftIcon />,
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    icon: <ArrowLeftIcon />,
  },
};
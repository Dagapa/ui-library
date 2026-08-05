import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { ArrowLeftIcon } from "../assets/ArrowLeftIcon";
import { HomeIcon } from "../assets/HomeIcon";
import { LogoutIcon } from "../assets/LogoutIcon";
import { IconButton } from "@ui-library/react";

const meta = {
  title: "Sorin/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["main", "secondary", "danger"],
      description: "La variante visual del botón de icono.",
      defaultValue: "main",
    },
    rounded: {
      control: "boolean",
      description: "Indica si el botón tiene esquinas redondeadas.",
      defaultValue: false,
    },
    disabled: {
      control: "boolean",
      description: "Indica si el botón está deshabilitado y no puede ser interactuado.",
      defaultValue: false,
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
      description: "El tipo de botón (button, submit, reset).",
      defaultValue: "button",
    },
    onClick: {
      action: "onClick",
      description: "Manejador de eventos llamado cuando se hace clic en el botón.",
    },
    icon: {
      control: false,
      description: "El icono a mostrar dentro del botón.",
    },
  },
  args: {
    onClick: fn(),
    icon: <ArrowLeftIcon />
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    icon: <HomeIcon />,
  },
};

export const Rounded: Story = {
  args: {
    icon: <LogoutIcon />,
    rounded: true,
  },
};

export const DisabledMain: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
  },
};


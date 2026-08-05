import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Button } from "@ui-library/react";

const meta = {
  title: "Sorin/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "radio",
      options: ["main", "secondary"],
      description: "La variante visual del botón.",
      defaultValue: "main",
    },
    pressed: {
      control: "boolean",
      description: "Indica el estado presionado del botón para uso toggle.",
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
    children: {
      control: "text",
      description: "El contenido del botón.",
    },
  },
  args: {
    onClick: fn(),
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variant: "main",
  },
};

export const MainPressed: Story = {
  args: {
    variant: "main",
    pressed: true,
  },
};

export const MainDisabled: Story = {
  args: {
    variant: "main",
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const SecondaryPressed: Story = {
  args: {
    variant: "secondary",
    pressed: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: "secondary",
    disabled: true,
  },
};

export const SubmitType: Story = {
  args: {
    type: "submit",
  },
};

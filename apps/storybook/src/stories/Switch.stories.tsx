import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Switch } from "@ui-library/react";

const meta = {
  title: "Sorin/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Indica si el switch está deshabilitado y no puede ser interactuado.",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Indica si el switch es de solo lectura (el usuario no puede cambiar el valor).",
      defaultValue: false,
    },
    required: {
      control: "boolean",
      description: "Indica si el switch debe estar activado antes de enviar el formulario.",
      defaultValue: false,
    },
    name: {
      control: "text",
      description: "El nombre del switch, utilizado al enviar el formulario.",
    },
    value: {
      control: "text",
      description: "El valor del switch, utilizado al enviar el formulario.",
    },
    onCheckedChange: {
      action: "checkedChange",
      description: "Manejador de eventos llamado cuando el switch es activado o desactivado.",
    },
    label: {
      control: "text",
      description: "El texto de la etiqueta mostrada junto al switch.",
    },
  },
  args: {
    label: "Label",
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SwitchDefault: Story = {};

export const SwitchActive: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultChecked: true,
    readOnly: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const WithName: Story = {
  args: {
    name: "switch-field",
  },
};

export const WithValue: Story = {
  args: {
    name: "switch-field",
    value: "switch-value",
  },
};

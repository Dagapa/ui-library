import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Checkbox } from "@ui-library/react";

const meta = {
  title: "Sorin/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Indica si el checkbox está deshabilitado y no puede ser interactuado.",
      defaultValue: false,
    },
    required: {
      control: "boolean",
      description: "Indica si el checkbox debe estar marcado antes de enviar el formulario.",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Indica si el checkbox es de solo lectura (el usuario no puede cambiar el valor).",
      defaultValue: false,
    },
    indeterminate: {
      control: "boolean",
      description: "Indica si el checkbox está en un estado indeterminado (mezclado).",
      defaultValue: false,
    },
    name: {
      control: "text",
      description: "El nombre del checkbox, utilizado al enviar el formulario.",
    },
    value: {
      control: "text",
      description: "El valor del checkbox, utilizado al enviar el formulario.",
    },
    onCheckedChange: {
      action: "checkedChange",
      description: "Manejador de eventos llamado cuando el checkbox es marcado o desmarcado.",
    },
  },
  args: {
    onCheckedChange: fn(),
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    indeterminate: true,
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const ReadOnly: Story = {
  args: {
    defaultChecked: true,
    readOnly: true,
  },
};

export const WithName: Story = {
  args: {
    name: "checkbox-field",
  },
};

export const WithValue: Story = {
  args: {
    name: "checkbox-field",
    value: "checkbox-value",
  },
};

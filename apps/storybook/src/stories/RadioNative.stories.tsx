import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { RadioNative } from "@ui-library/react";

const meta = {
  title: "Sorin/RadioNative",
  component: RadioNative,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "La etiqueta visible del radio button.",
    },
    disabled: {
      control: "boolean",
      description: "Indica si el radio button está deshabilitado y no puede ser interactuado.",
      defaultValue: false,
    },
    required: {
      control: "boolean",
      description: "Indica si el radio button es requerido antes de enviar el formulario.",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Indica si el radio button es de solo lectura.",
      defaultValue: false,
    },
    name: {
      control: "text",
      description: "El nombre del radio button, utilizado al enviar el formulario.",
    },
    value: {
      control: "text",
      description: "El valor del radio button, utilizado al enviar el formulario.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Indica si el radio button está seleccionado inicialmente.",
      defaultValue: false,
    },
    onChange: {
      action: "onChange",
      description: "Manejador de eventos llamado cuando el estado del radio button cambia.",
    },
    onClick: {
      action: "onClick",
      description: "Manejador de eventos llamado cuando se hace clic en el radio button.",
    },
  },
  args: {
    name: "option",
    value: "1",
    onChange: fn(),
    onClick: fn(),
  },
} satisfies Meta<typeof RadioNative>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
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

export const WithLabel: Story = {
  args: {
    label: "Texto de Radiobutton",
  },
};

export const WithLabelChecked: Story = {
  args: {
    label: "Texto de Radiobutton",
    defaultChecked: true,
  },
};

export const ControlledChecked: Story = {
  args: {
    label: "Controlado (siempre checked)",
    checked: true,
    readOnly: true,
  },
};

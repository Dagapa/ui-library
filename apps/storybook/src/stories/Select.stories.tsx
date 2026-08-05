import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Select } from "@ui-library/react";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
];

const meta = {
  title: "Sorin/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Indica si el select está deshabilitado y no puede ser interactuado.",
      defaultValue: false,
    },
    placeholder: {
      control: "text",
      description: "Texto de placeholder mostrado cuando no hay ninguna opción seleccionada.",
    },
    label: {
      control: "text",
      description: "La etiqueta visible para el componente select.",
    },
    error: {
      control: "text",
      description: "Mensaje de error a mostrar debajo del select.",
    },
    onValueChange: {
      action: "valueChange",
      description: "Manejador de eventos llamado cuando el valor seleccionado cambia.",
    },
    options: {
      control: "object",
      description: "Lista de opciones disponibles para seleccionar.",
    },
  },
  args: {
    label: "Label",
    placeholder: "Selecciona",
    options,
    onValueChange: fn(),
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    value: "1",
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "2",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

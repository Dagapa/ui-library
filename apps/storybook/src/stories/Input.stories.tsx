import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Input } from "@ui-library/react";
import { within } from "storybook/test";
import { HomeIcon } from "../assets/HomeIcon";

const meta = {
  title: "Sorin/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "La etiqueta visible del input.",
    },
    error: {
      control: "text",
      description: "Mensaje de error a mostrar debajo del input.",
    },
    disabled: {
      control: "boolean",
      description: "Indica si el input está deshabilitado y no puede ser interactuado.",
      defaultValue: false,
    },
    readOnly: {
      control: "boolean",
      description: "Indica si el input es de solo lectura (el usuario no puede modificar el valor).",
      defaultValue: false,
    },
    required: {
      control: "boolean",
      description: "Indica si el input es requerido y debe ser completado antes de enviar el formulario.",
      defaultValue: false,
    },
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "tel"],
      description: "El tipo de input (text, password, email, number, tel).",
      defaultValue: "text",
    },
    name: {
      control: "text",
      description: "El nombre del input, utilizado al enviar el formulario.",
    },
    value: {
      control: "text",
      description: "El valor del input (para inputs controlados).",
    },
    defaultValue: {
      control: "text",
      description: "El valor inicial del input (para inputs no controlados).",
    },
    onValueChange: {
      action: "onChange",
      description: "Manejador de eventos llamado cuando el valor del input cambia.",
    },
    onInput: {
      action: "onInput",
      description: "Manejador de eventos llamado cuando el usuario escribe en el input.",
    },
    maxLength: {
      control: "number",
      description: "El número máximo de caracteres permitidos en el input.",
    },
    showCounter: {
      control: "boolean",
      description: "Indica si se muestra un contador de caracteres.",
      defaultValue: false,
    },
  },
  args: {
    label: "Label",
    disabled: false,
    onValueChange: fn(),
    onInput: fn(),
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {};

export const InputActive: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    await input.focus();
  },
};

export const InputDisabled: Story = {
  args: {
    disabled: true,
  },
};

export const InputReadOnly: Story = {
  args: {
    readOnly: true,
    defaultValue: "Texto de solo lectura",
  },
};

export const InputRequired: Story = {
  args: {
    required: true,
  },
};

export const InputPassword: Story = {
  args: {
    type: "password",
    icon: <HomeIcon />,
  },
};

export const InputEmail: Story = {
  args: {
    type: "email",
  },
};

export const InputWithError: Story = {
  args: {
    error: "Este campo es requerido",
  },
};

export const InputWithIcon: Story = {
  args: {
    icon: <HomeIcon />,
  },
};

export const InputWithLength: Story = {
  args: {
    showCounter: true,
    maxLength: 100,
  },
};

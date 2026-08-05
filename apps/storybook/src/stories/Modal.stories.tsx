import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Modal } from "@ui-library/react";

const meta = {
  title: "Sorin/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isOpenModal: {
      control: "boolean",
      description: "Indica si el modal está abierto o cerrado.",
      defaultValue: true,
    },
    autoClose: {
      control: "boolean",
      description: "Indica si el modal puede cerrarse haciendo clic fuera o presionando Escape.",
      defaultValue: true,
    },
    closeModal: {
      action: "closeModal",
      description: "Función llamada cuando el modal solicita cerrarse (por ejemplo, clic en el fondo).",
    }, 
  },
  args: {
    isOpenModal: true,
    autoClose: true,
    closeModal: fn(),
    children: null,
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {};

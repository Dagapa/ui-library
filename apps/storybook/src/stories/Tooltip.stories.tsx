import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button, Tooltip, Input } from "@ui-library/react";

const meta = {
  title: "Sorin/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "El contenido de texto mostrado dentro del tooltip.",
    },
    side: {
      control: "radio",
      options: ["top", "left", "bottom", "right"],
      description: "El lado preferido del tooltip relativo a su disparador.",
      defaultValue: "top",
    },
    children: {
      control: false,
      description: "El elemento que activa el tooltip al pasar el cursor.",
    },
  },
  args: {
    text: "Tooltip",
    children: <Button>Tooltip</Button>,
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SideTop: Story = {
  args: {
    text: "Tooltip en la parte superior",
    side: "top",
  },
};

export const SideBottom: Story = {
  args: {
    text: "Tooltip en la parte inferior",
    side: "bottom",
  },
};

export const SideLeft: Story = {
  args: {
    text: "Tooltip a la izquierda",
    side: "left",
  },
};

export const SideRight: Story = {
  args: {
    text: "Tooltip a la derecha",
    side: "right",
  },
};

export const InputWithTooltip: Story = {
  args: {
    text: "Input con Tooltip",
    children: <Input label="Input con Tooltip" />,
  },
};

export const IconWithTooltip: Story = {
  args: {
    text: "Icono con tooltip",
    children: <Button variant="secondary">?</Button>,
  },
};

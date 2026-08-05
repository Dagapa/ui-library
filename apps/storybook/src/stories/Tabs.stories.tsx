import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Tabs } from "@ui-library/react";

const tabs = [
  { label: "Opción 1 Tab", value: "1" },
  { label: "Opción 2 Tab", value: "2" },
  { label: "Opción 3 Tab", value: "3" },
];

const meta = {
  title: "Sorin/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onValueChange: {
      action: "valueChange",
      description: "Devolución de llamada invocada cuando se establece un nuevo valor.",
    },
  },
  args: {
    tabs,
    defaultValue: "1",
    onValueChange: fn(),
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsDefault: Story = {};

export const TabsWithOtherDefaultValue: Story = {
  args: {
    defaultValue: "2",
  },
};

export const Controlled: Story = {
  args: {
    tabs,
    value: "2",
  },
};

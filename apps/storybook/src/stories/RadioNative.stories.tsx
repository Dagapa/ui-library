import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadioNative } from '@ui-library/react';

const meta = {
  title: 'Sorin/RadioNative',
  component: RadioNative,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    name: 'option',
    value: "1"
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

export const WithLabel: Story = {
  args: {
    label: 'Texto de Radiobutton',
  },
};

export const WithLabelChecked: Story = {
  args: {
    label: 'Texto de Radiobutton',
    defaultChecked: true
  },
};

export const ControlledChecked: Story = {
  args: {
    label: 'Controlado (siempre checked)',
    checked: true,
    readOnly: true,
  },
};

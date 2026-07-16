import type { Meta, StoryObj } from '@storybook/react-vite';

import { userEvent, within } from 'storybook/test';

import { Select } from '@ui-library/react';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
];

const meta = {
  title: 'Sorin/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    label: 'Label',
    placeholder: 'Selecciona',
    options,
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Open: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('combobox');

    await userEvent.click(trigger);
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

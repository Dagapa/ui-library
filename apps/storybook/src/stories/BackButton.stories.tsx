import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { BackButton } from '@ui-library/react';

const meta = {
  title: 'Sorin/BackButton',
  component: BackButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof BackButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Hover: Story = {};

export const Pressed: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from '@ui-library/react';

const meta = {
  title: 'Sorin/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'radio', options: ['main', 'secondary'] },
  },
  args: { onClick: fn(), children: 'Button' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  args: {
    variant: 'main',
  },
};

export const MainPressed: Story = {
  args: {
    variant: 'main',
    pressed: true,
  },
};

export const MainDisabled: Story = {
  args: {
    variant: 'main',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const SecondaryPressed: Story = {
  args: {
    variant: 'secondary',
    pressed: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    variant: 'secondary',
    disabled: true,
  },
};

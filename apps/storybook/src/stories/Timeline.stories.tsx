import type { Meta, StoryObj } from '@storybook/react-vite';

import { Timeline } from '@ui-library/react';

const steps = [
  { value: '1', label: 'Tema 1' },
  { value: '2', label: 'Tema 2' },
  { value: '3', label: 'Tema 3' },
  { value: '4', label: 'Tema 4' },
];

const meta = {
  title: 'Sorin/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    items: steps,
    activeValue: '1',
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimelineDefault: Story = {};

export const TimelineMiddleStep: Story = {
  args: {
    activeValue: '3',
  },
};

export const TimelineLastStep: Story = {
  args: {
    activeValue: '4',
  },
};

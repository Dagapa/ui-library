import type { Meta, StoryObj } from '@storybook/react-vite';

import { Timeline, ArrowIcon, HomeIcon, EyeSlashIcon,  } from '@ui-library/react';

const steps = [
  { value: 1, label: 'Tema 1', icon: <ArrowIcon /> },
  { value: 2, label: 'Tema 2', icon: <HomeIcon /> },
  { value: 3, label: 'Tema 3', icon: <EyeSlashIcon /> },
  { value: 4, label: 'Tema 4' },
];

const meta = {
  title: 'Sorin/Timeline',
  component: Timeline,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    steps,
    currentStep: 1,
  },
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimelineDefault: Story = {};

export const TimelineMiddleStep: Story = {
  args: {
    currentStep: 3,
  },
};

export const TimelineLastStep: Story = {
  args: {
    currentStep: 4,
  },
};

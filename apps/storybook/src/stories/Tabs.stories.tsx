import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from '@ui-library/react';

const tabs = [
  { label: 'Opción 1 Tab', value: '1' },
  { label: 'Opción 2 Tab', value: '2' },
];

const meta = {
  title: 'Sorin/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args:{
    tabs,
    defaultValue: '1'
  }
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TabsDefault: Story = {};

export const TabsWithOtherDefaultValue: Story = {
  args:{
    defaultValue: '2'
  }
};

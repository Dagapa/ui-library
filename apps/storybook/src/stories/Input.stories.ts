import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@ui-library/react'

const meta = {
  title: 'Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { label: 'label', placeholder: 'Digita', error: ""},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputDefault: Story = {
  args: {
  }
}

export const InputError: Story = {
  args: {
    error: "Error"
  }
}

export const InputWithLength: Story = {
  args: {
    maxLength: 100
  }
}
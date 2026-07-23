import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from '@ui-library/react';

const meta = {
  title: 'Sorin/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
  tags: ['autodocs'],
  args: {
    open: true,
    onOpenChange: () => {},
    children: null,
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ModalDefault: Story = {};

import { Button } from '@base-ui/react/button';
import type { ButtonProps } from '@base-ui/react/button';
import ArrowLeftIcon from '../../assets/icons/ArrowLeftIcon';
import './BackButton.css';

export interface BackButtonProps extends Omit<ButtonProps, 'render'> {
  className?: string;
}

export function BackButton({ className, ...props }: BackButtonProps) {
  return (
    <Button
      className={['ui-library-back-button', className].filter(Boolean).join(' ')}
      {...props}
    >
      <ArrowLeftIcon />
    </Button>
  );
}

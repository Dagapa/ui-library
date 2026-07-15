import type { ComponentPropsWithRef } from 'react';
import './Button.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'main' | 'secondary';
  pressed?: boolean;
}

export function Button({ variant = 'main', pressed, className, ...props }: ButtonProps) {
  return (
    <button
      aria-pressed={pressed}
      className={[
        'ui-library-button',
        `ui-library-button--${variant}`,
        pressed && 'ui-library-button--pressed',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  );
}

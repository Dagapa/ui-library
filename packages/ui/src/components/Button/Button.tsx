import type { ComponentPropsWithRef } from 'react';
import './Button.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  variant?: 'primary' | 'secondary';
  /** Marks the button as a pressed toggle (sets `aria-pressed` and the pressed visual state). */
  pressed?: boolean;
}

export function Button({ variant = 'primary', pressed, className, ...props }: ButtonProps) {
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

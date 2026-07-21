import { ComponentPropsWithRef } from 'react';
import './RadioNative.css';

export interface RadioNativeProps extends Omit<ComponentPropsWithRef<'input'>, 'type' | 'size'> {
  label?: string;
}

export function RadioNative({ label, className, ...props }: RadioNativeProps) {
  return (
    <label
      className={[
        'ui-library-radio-native',
        props.disabled && 'ui-library-radio-native--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <input type="radio" className="ui-library-radio-native__input" {...props} />
      <span className="ui-library-radio-native__box">
        <span className="ui-library-radio-native__indicator" />
      </span>
      {label && <span className="ui-library-radio-native__label">{label}</span>}
    </label>
  );
}

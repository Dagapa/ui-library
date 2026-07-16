import { ComponentPropsWithRef } from 'react';
import errorIcon from '../../assets/icons/error.svg';
import './Input.css'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string;
  error?: string;
  maxLength?: number
}

export function Input({ label, error, maxLength, ...props }: InputProps) {
  return (
    <div className="ui-library-input-wrapper">
      <fieldset className={`ui-library-input${error ? ' ui-library-input--error' : ''}`}>
        <label>{label}</label>
        <input maxLength={maxLength} {...props} />
      </fieldset>
      {maxLength && (
        <span className="ui-library-input__counter">
          0/{maxLength}
        </span>
      )}
      {error && (
        <div className="ui-library-input__error">
          <span className="ui-library-input__error-icon">
            <img src={errorIcon} alt="" className="ui-library-input__error-img" />
          </span>
          <span className="ui-library-input__error-text">
            {error}
          </span>
        </div>
      )}
    </div>
  );
}

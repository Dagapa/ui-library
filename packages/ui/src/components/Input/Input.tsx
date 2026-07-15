import { ComponentPropsWithRef } from 'react';
import errorIcon from '../../assets/icons/error.svg';
import './Input.css'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string;
  error?: string;
}

export function Input({ label, error, ...props }: InputProps) {
  return (
    <>
    <fieldset className={`ui-library-input${error ? ' ui-library-input--error' : ''}`}>
      <label>{label}</label>
      <input {...props} />
    </fieldset>
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
    </>
  );
}

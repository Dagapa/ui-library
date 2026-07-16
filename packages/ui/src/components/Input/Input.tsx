import { ComponentPropsWithRef } from 'react';
import errorIcon from '../../assets/icons/error.svg';
import './Input.css'

export interface InputProps extends ComponentPropsWithRef<'input'> {
  label: string;
  error?: string;
  showCounter?: boolean
}

export function Input({ label, error, showCounter = false, ...props }: InputProps) {
  return (
    <div className="ui-library-input-wrapper">
      <div className={`ui-library-input${error ? ' ui-library-input--error' : ''}`}>
        <label htmlFor={props.id}>{label}</label>
        <input {...props} />
      </div>
      {showCounter && props.maxLength && (
        <span className="ui-library-input__counter">
          0/{props.maxLength}
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

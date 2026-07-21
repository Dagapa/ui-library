import { ComponentPropsWithRef } from "react";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import "./Input.css";

export interface InputProps extends Omit<ComponentPropsWithRef<"input">, 'placeholder'> {
  label: string;
  error?: string;
  showCounter?: boolean;
}

export function Input({
  label,
  error,
  showCounter = false,
  ...props
}: InputProps) {
  return (
    <div className="ui-library-input-wrapper">
      <label
        className={`ui-library-input${error ? " ui-library-input--error" : ""}`}
      >
        <span className="ui-library-input__span">{label}</span>
        <input {...props} placeholder=" " />
      </label>
      {showCounter && props.maxLength && (
        <span className="ui-library-input__counter">0/{props.maxLength}</span>
      )}
      {error && (
        <div className="ui-library-input__error">
          <span className="ui-library-input__error-icon">
            <ErrorIcon />
          </span>
          <span className="ui-library-input__error-text">{error}</span>
        </div>
      )}
    </div>
  );
}

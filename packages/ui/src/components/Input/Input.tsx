import { ComponentPropsWithRef, ReactElement } from "react";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import "./Input.css";

export interface InputProps extends Omit<
  ComponentPropsWithRef<"input">,
  "placeholder"
> {
  label: string;
  error?: string;
  icon?: ReactElement;
  className?: string;
  toogleIcon?: () => void;
  showCounter?: boolean;
}

export function Input({
  label,
  error,
  icon,
  toogleIcon,
  className,
  showCounter = false,
  ...props
}: InputProps) {
  return (
    <div
      className={[`ui-library-input-wrapper`, className]
        .filter(Boolean)
        .join(" ")}
    >
      <label
        className={`ui-library-input${error ? " ui-library-input--error" : ""}${icon ? " ui-library-input--has-icon" : ""}`}
      >
        <span className="ui-library-input__span">{label}</span>
        <input {...props} placeholder=" " />
        {icon && (
          <span className="ui-library-input__icon" onClick={toogleIcon}>
            {icon}
          </span>
        )}
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

"use client";

import { ReactElement, useRef } from "react";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import { Input as BaseInput } from "@base-ui/react/input";
import type { InputProps } from "@base-ui/react";
import "./Input.css";

export interface Props extends Omit<InputProps, "render" | "placeholder"> {
  label: string;
  error?: string;
  icon?: ReactElement;
  className?: string;
  toggleIcon?: () => void;
  showCounter?: boolean;
  onInput?: any;
}

export function Input({
  label,
  error,
  icon,
  className,
  toggleIcon,
  showCounter = false,
  onInput,
  ...props
}: Props) {
  const counterRef = useRef<HTMLSpanElement>(null);

  const handleInput = (e: any) => {
    if (showCounter) {
      const valueLength = e.currentTarget.value.length;
      if (counterRef.current) {
        counterRef.current.textContent = `${valueLength}/${props.maxLength}`;
      }
    }
    onInput?.(e);
  };

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
        <BaseInput {...props} onInput={handleInput} placeholder=" " />
        {icon && (
          <span className="ui-library-input__icon" onClick={toggleIcon}>
            {icon}
          </span>
        )}
      </label>
      {showCounter && props.maxLength && (
        <span ref={counterRef} className="ui-library-input__counter"/>
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

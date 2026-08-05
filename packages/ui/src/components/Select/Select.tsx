"use client";

import { Select as BaseSelect } from "@base-ui/react/select";
import "./Select.css";
import ArrowIcon from "../../assets/icons/ArrowIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  label: string;
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  disabled?: boolean;
  name?: string;
  className?: string;
  error?: string;
}

export function Select({
  label,
  placeholder,
  options,
  className,
  onValueChange,
  error,
  ...props
}: SelectProps) {
  return (
    <BaseSelect.Root
      items={options}
      onValueChange={(value) => {
        if (value) {
          onValueChange?.(value);
        }
      }}
      {...props}
    >
      <div
        className={["ui-library-select", className].filter(Boolean).join(" ")}
      >
        <BaseSelect.Label className="ui-library-select__label">
          {label}
        </BaseSelect.Label>
        <BaseSelect.Trigger
          aria-invalid={!!error}
          className={({ value }) =>
            [
              "ui-library-select__trigger",
              !!value && !options.some((o) => o.value === value)
                ? "ui-library-select__trigger--placeholder"
                : "",
              error ? "ui-library-select__trigger--error" : "",
            ]
              .filter(Boolean)
              .join(" ")
          }
        >
          <BaseSelect.Value className="ui-library-select__value">
            {(value: string | null) => {
              if (!value) return placeholder ?? null;
              const option = options.find((o) => o.value === value);
              return option ? option.label : (placeholder ?? value);
            }}
          </BaseSelect.Value>
          <span className="ui-library-select__icon">
            <ArrowIcon />
          </span>
        </BaseSelect.Trigger>
        {error && (
          <div className="ui-library-select__error">
            <span className="ui-library-select__error-icon">
              <ErrorIcon />
            </span>
            <span className="ui-library-select__error-text">{error}</span>
          </div>
        )}
      </div>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          className="ui-library-select__positioner"
          side="bottom"
          sideOffset={4}
          alignItemWithTrigger={false}
        >
          <BaseSelect.Popup className="ui-library-select__popup">
            <BaseSelect.List>
              {options.map((option) => (
                <BaseSelect.Item
                  key={option.value}
                  value={option.value}
                  className="ui-library-select__item"
                >
                  <BaseSelect.ItemText>{option.label}</BaseSelect.ItemText>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
}

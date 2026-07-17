import { Select as BaseSelect } from "@base-ui/react/select";
import "./Select.css";
import ArrowIcon from "../../assets/icons/ArrowIcon";

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
}

export function Select({
  label,
  placeholder = "Selecciona",
  options,
  className,
  onValueChange,
  ...props
}: SelectProps) {
  return (
    <BaseSelect.Root
      items={options}
      onValueChange={(value) => {
        if (value != null) {
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
        <BaseSelect.Trigger className="ui-library-select__trigger">
          <BaseSelect.Value
            placeholder={placeholder}
            className="ui-library-select__value"
          />
          <ArrowIcon className="ui-library-select__icon" />
        </BaseSelect.Trigger>
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


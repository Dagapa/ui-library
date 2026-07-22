'use client';

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { CheckboxRootProps } from "@base-ui/react/checkbox";
import CheckIcon from "../../assets/icons/CheckIcon";
import "./Checkbox.css";

export interface CheckboxProps extends Omit<CheckboxRootProps, "render"> {
  label?: string;
}

export function Checkbox({ label = "", ...props }: CheckboxProps) {

  return (
    <label className="ui-library-checkbox">
      <BaseCheckbox.Root className="ui-library-checkbox__box" {...props}>
        <BaseCheckbox.Indicator
          className="ui-library-checkbox__indicator"
          keepMounted
        >
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
      <span className="ui-library-checkbox__label">{label}</span>
    </label>
  );
}

'use client';

import { Checkbox as BaseCheckbox } from "@base-ui/react/checkbox";
import type { CheckboxRootProps } from "@base-ui/react/checkbox";
import CheckIcon from "../../assets/icons/CheckIcon";
import "./Checkbox.css";

export interface CheckboxProps extends Omit<CheckboxRootProps, "render"> {
  className?: string;
}

export function Checkbox({className, ...props}: CheckboxProps) {

  return (
    <label className={["ui-library-checkbox", className].filter(Boolean).join(" ")}>
      <BaseCheckbox.Root className="ui-library-checkbox__box" {...props}>
        <BaseCheckbox.Indicator
          className="ui-library-checkbox__indicator"
          keepMounted
        >
          <CheckIcon />
        </BaseCheckbox.Indicator>
      </BaseCheckbox.Root>
    </label>
  );
}

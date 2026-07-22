'use client';

import { RadioGroup as BaseRadioGroup } from "@base-ui/react/radio-group";
import type { RadioGroupProps as BaseRadioGroupProps } from "@base-ui/react/radio-group";
import { Radio as BaseRadio } from "@base-ui/react/radio";
import "./Radio.css";

export interface RadioOption {
  value: string;
  label?: string;
}

export interface RadioProps extends Omit<BaseRadioGroupProps, "render"> {
  options: RadioOption[];
}

export function Radio({ options, ...props }: RadioProps) {
  return (
    <BaseRadioGroup className="ui-library-radio-group" {...props}>
      {options.map(({ value, label }) => (
        <label key={value} className="ui-library-radio">
          <BaseRadio.Root
            className="ui-library-radio__box"
            value={value}
          >
            <BaseRadio.Indicator
              className="ui-library-radio__indicator"
              keepMounted
            />
          </BaseRadio.Root>
          {label && <span className="ui-library-radio__label">{label}</span>}
        </label>
      ))}
    </BaseRadioGroup>
  );
}

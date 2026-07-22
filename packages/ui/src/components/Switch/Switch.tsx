'use client';

import { Switch as BaseUISwitch } from "@base-ui/react";
import type { SwitchRootProps } from '@base-ui/react'
import './Switch.css'

export interface SwitchProps extends Omit<SwitchRootProps, 'render'> {
  label: string;
}

export function Switch({ label, ...props }: SwitchProps) {
  return (
    <label className="ui-library-switch-label">
      {label}
      <BaseUISwitch.Root className="ui-library-switch" {...props}>
        <BaseUISwitch.Thumb className="ui-library-thumb"/>
      </BaseUISwitch.Root>
    </label>
  );
}

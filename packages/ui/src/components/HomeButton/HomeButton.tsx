'use client';

import { Tooltip } from "@base-ui/react/tooltip";
import HomeIcon from "../../assets/icons/HomeIcon";
import type { ComponentPropsWithRef } from "react";
import "./HomeButton.css";

export interface HomeButtonProps extends ComponentPropsWithRef<'button'>  {
  tooltip: string;
  side?: "top" | "left";
}

export function HomeButton({
  tooltip,
  side = "top",
  ...props
}: HomeButtonProps) {
  return (
    <Tooltip.Provider delay={100}>
      <Tooltip.Root>
        <Tooltip.Trigger className="ui-library-home-button" {...props}>
          <HomeIcon />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} sideOffset={8}>
            <Tooltip.Popup className="ui-library-home-button__tooltip">
              {tooltip}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

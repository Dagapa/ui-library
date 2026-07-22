"use client";

import { Tooltip as BaseTooltip } from "@base-ui/react/tooltip";
import type { ReactElement } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  text: string;
  side?: "top" | "left" | "bottom" | "right";
  children: ReactElement;
}

export function Tooltip({
  text,
  side = "top",
  children,
}: TooltipProps) {
  return (
    <BaseTooltip.Provider delay={100}>
      <BaseTooltip.Root>
        <BaseTooltip.Trigger render={children} />
        <BaseTooltip.Portal>
          <BaseTooltip.Positioner side={side} sideOffset={8}>
            <BaseTooltip.Popup className="ui-library-home-button__tooltip">
              {text}
            </BaseTooltip.Popup>
          </BaseTooltip.Positioner>
        </BaseTooltip.Portal>
      </BaseTooltip.Root>
    </BaseTooltip.Provider>
  );
}

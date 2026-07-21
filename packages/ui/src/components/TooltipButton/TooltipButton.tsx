import { Tooltip } from "@base-ui/react/tooltip";
import HomeIcon from "../../assets/icons/HomeIcon";
import type { ComponentPropsWithRef } from "react";
import "./TooltipButton.css";

export interface TooltipButtonProps extends ComponentPropsWithRef<'button'>  {
  tooltip: string;
  side?: "top" | "left";
}

export function TooltipButton({
  tooltip,
  side = "top",
  ...props
}: TooltipButtonProps) {
  return (
    <Tooltip.Provider delay={100}>
      <Tooltip.Root>
        <Tooltip.Trigger className="ui-library-tooltip__button" {...props}>
          <HomeIcon />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} sideOffset={8}>
            <Tooltip.Popup className="ui-library-tooltip">
              {tooltip}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

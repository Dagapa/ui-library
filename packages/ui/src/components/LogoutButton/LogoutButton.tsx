import { Tooltip } from "@base-ui/react/tooltip";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import type { ComponentPropsWithRef } from "react";
import "./LogoutButton.css";

export interface LogoutButtonProps extends ComponentPropsWithRef<'button'>  {
  tooltip: string;
  side?: "top" | "left";
}

export function LogoutButton({
  tooltip,
  side = "top",
  ...props
}: LogoutButtonProps) {
  return (
    <Tooltip.Provider delay={100}>
      <Tooltip.Root>
        <Tooltip.Trigger className="ui-library-logout-button" {...props}>
          <LogoutIcon />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side={side} sideOffset={8}>
            <Tooltip.Popup className="ui-library-logout-button__tooltip">
              {tooltip}
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

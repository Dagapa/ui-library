import { ComponentPropsWithRef, ReactNode } from "react";
import "./IconButton.css";

export interface IconButtonProps extends ComponentPropsWithRef<"button"> {
  variant?: "main" | "secondary";
  icon: ReactNode;
  rounded?: boolean;
}

export function IconButton({
  icon,
  variant = "main",
  rounded = false,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={`ui-library-icon-button ui-library-icon-button__${variant} ${rounded ? "ui-library-icon-button__rounded" : ""}`}
      {...props}
    >
      {icon}
    </button>
  );
}

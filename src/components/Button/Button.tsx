import React from "react";
import clsx from "clsx";
import s from "./Button.module.scss";

type ButtonType = "submit" | "button" | "reset";
type Variant = "primary" | "secondary" | "upload";

interface ButtonProps {
  type?: ButtonType;
  label?: string;
  children?: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactElement | null;
  iconPosition?: "left" | "right";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const {
    label,
    children,
    className,
    variant,
    icon,
    iconPosition = "left",
    disabled,
    onClick,
  } = props;
  return (
    <button
      className={clsx(s.button, className, {
        [s.primary]: variant === "primary",
        [s.secondary]: variant === "secondary",
        [s.upload]: variant === "upload",
      })}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;

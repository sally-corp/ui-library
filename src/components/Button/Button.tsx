import { FC, MouseEvent, ReactElement, ReactNode } from "react";
import { Icon } from "../Icon";
import * as S from "./Button.styled";

export enum ButtonSize {
  xxs = "xxs",
  xs = "xs",
  s = "s",
  m = "m",
  l = "l",
  xl = "xl",
}

interface ButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  size?: ButtonSize;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  disabled?: boolean;
  active?: boolean;
  type?: "submit" | "button";
}

export enum ButtonVariant {
  Outline = "Outline",
  Filled1 = "Filled1",
  Filled2 = "Filled2",
  Filled3 = "Filled3",
  Text1 = "Text1",
  Text2 = "Text2",
  Text3 = "Text3",
  Text4 = "Text4",
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = ButtonVariant.Outline,
  className,
  onClick,
  size = ButtonSize.s,
  leftIcon,
  disabled,
  rightIcon,
  active,
  type = "button",
  ...rest
}) => {
  return (
    <S.Button
      onClick={onClick}
      $size={size}
      $variant={variant}
      $active={active}
      className={className}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {leftIcon && <Icon>{leftIcon}</Icon>}
      {children}
      {rightIcon && <Icon>{rightIcon}</Icon>}
    </S.Button>
  );
};

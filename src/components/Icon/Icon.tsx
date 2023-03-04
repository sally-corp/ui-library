import { ReactNode } from "react";
import * as S from "./Icon.styled";

export interface IIcon {
  width?: number;
  height?: number;
  size?: number;
  rotate?: number;
  className?: string;
  icon: ReactNode;
}

export const Icon: React.FC<IIcon> = ({
  width,
  height,
  size = 20,
  rotate,
  className,
  icon,
}) => {
  return (
    <S.Wrapper
      $height={height}
      $rotate={rotate}
      $size={size}
      $width={width}
      className={className}
    >
      {icon}
    </S.Wrapper>
  );
};

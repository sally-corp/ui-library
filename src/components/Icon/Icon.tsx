import { ReactNode } from "react";
import * as S from "./Icon.styled";

interface IIcon {
  width?: number;
  height?: number;
  size?: number;
  rotate?: number;
  className?: string;
  children: ReactNode;
}

export const Icon: React.FC<IIcon> = ({
  width,
  height,
  size = 20,
  rotate,
  className,
  children,
}) => {
  return (
    <S.Wrapper
      $height={height}
      $rotate={rotate}
      $size={size}
      $width={width}
      className={className}
    >
      {children}
    </S.Wrapper>
  );
};

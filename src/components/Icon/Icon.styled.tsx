import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div<{
  $width?: number;
  $size?: number;
  $height?: number;
  $rotate?: number;
}>`
  ${({ $width, $size, $height, $rotate }) => css`
    transition: transform 0.3s ease;
    min-width: ${$width || $size}px;
    width: ${$width || $size}px;
    min-height: ${$height || $size}px;
    height: ${$height || $size}px;

    ${$rotate ? `transform: rotate(${$rotate}deg)` : ""}
  `}
`;

import { ReactElement } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Icon } from "../Icon";

enum InputSize {
  xxs = "xxs",
  xs = "xs",
  s = "s",
  m = "m",
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

export const Textarea = styled.textarea<{ $size: InputSize; $error: boolean }>`
  border-radius: 12px;
  padding: 12px 14px;
  resize: none;
  width: 100%;

  height: 320px;
  color: #000000;
  text-overflow: ellipsis;
  border: 1px solid #d0d5dd;

  ${({ $size: size, $error: error }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `};

    ${size === InputSize.s &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
    `};

    ${size === InputSize.m &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;
    `};

    ${error &&
    css`
      border-color: #fda29b;
    `}

    &:focus {
      ${error
        ? css`
            border: 1px solid #fda29b;
            box-shadow: 0 0 0 4px #fee4e2;
          `
        : css`
            box-shadow: 0 0 0 4px #ebecff;
            border: 1px solid #a4bcfd;
          `}

      outline: transparent;
    }
  `}

  &::placeholder {
    color: #667085;
  }

  &:disabled {
    background: #f9fafb;
  }
`;

export const Field = styled.div`
  position: relative;
  font-size: 0;
`;

export const LeftIcon = styled(Icon)`
  position: absolute;
  color: #667085;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const RightIcon = styled(Icon)`
  position: absolute;
  color: #667085;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Input = styled.input<{
  $iconConfig?:
    | {
        leftIcon: ReactElement;
        size?: number;
        width?: number;
        height?: number;
      }
    | {
        rightIcon: ReactElement;
        size?: number;
        width?: number;
        height?: number;
      };
  $size: InputSize;
  $error: boolean;
}>`
  padding: 10px 14px;
  width: 100%;

  color: #000000;
  border-radius: 12px;
  border: 1px solid #d0d5dd;
  text-overflow: ellipsis;

  ${({ $size: size, $error: error }) => css`
    ${size === InputSize.xxs &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;

      padding: 9px;
    `};
    ${size === InputSize.xs &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;

      padding: 11px;
    `};

    ${size === InputSize.s &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;

      padding: 11px;
    `};

    ${size === InputSize.m &&
    css`
      font-weight: 400;
      font-size: 16px;
      line-height: 125%;

      padding: 13px;
    `};

    ${error &&
    css`
      border-color: #fda29b;
    `}

    &:focus {
      ${error
        ? css`
            border: 1px solid #fda29b;
            box-shadow: 0 0 0 4px #fee4e2;
          `
        : css`
            box-shadow: 0 0 0 4px #ebecff;
            border: 1px solid #a4bcfd;
          `}

      outline: transparent;
    }
  `}

  ${({ $iconConfig }) => {
    const width = $iconConfig?.size || $iconConfig?.width || 20;
    if ($iconConfig && "leftIcon" in $iconConfig) {
      return css`
        padding: 10px 10px 10px ${width + 10 + 8}px;
      `;
    }
    if ($iconConfig && "rightIcon" in $iconConfig) {
      return css`
        padding: 10px ${width + 10 + 8}px 10px 10px;
      `;
    }
    return css``;
  }}

  &::placeholder {
    color: #667085;
  }

  &:disabled {
    background: #f9fafb;
  }
`;

export const Label = styled.label<{ $size: InputSize; $hide: boolean }>`
  color: #344054;

  ${({ $size: size, $hide: hide }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 500;
      font-size: 12px;
      line-height: 125%;
    `}

    ${size === InputSize.s &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
    `}

    ${size === InputSize.m &&
    css`
      font-weight: 500;
      font-size: 14px;
      line-height: 140%;
    `}

    ${hide &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
      opacity: 0;
    `}
  `}

  span {
    color: #d92d20;
  }
`;

export const Hint = styled.div<{ $size: InputSize }>`
  color: #475467;

  ${({ $size: size }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
    `}

    ${size === InputSize.s &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}

    ${size === InputSize.m &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}
  `}
`;

export const Error = styled.div<{ $size: InputSize }>`
  color: #d92d20;

  ${({ $size: size }) => css`
    ${size === InputSize.xs &&
    css`
      font-weight: 400;
      font-size: 12px;
      line-height: 125%;
    `}

    ${size === InputSize.s &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}

  ${size === InputSize.m &&
    css`
      font-weight: 400;
      font-size: 14px;
      line-height: 110%;
    `}
  `}
`;

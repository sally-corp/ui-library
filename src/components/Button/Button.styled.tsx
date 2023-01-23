import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonSize, ButtonVariant } from "./Button";

export const Button = styled.button<{
  $variant: ButtonVariant;
  $size: ButtonSize;
  $active?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: transparent;
  column-gap: 8px;
  border-radius: 8px;

  transition: background-color 0.3s ease, opacity 0.3s ease,
    border-color 0.3s ease, box-shadow 0.3s ease;

  ${({ $variant, $size, $active }) => css`
    ${$variant === ButtonVariant.Outline &&
    css`
      color: #344054;
      background-color: #fff;
      border: 1px solid #d0d5dd;

      &:hover {
        background-color: #f9fafb;
      }
      ${$active &&
      css`
        background-color: #f9fafb;
      `}

      &:focus, 
      &:active {
        box-shadow: 0 0 0 4px #f2f4f7;
      }
    `}

    ${$variant === ButtonVariant.Filled1 &&
    css`
      color: #ffffff;
      background-color: #2d3282;
      border: 1px solid #2d3282;

      &:hover {
        background-color: #2d31a6;
      }
      ${$active &&
      css`
        background-color: #2d31a6;
      `}

      &:focus,      
      &:active {
        box-shadow: 0 0 0 4px #ebecff;
      }
    `}

    ${$variant === ButtonVariant.Filled2 &&
    css`
      color: #2d31a6;
      background-color: #eef4ff;
      border: 1px solid #eef4ff;

      &:hover {
        background-color: #e0eaff;
        border-color: #e0eaff;
      }
      ${$active &&
      css`
        background-color: #e0eaff;
        border-color: #e0eaff;
      `}

      &:focus,
      &:active {
        box-shadow: 0 0 0 4px #ebecff;
      }
    `}

    ${$variant === ButtonVariant.Filled3 &&
    css`
      color: #ffffff;
      background-color: #d92d20;
      border: 1px solid #d92d20;

      &:hover {
        background-color: #b42318;
        border-color: #b42318;
      }
      ${$active &&
      css`
        background-color: #b42318;
        border-color: #b42318;
      `}

      &:focus,
      &:active {
        box-shadow: 0 0 0 4px #fee4e2;
      }
    `}

    ${$variant === ButtonVariant.Text1 &&
    css`
      color: #344054;

      &:hover {
        background-color: #f9fafb;
      }
      ${$active &&
      css`
        background-color: #f9fafb;
      `}

      &:focus,
      &:active {
        box-shadow: 0 0 0 4px #f2f4f7;
      }
    `}

    ${$variant === ButtonVariant.Text2 &&
    css`
      color: #2d31a6;

      &:hover {
        background-color: #eef4ff;
      }
      ${$active &&
      css`
        background-color: #eef4ff;
      `}

      &:focus,
      &:active {
        box-shadow: 0 0 0 4px #f2f4f7;
      }
    `}

    ${$variant === ButtonVariant.Text3 &&
    css`
      color: #344054;

      &:hover {
        color: #000000;
      }

      &:focus,
      &:active {
        box-shadow: 0 0 0 4px #f2f4f7;
      }
    `}

    ${$variant === ButtonVariant.Text4 &&
    css`
      color: #2d31a6;

      &:focus,
      &:active {
        box-shadow: 0 0 0 4px #f2f4f7;
      }
    `}

    ${$size === ButtonSize.xxs &&
    css`
      padding: 0;
      font-weight: 600;
      font-size: 14px;
      line-height: 110%;
    `}

    ${$size === ButtonSize.xs &&
    css`
      padding: 7px 13px;
      font-weight: 600;
      font-size: 12px;
      line-height: 125%;
    `}

    ${$size === ButtonSize.s &&
    css`
      padding: 9px 15px;
      font-weight: 600;
      font-size: 14px;
      line-height: 110%;
    `}

    ${$size === ButtonSize.m &&
    css`
      padding: 14px 17px;
      font-weight: 600;
      font-size: 14px;
      line-height: 110%;
    `}

    ${$size === ButtonSize.l &&
    css`
      padding: 14px 19px;
      font-weight: 600;
      font-size: 16px;
      line-height: 125%;
    `}

    ${$size === ButtonSize.xl &&
    css`
      padding: 17px 27px;
      font-weight: 600;
      font-size: 16px;
      line-height: 125%;
      column-gap: 12px;
    `}
  `}

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

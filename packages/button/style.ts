import { css } from "emotion";
import {
  green,
  greenDarken1,
  greenDarken2,
  greyLight,
  greyLightDarken1,
  greyLightDarken2,
  purple,
  purpleDarken1,
  purpleDarken2,
  red,
  redDarken1,
  redDarken2,
  textColorPrimary,
  white
} from "../design-tokens/build/js/designTokens";
import { isHexDark } from "../shared/styles/color";

// TODO: write a util for calculating color brightness
// and use that to pick a text color
const getFilledButtonStyles = (
  baseColor: string,
  hoverColor: string,
  activeColor: string
) => css`
  background-color: ${baseColor};
  color: ${isHexDark(baseColor) ? white : textColorPrimary};
  position: relative;

  &:hover {
    background-color: ${hoverColor};
  }

  &:focus {
    background-color: ${hoverColor};
    outline: none;

    &:after {
      border: 2px solid ${hoverColor};
      border-radius: 6px;
      bottom: -3px;
      content: "";
      left: -3px;
      position: absolute;
      right: -3px;
      top: -3px;
    }
  }

  &:active {
    background-color: ${activeColor};
  }
`;

// TODO: make border-radius a design token
export const buttonBase = css`
  border-radius: 4px;
  cursor: pointer;
`;

export const button = {
  primary: getFilledButtonStyles(purple, purpleDarken1, purpleDarken2),
  secondary: css`
    color: ${purple};
    &:hover {
      color: ${purpleDarken1};
    }
    &:active {
      color: ${purpleDarken2};
    }
  `,
  standard: getFilledButtonStyles(
    greyLight,
    greyLightDarken1,
    greyLightDarken2
  ),
  success: getFilledButtonStyles(green, greenDarken1, greenDarken2),
  danger: getFilledButtonStyles(red, redDarken1, redDarken2)
};

import { css } from "react-emotion";
import { fontSizes } from "../../typography";

type FontSizes = keyof typeof fontSizes;

export const textSize = (size: FontSizes) => css`
  font-size: ${fontSizes[size]};
`;

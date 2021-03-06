import { css } from "react-emotion";
import { boxSpacing, BoxSides, SpaceSizes } from "./modifierUtils";

export const padding = (side: BoxSides, spaceSize?: SpaceSizes) => {
  return css`
    ${boxSpacing("padding", side, spaceSize)};
  `;
};

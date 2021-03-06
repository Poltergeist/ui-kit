import { css } from "react-emotion";

export const display = (
  displayType:
    | "block"
    | "contents"
    | "flex"
    | "grid"
    | "inline"
    | "inline-block"
    | "inline-flex"
    | "inline-grid"
    | "inline-table"
    | "none"
    | "table"
    | "table-cell"
) => {
  return css`
    display: ${displayType} !important;
  `;
};

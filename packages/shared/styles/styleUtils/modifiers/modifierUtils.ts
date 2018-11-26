import {
  spacingXXS,
  spacingXS,
  spacingS,
  spacingM,
  spacingL,
  spacingXL,
  spacingXXL
} from "../../spacing";

export type BoxSides =
  | "all"
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "horiz"
  | "vert";
export type SpaceSizes = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "none";

const spaceSizes = {
  xxs: spacingXXS,
  xs: spacingXS,
  s: spacingS,
  m: spacingM,
  l: spacingL,
  xl: spacingXL,
  xxl: spacingXXL,
  none: 0
};

// TODO: add ability to use "horizontal" and "vertical"
// to do left/right or top/bottom padding
export const boxSpacing = (
  property: "margin" | "padding",
  side: BoxSides,
  spaceSize?: SpaceSizes
) => {
  const size = spaceSize || "m";

  switch (side) {
    case "all":
      return `${property}: ${spaceSizes[size]} !important;`;
      break;
    case "horiz":
      return `
        ${property}-left: ${spaceSizes[size]} !important;
        ${property}-right: ${spaceSizes[size]} !important;
      `;
      break;
    case "vert":
      return `
        ${property}-bottom: ${spaceSizes[size]} !important;
        ${property}-top: ${spaceSizes[size]} !important;
      `;
      break;
    default:
      return `${property}-${side}: ${spaceSizes[size]} !important;`;
  }
  // if (side === "all") {
  //   return `${property}: ${spaceSizes[size]} !important;`;
  // } else {
  //   return `${property}-${side}: ${spaceSizes[size]} !important;`;
  // }
};

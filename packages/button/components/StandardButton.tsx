import * as React from "react";
import { default as ButtonBase, ButtonProps } from "./ButtonBase";

const StandardButton = (props: ButtonProps) => (
  <ButtonBase appearance="standard" {...props} />
);

export default StandardButton;

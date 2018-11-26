import * as React from "react";
import { default as ButtonBase, ButtonProps } from "./ButtonBase";

const SuccessButton = (props: ButtonProps) => (
  <ButtonBase appearance="success" {...props} />
);

export default SuccessButton;

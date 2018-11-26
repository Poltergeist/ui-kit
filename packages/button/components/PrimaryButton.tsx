import * as React from "react";
import { default as ButtonBase, ButtonProps } from "./ButtonBase";

const PrimaryButton = (props: ButtonProps) => (
  <ButtonBase appearance="primary" {...props} />
);

export default PrimaryButton;

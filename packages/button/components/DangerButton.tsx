import * as React from "react";
import { default as ButtonBase, ButtonProps } from "./ButtonBase";

const DangerButton = (props: ButtonProps) => (
  <ButtonBase appearance="danger" {...props} />
);

export default DangerButton;

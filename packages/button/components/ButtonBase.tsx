import * as React from "react";
import { cx } from "emotion";
import {
  buttonReset,
  padding,
  textWeight
} from "../../shared/styles/styleUtils";
import { buttonBase, button } from "../style";

//
// TODO: make the first few props they're own type that is
// used as a type in other button components.
//
// Then, extend that type with "appearance" for ButtonBaseProps
//
export interface ButtonProps {
  children: React.ReactNode | string;
  iconStart?: React.ReactElement<HTMLElement>;
  iconEnd?: React.ReactElement<HTMLElement>;
  isProcessing?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
}

export interface ButtonBaseProps extends ButtonProps {
  className?: string;
  appearance: "primary" | "secondary" | "standard" | "danger" | "success";
}

class ButtonBase extends React.PureComponent<ButtonBaseProps, {}> {
  public render() {
    const { children, appearance, className } = this.props;

    return (
      <button
        className={cx(
          buttonReset,
          buttonBase,
          button[appearance],
          padding("horiz", "m"),
          padding("vert", "xs"),
          textWeight("medium"),
          className
        )}
      >
        {children}
      </button>
    );
  }
}

export default ButtonBase;

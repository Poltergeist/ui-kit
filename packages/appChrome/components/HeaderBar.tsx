import * as React from "react";
import { cx } from "emotion";
import {
  background,
  darkMode,
  flex,
  padding
} from "../../shared/styles/styleUtils";
import { headerBar, appChromeInsetContent } from "../style";

export interface HeaderProps {
  backgroundColor?: string;
  children: React.ReactElement<HTMLElement> | string;
  paddingBottom?:
    | "xxs"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "none"
    | undefined;
  paddingLeft?:
    | "xxs"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "none"
    | undefined;
  paddingRight?:
    | "xxs"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "none"
    | undefined;
  paddingTop?:
    | "xxs"
    | "xs"
    | "s"
    | "m"
    | "l"
    | "xl"
    | "xxl"
    | "none"
    | undefined;
}

class Header extends React.PureComponent<HeaderProps, {}> {
  public render() {
    const {
      children,
      backgroundColor,
      paddingBottom = "xs",
      paddingLeft = "l",
      paddingRight = "l",
      paddingTop = "xs"
    } = this.props;

    return (
      <div
        className={cx(
          headerBar,
          darkMode,
          appChromeInsetContent,
          flex({ align: "center" }),
          padding("bottom", paddingBottom),
          padding("left", paddingLeft),
          padding("right", paddingRight),
          padding("top", paddingTop),
          backgroundColor ? background(backgroundColor) : null
        )}
      >
        {children}
      </div>
    );
  }
}

export default Header;

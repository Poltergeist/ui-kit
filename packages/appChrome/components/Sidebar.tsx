import * as React from "react";
import { cx } from "emotion";
import {
  background,
  darkMode,
  padding,
  width
} from "../../shared/styles/styleUtils";
import { sidebar, sidebarAnimator } from "../style";

export interface SidebarProps {
  backgroundColor?: string;
  children: React.ReactElement<HTMLElement> | string;
  isOpen: boolean;
  onOpen?: () => void;
  onClose?: () => void;
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
  sidebarWidth?: string;
}

class Sidebar extends React.PureComponent<SidebarProps, {}> {
  public componentWillReceiveProps(nextProps: SidebarProps) {
    const { onOpen, onClose } = this.props;

    if (nextProps.isOpen && onOpen) {
      onOpen();
    } else if (!nextProps.isOpen && onClose) {
      onClose();
    }
  }

  public render() {
    const {
      backgroundColor,
      children,
      isOpen,
      paddingLeft,
      paddingRight,
      sidebarWidth
    } = this.props;
    const navClassNames = cx(
      sidebar,
      darkMode,
      backgroundColor ? background(backgroundColor) : null,
      sidebarWidth ? width(sidebarWidth) : null
    );

    const divClassNames = cx(
      sidebarAnimator(isOpen),
      padding("left", paddingLeft || "none"),
      padding("right", paddingRight || "none"),
      sidebarWidth ? width(sidebarWidth) : null
    );

    return (
      <div className={divClassNames}>
        <nav className={navClassNames}>{children}</nav>
      </div>
    );
  }
}

export default Sidebar;

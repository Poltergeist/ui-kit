import * as React from "react";
import { cx } from "emotion";
import { appChromeInsetContent, sidebarNavItem } from "../style";
import Clickable from "../../clickable/components/clickable";
import { tintContentPrimary, padding } from "../../shared/styles/styleUtils";

export interface SidebarItemProps {
  children?: React.ReactElement<HTMLElement> | string;
  icon?: React.ReactElement<HTMLElement> | string;
  isActive?: boolean;
  onClick: (event?: React.SyntheticEvent<HTMLElement>) => void;
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

class SidebarItem extends React.PureComponent<SidebarItemProps, {}> {
  public render() {
    const {
      children,
      isActive,
      onClick,
      paddingTop,
      paddingBottom
    } = this.props;
    const classNames = cx(
      appChromeInsetContent,
      sidebarNavItem(isActive),
      {
        [tintContentPrimary]: isActive
      },
      padding("top", paddingTop || "xs"),
      padding("bottom", paddingBottom || "xs")
    );

    return (
      <Clickable action={onClick} tabIndex={0}>
        <li className={classNames}>{children}</li>
      </Clickable>
    );
  }
}

export default SidebarItem;

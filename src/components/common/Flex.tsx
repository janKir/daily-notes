import { css, cx } from "@linaria/core";
import React from "react";
import { fixCssCustomProperty } from "../../utils/fixCssCustomPropertyType";

export interface FlexProps {
  row?: boolean;
  align?: "flex-start" | "flex-end" | "center" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "stretch"
    | "space-between"
    | "space-around"
    | "space-evenly";
  grow?: true | number;
  basis?: string | 0;
  className?: string;
  tag?: keyof React.JSX.IntrinsicElements;
  role?: React.AriaRole;
}

export const Flex: React.FC<React.PropsWithChildren<FlexProps>> = ({
  row,
  align = "flex-start",
  justify = "flex-start",
  grow,
  basis,
  className,
  tag: HtmlTag = "div",
  role,
  children,
}) => {
  return (
    <HtmlTag
      className={cx(divStyle, className)}
      style={fixCssCustomProperty({
        "--direction": row ? "row" : "column",
        "--align": align,
        "--justify": justify,
        "--grow": grow === true ? 1 : grow ?? "initial",
        "--basis": basis ?? "initial",
      })}
      role={role}
    >
      {children}
    </HtmlTag>
  );
};

const divStyle = css`
  display: flex;
  flex-direction: var(--direction);
  align-items: var(--align);
  justify-content: var(--justify);
  flex-grow: var(--grow);
  flex-basis: var(--basis);
`;

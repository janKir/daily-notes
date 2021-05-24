import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import { fixCssCustomProperty } from "../../utils/fixCssCustomPropertyType";

import "./AnimatedSlideChange.css";

export interface AnimatedSlideChangeProps {
  direction: "ltr" | "rtl";
  changeKey: string;
  translate?: string;
}

export const AnimatedSlideChange: React.FC<AnimatedSlideChangeProps> = ({
  direction,
  changeKey,
  translate = "200px",
  children,
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  return (
    <SwitchTransition>
      <CSSTransition
        key={changeKey}
        addEndListener={(done: () => void) => {
          ref.current!.addEventListener("transitionend", done, false);
        }}
        classNames="fade"
        nodeRef={ref}
      >
        <div
          ref={ref}
          style={fixCssCustomProperty({
            "--enter-translate":
              direction === "rtl" ? `-${translate}` : translate,
            "--exit-translate":
              direction === "rtl" ? translate : `-${translate}`,
            "--duration": "100ms",
          })}
        >
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

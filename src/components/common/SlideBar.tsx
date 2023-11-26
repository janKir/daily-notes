import React from "react";
import { css } from "@linaria/core";
import { AnimatedSlideChange } from "./AnimatedSlideChange";
import { Flex } from "./Flex";

export interface SlideBarItemProps {
  value: number;
  prevValue: number;
  nextValue: number;
  onChange: (value: number) => void;
}

export interface SlideBarProps {
  value: number;
  prevValue: number;
  nextValue: number;
  onChange: (value: number) => void;
  current: React.ComponentType<SlideBarItemProps>;
  prev: React.ComponentType<SlideBarItemProps>;
  next: React.ComponentType<SlideBarItemProps>;
  sub: React.ComponentType<SlideBarItemProps>;
}

export const SlideBar: React.FC<SlideBarProps> = ({
  value,
  prevValue,
  nextValue,
  onChange,
  current: Current,
  prev: Prev,
  next: Next,
  sub: Sub,
}) => {
  const valueRef = React.useRef(value);
  const [transitionCounter, setTransitionCounter] = React.useState({
    ltr: 0,
    rtl: 0,
  });

  React.useEffect(() => {
    if (value !== valueRef.current) {
      setTransitionCounter((prev) =>
        value > valueRef.current
          ? { ltr: prev.ltr + 1, rtl: prev.rtl }
          : { ltr: prev.ltr, rtl: prev.rtl + 1 },
      );
      valueRef.current = value;
    }
  }, [value]);

  return (
    <div className={containerStyle}>
      <AnimatedSlideChange
        direction="ltr"
        changeKey={transitionCounter.ltr.toString()}
      >
        <AnimatedSlideChange
          direction="rtl"
          changeKey={transitionCounter.rtl.toString()}
        >
          <Flex align="stretch" tag="nav" className={barStyle}>
            <Flex row justify="space-evenly" align="center">
              <Flex row basis={0} grow justify="center" align="center">
                <Prev
                  value={value}
                  prevValue={prevValue}
                  nextValue={nextValue}
                  onChange={onChange}
                />
              </Flex>

              <Flex row basis={0} grow={2} justify="center">
                <Current
                  value={value}
                  prevValue={prevValue}
                  nextValue={nextValue}
                  onChange={onChange}
                />
              </Flex>
              <Flex row basis={0} grow justify="center">
                <Next
                  value={value}
                  prevValue={prevValue}
                  nextValue={nextValue}
                  onChange={onChange}
                />
              </Flex>
            </Flex>

            <Flex row justify="center">
              <Sub
                value={value}
                prevValue={prevValue}
                nextValue={nextValue}
                onChange={onChange}
              />
            </Flex>
          </Flex>
        </AnimatedSlideChange>
      </AnimatedSlideChange>
    </div>
  );
};

const barStyle = css`
  margin-bottom: 16px;
`;

const containerStyle = css`
  overflow: hidden;
`;

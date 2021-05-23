import React from "react";

export interface HoverProps {
  children: (hover: boolean) => React.ReactNode;
}

export const Hover: React.FC<HoverProps> = ({ children }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children(hover)}
    </div>
  );
};

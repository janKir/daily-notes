import React from "react";
import { useAppContext } from "../../contexts/AppContext";
import { MdInput } from "../common/MdInput";

export interface InputContainerProps {
  dateKey: string;
}

export const InputContainer: React.FC<InputContainerProps> = ({ dateKey }) => {
  const { notes, setNotes } = useAppContext();

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] =
    React.useState<undefined | number>(undefined);

  React.useLayoutEffect(() => {
    const height = containerRef.current?.clientHeight;
    if (height !== containerHeight) {
      setContainerHeight(height);
    }
  }, [containerHeight]);

  const [mode, setMode] = React.useState<"write" | "preview">("write");

  return (
    <div
      style={{
        flexBasis: 0,
        flexGrow: 2,
        marginLeft: 16,
        marginRight: 16,
      }}
      ref={containerRef}
    >
      <MdInput
        value={notes[dateKey] ?? ""}
        onChangeText={(value) =>
          setNotes((prevNotes) => ({ ...prevNotes, [dateKey]: value }))
        }
        mode={mode}
        onSetMode={setMode}
        height={containerHeight}
        key={containerHeight} // force re-mount to pick up height changes
      />
    </div>
  );
};

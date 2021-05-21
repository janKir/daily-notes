import React from "react";
import { colors } from "../styles/colors";

export interface NoteInputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
}

export const NoteInput: React.FC<NoteInputProps> = ({
  value,
  onChangeText,
  placeholder,
}) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChangeText(e.target.value)}
      placeholder={placeholder}
      style={{
        flexGrow: 1,
        borderColor: colors.grayX11Gray,
        borderStyle: "solid",
        borderRadius: 2,
        resize: "none",
        outline: "none",
        fontFamily: "sans-serif",
        padding: 10,
      }}
    />
  );
};

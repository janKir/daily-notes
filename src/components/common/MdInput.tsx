import React from "react";
import ReactMde from "@trevor-immunefi/react-mde";
import ReactMarkdown from "react-markdown";
import "@trevor-immunefi/react-mde/lib/styles/css/react-mde-all.css";

export interface MdInputProps {
  value: string;
  onChangeText: (value: string) => void;
  mode: "write" | "preview";
  onSetMode: (mode: "write" | "preview") => void;
}

export const MdInput: React.FC<MdInputProps> = ({
  value,
  onChangeText,
  mode,
  onSetMode,
}) => {
  return (
    <ReactMde
      value={value}
      onChange={onChangeText}
      selectedTab={mode}
      onTabChange={onSetMode}
      generateMarkdownPreview={(markdown) =>
        Promise.resolve(<ReactMarkdown>{markdown}</ReactMarkdown>)
      }
      minEditorHeight={500}
      minPreviewHeight={500}
    />
  );
};

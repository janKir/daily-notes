import React from "react";

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface FormattedInputProps<T>
  extends Omit<NativeInputProps, "value" | "onChange"> {
  value: T;
  onChange?: (value: T) => void;
  format: (value: T) => string;
  parse: (value: string) => T;
}

export function FormattedInput<T>({
  value,
  onChange,
  format,
  parse,
  onFocus,
  onBlur,
  ...inputProps
}: FormattedInputProps<T>): React.ReactElement {
  const [inputValue, setInputValue] = React.useState(format(value));
  const [isFocused, setIsFocused] = React.useState(false);

  React.useEffect(() => {
    if (!isFocused) {
      setInputValue(format(value));
    }
  }, [isFocused, value, format]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => {
        const v = parse(e.target.value);
        setInputValue(e.target.value);
        onChange?.(v);
      }}
      onFocus={(e) => {
        setIsFocused(true);
        onFocus?.(e);
      }}
      onBlur={(e) => {
        const v = parse(e.target.value);
        setInputValue(format(v));
        setIsFocused(false);
        onBlur?.(e);
      }}
      {...inputProps}
    />
  );
}

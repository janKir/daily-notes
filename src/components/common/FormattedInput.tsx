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
  onBlur,
  ...inputProps
}: FormattedInputProps<T>): React.ReactElement {
  const [inputValue, setInputValue] = React.useState(format(value));

  React.useEffect(() => {
    setInputValue(format(value));
  }, [value, format]);

  return (
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      onBlur={(e) => {
        const v = parse(e.target.value);
        setInputValue(format(v));
        onChange?.(v);
        onBlur?.(e);
      }}
      {...inputProps}
    />
  );
}

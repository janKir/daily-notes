export function optionalCall<T, U>(
  fn: (arg: T) => U,
  fallback: U,
): (arg: T | null | undefined) => U {
  return (arg) => {
    if (arg !== undefined && arg !== null) {
      return fn(arg);
    }
    return fallback;
  };
}

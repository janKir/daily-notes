type AnyCssProperties = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop in any]: any;
};

export function fixCssCustomProperty(
  props: AnyCssProperties
): AnyCssProperties {
  return props;
}

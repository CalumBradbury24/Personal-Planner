const pageBreakpoints = {
  extraSmall: "320px",
  small: "640px",
  medium: "768px",
  large: "1024px",
  extraLarge: "1280px",
  "2xl": "1536px",
};

export const devices = {
  extraSmall: `(max-width: ${pageBreakpoints.extraSmall})`,
  small: `(max-width: ${pageBreakpoints.small})`,
  medium: `(max-width: ${pageBreakpoints.medium})`,
  large: `(max-width: ${pageBreakpoints.large})`,
  extraLarge: `(max-width: ${pageBreakpoints.xl})`,
  "2xl": `(max-width: ${pageBreakpoints["2xl"]})`,
};

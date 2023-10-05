import { DefaultTheme } from "styled-components";
import { createStyledBreakpointsTheme } from "styled-breakpoints";

export const breakpoints = {
  xxs: '361px', // mobile minimum
  xs: '481px', // mobile maximum
  sm: '576px', // tablets
  md: '769px', // Laptop small screen
  lg: '1025px', // Laptop large screen
  xl: '1201px', // TV
  xxl: '1401px', // Extra large screens
} as const;

export const primaryTheme = {
  fonts: ["sans-serif", "Lato"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em"
  }
} as const;

export const theme: DefaultTheme = {
  ...primaryTheme,
  ...createStyledBreakpointsTheme({
    breakpoints,
  }),
};

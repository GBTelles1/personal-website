import { ThemeProvider as Provider } from "styled-components";
import { theme } from "./theme";

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <Provider theme={theme}>{children}</Provider>
);

import React from "react";
import { ThemeOptions } from "./createTheme";

export interface ThemeProviderProps<Theme = ThemeOptions> {
  children?: React.ReactNode;
  theme: Theme;
}

export const ThemeContext = React.createContext<any>({});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme,
  ...props
}) => {
  return (
    <ThemeContext.Provider value={theme}>
      {props.children}
    </ThemeContext.Provider>
  );
};

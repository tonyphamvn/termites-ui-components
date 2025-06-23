import {
  error,
  info,
  primary,
  secondary,
  success,
  warning,
} from "../definitions/Color";

export interface Palette {
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
}

export interface PaletteColor {
  light?: string;
  main: string;
  dark?: string;
  hovered?: string;
  contrastText?: string;
}

export interface ZIndex {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
  fab: number;
}

export type ZIndexOptions = Partial<ZIndex>;

export interface Theme {
  mode?: "dark" | "light";
  palette?: Palette;
  breakpoints?: BreakpointsOptions;
}

export interface ThemeOptions {
  mode?: "dark" | "light";
  palette?: Palette;
  breakpoints?: BreakpointsOptions;
}

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export interface BreakpointsOptions {
  keys: Breakpoint[];

  values: { [key in Breakpoint]: number };

  up?: (key: Breakpoint | number) => string;

  down?: (key: Breakpoint | number) => string;

  between?: (start: Breakpoint | number, end: Breakpoint | number) => string;

  only?: (key: Breakpoint) => string;

  not?: (key: Breakpoint) => string;

  unit?: string | undefined;
}

const defaultThemeLight: ThemeOptions = {
  mode: "light",
  palette: {
    primary: primary,
    secondary: secondary,
    error: error,
    warning: warning,
    info: info,
    success: success,
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

const defaultThemeDark: ThemeOptions = {
  mode: "dark",
  palette: {
    primary: primary,
    secondary: secondary,
    error: error,
    warning: warning,
    info: info,
    success: success,
  },
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
};

export const createTheme = (theme?: ThemeOptions) => {
  if (theme) {
    switch (theme.mode) {
      case "light":
        return { ...defaultThemeLight, ...theme };

      case "dark":
        return { ...defaultThemeDark, ...theme };

      default:
        return { ...defaultThemeLight, ...theme };
    }
  }

  return defaultThemeLight;
};

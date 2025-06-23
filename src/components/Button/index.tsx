import React, { CSSProperties, useContext } from "react";
import { PaletteColor, Theme, ThemeContext } from "../../themes";
import type * as CSS from "csstype";

/**
 * Map of all CSS pseudo selectors (`:hover`, `:focus`, ...).
 */
export type CSSPseudoSelectorProps<Theme extends object = {}> = {
  [K in CSS.Pseudos]?:
    | ((theme: Theme) => SystemStyleObject<Theme>)
    | SystemStyleObject<Theme>;
};

export type StandardCSSProperties = CSS.PropertiesFallback<number | string>;

export interface AllSystemCSSProperties extends StandardCSSProperties {}

export type SystemCssProperties<Theme extends object = {}> = {
  [K in keyof AllSystemCSSProperties]: SystemStyleObject<Theme>;
};

export type SystemStyleObject<Theme extends object = {}> =
  | SystemCssProperties<Theme>
  | CSSPseudoSelectorProps;

/**
 * The `SxProps` can be either object or function
 */
export type SxProps<Theme extends object = {}> =
  | SystemStyleObject<Theme>
  | ((theme: Theme) => SystemStyleObject<Theme>)
  | ReadonlyArray<
      | boolean
      | SystemStyleObject<Theme>
      | ((theme: Theme) => SystemStyleObject<Theme>)
    >;
export interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    "type" | "size" | "color" | "style" | "label"
  > {
  /**
   * What type to use
   */
  type?: ButtonTypes;

  /**
   * What variant to use
   */
  variant?: ButtonVariantTypes;

  /**
   * What background color to use
   */
  color?: ButtonColorTypes;

  /**
   * Custom style to use
   */
  style?: SxProps;

  /**
   * How large should the button be?
   */
  size?: ButtonSizeTypes;

  /**
   * Button contents
   */
  label?: string;

  /**
   * Start Icon Button
   */
  startIcon?: React.ReactElement;

  /**
   * End Icon Button
   */
  endIcon?: React.ReactElement;
}

export type ButtonColorTypes =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "success"
  | "info";

export type ButtonVariantTypes = "default" | "contained" | "outlined";

export type ButtonTypes = "button" | "reset" | "submit";

export type ButtonSizeTypes = "small" | "medium" | "large";

const getVariantStyles = (
  variant: ButtonVariantTypes,
  color: ButtonColorTypes,
  theme: Theme
): CSSProperties => {
  const currentColor = getColorStyles(color, theme);

  if (variant === "contained") {
    return {
      color: "white",
      backgroundColor: currentColor?.main,
    };
  }

  if (variant === "outlined") {
    return {
      color: currentColor?.main,
      backgroundColor: "transparent",
      border: `1px solid ${currentColor?.main}`,
    };
  }

  return {
    backgroundColor: "transparent",
    color: currentColor?.main,
  };
};

const getColorStyles = (
  color: ButtonColorTypes,
  theme: Theme
): PaletteColor | undefined => {
  switch (color) {
    case "primary":
      return theme.palette?.primary;

    case "secondary":
      return theme.palette?.secondary;

    case "error":
      return theme.palette?.error;

    case "warning":
      return theme.palette?.warning;

    case "info":
      return theme.palette?.info;

    case "success":
      return theme.palette?.success;

    default:
      return theme.palette?.info;
  }
};

const getSizeStyles = (size: string): CSSProperties => {
  switch (size) {
    case "small":
      return {
        fontSize: "12px",
        padding: "6px 12px",
      };

    case "medium":
      return {
        fontSize: "14px",
        padding: "8px 16px",
      };

    case "large":
      return {
        fontSize: "16px",
        padding: "10px 22px",
      };

    default:
      return {
        fontSize: "12px",
        padding: "8px 12px",
      };
  }
};

const css = (
  theme: Theme,
  color: ButtonColorTypes,
  variant: ButtonVariantTypes
) => `
  .TermitesButton {
    font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0.3rem;
    cursor: pointer;
    display: inline-flex;
    line-height: 1;
    align-items: center;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
  }
  .TermitesButton:hover {  
    background-color: ${
      variant === "contained"
        ? theme.palette![color].hovered
        : "rgba(25, 118, 210, 0.04)"
    }!important;
  }
  .TermitesButton:active {
    background-color: ${
      variant === "default"
        ? "rgba(25, 118, 210, 0.2)"
        : theme.mode === "light"
        ? theme.palette![color].light
        : theme.palette![color].dark
    }!important;
  }
  .TermitesButton-disabled {
    background-color: rgba(19, 1, 1, 0.3)!important;
    color: rgba(255, 255, 255, 0.3);
    border-color: rgba(195, 195, 195, 0.3);
    cursor: auto;
  }
  .TermitesButton-disabled:hover {
    background-color: rgba(19, 1, 1, 0.3)!important;
  }
`;

const pseudos: { [P in CSS.SimplePseudos]?: CSS.Properties } = {
  ":hover": {
    color: "#000",
  },
};

const styles: CSS.Properties = {
  color: "red",
  margin: "1em",
  ...pseudos,
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  variant = "default",
  color = "primary",
  size = "medium",
  style = {},
  label = "",
  startIcon,
  endIcon,
  ...props
}: ButtonProps) => {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={`TermitesButton${
        props.disabled ? " TermitesButton-disabled" : ""
      }`}
      // style={{
      //   ...getSizeStyles(size),
      //   ...getVariantStyles(variant, color, theme),
      //   ...style,
      // }}
      style={styles}
      {...props}>
      {startIcon && (
        <div style={{ height: "24px", width: "24px" }}>{startIcon}</div>
      )}
      {label && (
        <div
          style={{
            marginLeft: startIcon ? "8px" : 0,
            marginRight: endIcon ? "8px" : 0,
            height: "24px",
            display: "inline-flex",
            alignItems: "center",
          }}>
          {label}
        </div>
      )}
      {endIcon && (
        <div style={{ height: "24px", width: "24px" }}>{endIcon}</div>
      )}
      <style>{css(theme, color, variant)}</style>
    </button>
  );
};

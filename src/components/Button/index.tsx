import React, { CSSProperties, useContext } from "react";
import { Theme, ThemeContext } from "../../themes";

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
  style?: CSSProperties;

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

const getColorStyles = (color: string, theme: Theme): CSSProperties => {
  switch (color) {
    case "primary":
      return {
        color: "white",
        backgroundColor: theme.palette?.primary.main,
      };

    case "secondary":
      return {
        color: "white",
        backgroundColor: theme.palette?.secondary.main,
      };

    case "error":
      return {
        color: "white",
        backgroundColor: theme.palette?.error.main,
      };

    case "warning":
      return {
        color: "white",
        backgroundColor: theme.palette?.warning.main,
      };

    case "info":
      return {
        color: "white",
        backgroundColor: theme.palette?.info.main,
      };

    case "success":
      return {
        color: "white",
        backgroundColor: theme.palette?.success.main,
      };

    default:
      return {
        color: "white",
        backgroundColor: theme.palette?.info.main,
      };
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

const getVariantStyles = (
  theme: Theme,
  variant?: "default" | "contained" | "outlined"
): CSSProperties => {
  switch (variant) {
    case "default":
      return {
        color: "#333",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      };

    default:
      return {
        color: "#333",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      };
  }
};

const css = (theme: Theme, color?: ButtonColorTypes) => `
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
      color && theme.palette ? theme.palette[color].hovered : "inherit"
    }!important;
  }
  .TermitesButton:active {
    background-color: ${
      color && theme.palette
        ? theme.mode === "light"
          ? theme.palette[color].light
          : theme.palette[color].dark
        : "inherit"
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

/**
 * Primary UI component for user interaction
 */
export const Button = ({
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
      style={{
        ...getSizeStyles(size),
        ...getColorStyles(color, theme),
        ...style,
      }}
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
      <style>{css(theme, color)}</style>
    </button>
  );
};

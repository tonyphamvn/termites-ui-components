import React from "react";

export interface ButtonProps
  extends Omit<
    React.HTMLProps<HTMLButtonElement>,
    "type" | "size" | "color" | "style" | "label"
  > {
  /**
   * What type to use
   */
  type?: "button" | "reset" | "submit" | undefined;
  /**
   * Is this the principal call to action on the page?
   */
  color?: "primary" | "secondary";
  /**
   * What background color to use
   */
  style?: object;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large" | string;
  /**
   * Button contents
   */
  label?: string;
}

const buttonStyles = {
  fontFamily: `Nunito Sans, Helvetica Neue, Helvetica, Arial, sans-serif`,
  fontWeight: 700,
  border: 0,
  borderRadius: "3em",
  cursor: "pointer",
  display: "inline-block",
  lineHeight: 1,
};

const getColorStyles = (color: string) => {
  switch (color) {
    case "primary":
      return {
        color: "white",
        backgroundColor: "#1ea7fd",
      };

    case "secondary":
      return {
        color: "#333",
        backgroundColor: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
      };

    default:
      return {
        color: "white",
        backgroundColor: "#1ea7fd",
      };
  }
};

const getSizeStyles = (size: string) => {
  switch (size) {
    case "small":
      return {
        fontSize: "12px",
        padding: "10px 16px",
      };

    case "medium":
      return {
        fontSize: "14px",
        padding: "11px 20px",
      };

    case "large":
      return {
        fontSize: "16px",
        padding: "12px 24px",
      };

    default:
      return {
        fontSize: "12px",
        padding: "10px 16px",
      };
  }
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = "primary",
  size = "medium",
  style = {},
  label = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className="TermitesButton"
      style={{
        ...getSizeStyles(size),
        ...getColorStyles(color),
        ...buttonStyles,
      }}
      {...props}>
      {label}
    </button>
  );
};

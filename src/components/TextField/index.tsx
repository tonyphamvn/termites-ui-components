import React, { CSSProperties } from "react";

export interface TextFieldProps
  extends Omit<
    React.HTMLProps<HTMLInputElement>,
    "variant" | "size" | "color" | "style" | "label"
  > {
  /**
   * What type to use
   */
  variant?: "outline" | "filled" | "standard" | undefined;

  /**
   * Is this the principal call to action on the page?
   */
  error?: boolean;

  /**
   * What styles to use
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

const textfieldStyles: CSSProperties = {
  borderRadius: "4px",
  display: "inline-block",
  padding: "10px 16px",
  lineHeight: 1,
  border: "1px solid rgba(0, 0, 0, 0.12)",
};

const getBorderColorStyles = (error: boolean) => {
  if (error) {
    return {
      borderColor: "red",
    };
  }
  return {};
};

/**
 * Primary UI component for user interaction
 */
export const TextField = ({
  error = false,
  size = "medium",
  style = {},
  label = "",
  ...props
}: TextFieldProps) => {
  return (
    <input
      className="TermitesTextField"
      style={{
        ...textfieldStyles,
        ...getBorderColorStyles(error),
      }}
      {...props}
    />
  );
};

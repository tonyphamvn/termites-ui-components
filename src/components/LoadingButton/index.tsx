import React, { CSSProperties } from "react";
import { Button, ButtonColorTypes, ButtonProps } from "../Button";
import { Theme } from "../../themes";

export interface LoadingButtonProps extends ButtonProps {
  /**
   * Active loading button
   */
  loading?: boolean;

  /**
   * Where is the position loading button
   */
  loadingPosition?: LoadingPositionTypes;
}

type LoadingPositionTypes = "start" | "end" | "center";

const loadingStyle: CSSProperties = {
  border: `0.15rem solid`,
  borderColor: "transparent",
  WebkitAnimation: "spin 1s linear infinite",
  animation: "spin 1s linear infinite",
  borderTop: "0.15rem solid #ffffff",
  borderRadius: "50%",
  width: "16px",
  height: "16px",
};

const css = `
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => (
  <div className="LoaderSpin" style={loadingStyle}>
    <style>{css}</style>
  </div>
);

/**
 * Primary UI component for user interaction
 */
export const LoadingButton = ({
  loading = false,
  loadingPosition = "start",
  color = "primary",
  startIcon,
  endIcon,
  style,
  ...props
}: LoadingButtonProps) => {
  if (loading) {
    return (
      <>
        {loadingPosition === "start" && (
          <Button
            style={{ opacity: 0.8, cursor: "default", ...style }}
            startIcon={<Loader />}
            color={color}
            {...props}
          />
        )}

        {loadingPosition === "end" && (
          <Button
            style={{ opacity: 0.8, cursor: "default", ...style }}
            endIcon={<Loader />}
            color={color}
            {...props}
          />
        )}
      </>
    );
  }

  return (
    <Button
      style={style}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    />
  );
};

import React from "react";
import Button from "@mui/material/Button";
import "./button.scss";
import Components from "..";

const CustomButton = ({
  children,
  variant,
  color,
  onClick,
  buttonClassName,
  btnClass,
  type,
  disabled,
  isLoading,
}) => {
  return (
    <div className={buttonClassName}>
      <Button
        className={btnClass}
        variant={variant ?? "contained"}
        color={color ?? "primary"}
        onClick={onClick}
        type={type ?? "submit"}
        disabled={disabled ?? false}
      >
        <div>
          {isLoading == undefined ? (
            <span className="addIcon">{children}</span>
          ) : isLoading ? (
            <Components.LoadingSpinner />
          ) : (
            <span className="addIcon">{children}</span>
          )}
        </div>
      </Button>
    </div>
  );
};

export const CustomSecondaryButton = ({
  children,
  variant,
  color,
  onClick,
  buttonClassName,
  btnClass,
  type,
  disabled,
}) => {
  return (
    <div className={buttonClassName}>
      <Button
        className={btnClass}
        variant={variant ?? "contained"}
        color={color ?? "primary"}
        onClick={onClick}
        type={type ?? "submit"}
        disabled={disabled ?? false}
      >
        <div>
          <span className="addIcon">{children}</span>
        </div>
      </Button>
    </div>
  );
};

export default CustomButton;

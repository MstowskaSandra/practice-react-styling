import React from "react";
import * as S from "./Button.styled";

const Button = ({
  variant = "primary",
  size = "lg",
  active = false,
  disabled = false,
  children,
}) => {
  return (
    <S.Button variant={variant} size={size} active={active} disabled={disabled}>
      {children}
    </S.Button>
  );
};

export default Button;
 
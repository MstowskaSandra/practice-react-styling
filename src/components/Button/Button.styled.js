import styled from "styled-components";

export const Button = styled.button`
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.3rem;
  font-weight: 400;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  color: ${({ variant, theme }) =>
    variant === "primary"
      ? theme.colors.primaryText
      : theme.colors.secondaryText};
  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.secondary};
  padding: ${({ size, theme }) => theme.button.sizes[size].padding};
  font-size: ${({ size, theme }) => theme.button.sizes[size].fontSize};
`;

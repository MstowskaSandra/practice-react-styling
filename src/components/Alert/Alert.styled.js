import styled from "styled-components";

export const Alert = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  color: ${({ variant, theme }) =>
    variant === "primary"
      ? theme.colors.primaryText
      : theme.colors.secondaryText};

  background-color: ${({ variant, theme }) =>
    variant === "primary" ? theme.colors.primary : theme.colors.secondary};

  border: 1px solid
    ${({ variant, theme }) =>
      variant === "primary"
        ? theme.colors.primaryBorder
        : theme.colors.secondaryBorder};
  font-size: 1rem;
`;

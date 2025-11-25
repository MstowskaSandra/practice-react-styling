import styled from "styled-components";

export const Alert = styled.div`
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.2rem;
  color: ${({ variant, theme }) =>
    variant === "primary"
      ? theme.colors.primaryText ?? "#004085"
      : variant === "secondary"
      ? theme.colors.secondaryText ?? "#383d41"
      : "#004085"};

  background-color: ${({ variant, theme }) =>
    theme.colors?.[variant] ?? (variant === "primary" ? "#CCE5FF" : "#E2E3E5")};

  border: 1px solid
    ${({ variant, theme }) =>
      theme.colors?.[`${variant}Border`] ??
      (variant === "primary" ? "#B8DAFF" : "#D6D8DB")};
  font-size: 1rem;
`;

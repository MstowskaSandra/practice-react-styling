import styled from "styled-components";

export const Nav = styled.nav`
    aria-label: breadcrumb;
`;

export const List = styled.ol`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0.75rem 1rem;
  background-color: #e9ecef;
  border-radius: 0.25rem;
`;

export const Item = styled.li`
     display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: ${({ active }) => (active ? "#6c757d" : "#0d6efd")};

  /* link w środku */
  a {
    color: #0d6efd;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  /* separator między kolejnymi elementami */
  & + &::before {
    content: "/";
    display: inline-block;
    padding: 0 0.5rem;
    color: #6c757d;
  }

  ${({ active }) =>
    active &&
    `
      font-weight: 400;
      pointer-events: none;

      a {
        pointer-events: none;
        color: #6c757d;
        text-decoration: none;
      }
    `}
`;
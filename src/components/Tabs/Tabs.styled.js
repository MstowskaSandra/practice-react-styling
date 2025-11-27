import styled from "styled-components";

export const TabsWrapper = styled.div`
  width: 100%;
`;

export const TabsList = styled.div`
  display: flex;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1rem;
`;

export const TabButton = styled.button`
  border: 1px solid transparent;
  border-bottom: none;
  border-radius: 0.25rem 0.25rem 0 0;
  padding: 0.5rem 1rem;
  margin-bottom: -1px;
  margin-right: 0.125rem;
  color: ${({ active, disabled }) => 
    disabled ? "#6c757d" : active ?  "#495057": "#0d6efd"
  };
  background-color: ${({ active }) => active ? "#ffffff" : "transparent"};
  border-color: ${({ active }) => active ? "#dee2e6 #dee2e6 #ffffff" : "transparent"};
  cursor: ${({ disabled }) => disabled ? "default" : "pointer"};
  font-size: 0.95rem;

  &:hover {
    color:  ${({ disabled }) => disabled ? "#6c757d" : "#0d6efd"};
  }
`;

export const TabPanel = styled.div`
  padding: 0.75rem 0;
`;
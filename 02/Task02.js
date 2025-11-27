import React from 'react';
import { ThemeProvider } from "styled-components";
import Button from "./../src/components/Button";
import { Row, Col, Button as RBButton } from "react-bootstrap";

export const theme = {
  colors: {
    primary: "#007BFF",
    primaryText: "white",
    secondary: "#FFCA2C",
    secondaryText: "black",
  },
  button: {
    sizes: {
      sm: {
        padding: "0.25rem 0.5rem",
        fontSize: "0.875rem",
      },
      md: {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
      },
      lg: {
        padding: "0.55rem 1.2rem",
        fontSize: "1.25rem",
      },
    },
  },
};

const Task02 = () => {
  return (
    <Row>
      <Col>
        <RBButton variant="primary" size="lg">
          Button!
        </RBButton>
      </Col>
      <Col>
        <ThemeProvider theme={theme}>
          <Button variant="primary" size="lg">
            Button!
          </Button>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task02;


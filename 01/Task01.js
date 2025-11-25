import React from 'react';
import { ThemeProvider } from "styled-components";
import Alert from "./src/components/Alert";
import { Row, Col, Alert as RBAlert } from "react-bootstrap";

const theme = {
  colors: {
    primary: "#CCE5FF",
    primaryText: "#004085",
    primaryBorder: "#B8DAFF",
    secondary: "#E2E3E5",
    secondaryText: "#383D41",
    secondaryBorder: "#D6D8DB",
  },
};

const Task01 = () => {
  return (
    <Row>
      <Col>
        <RBAlert variant="primary">
          Uwaga! <em>Styled Components</em> nadchodzi!
        </RBAlert>
      </Col>
      <Col>
        <ThemeProvider theme={theme}>
          <Alert variant="primary">
            Uwaga! <em>Styled Components</em> nadchodzi!
          </Alert>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task01;


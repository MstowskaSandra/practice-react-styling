import React from 'react';
import Card from "../src/components/Card";
import { Row, Col, Card as RBCard, Button as RBButton } from "react-bootstrap";
import Button from "../src/components/Button/Button";
import { ThemeProvider } from "styled-components";
import { theme } from "../02/Task02";

const Task05 = () => {
  return (
    <Row>
      <Col>
        <RBCard style={{ width: "18rem" }}>
          <RBCard.Img variant="top" src="https://picsum.photos/100/80" />
          <RBCard.Body>
            <RBCard.Title>Card Title</RBCard.Title>
            <RBCard.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </RBCard.Text>
            <RBButton variant="primary">Go somewhere</RBButton>
          </RBCard.Body>
        </RBCard>
      </Col>
      <Col>
        <ThemeProvider theme={theme}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://picsum.photos/100/80" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" size="md">
                Go somewhere
              </Button>
            </Card.Body>
          </Card>
        </ThemeProvider>
      </Col>
    </Row>
  );
};

export default Task05;


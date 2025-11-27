import React from 'react';
import BreadcrumbSC from "../src/components/Breadcrumb";
import {
  Row,
  Col,
  Breadcrumb as RBBreadcrumb,
  Breadcrumb,
} from "react-bootstrap";

const Task03 = () => {
  return (
    <Row>
      <Col>
        <RBBreadcrumb>
          <RBBreadcrumb.Item href="#">Home</RBBreadcrumb.Item>
          <RBBreadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </RBBreadcrumb.Item>
          <RBBreadcrumb.Item active>Data</RBBreadcrumb.Item>
        </RBBreadcrumb>
      </Col>
      <Col>
        <BreadcrumbSC>
          <BreadcrumbSC.Item href="#">Home</BreadcrumbSC.Item>
          <BreadcrumbSC.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
            Library
          </BreadcrumbSC.Item>
          <BreadcrumbSC.Item active>Data</BreadcrumbSC.Item>
        </BreadcrumbSC>
      </Col>
    </Row>
  );
};

export default Task03;


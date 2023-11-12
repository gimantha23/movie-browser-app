import React from "react";
import { Container } from "react-bootstrap";

const ErrorComponent = ({ message }) => {
  return (
    <Container
      className="mt-5 p-5 text-center"
      style={{
        color: "red",
        border: "1px solid red",
      }}
    >
      <strong>Error:</strong> {message}
    </Container>
  );
};

export default ErrorComponent;

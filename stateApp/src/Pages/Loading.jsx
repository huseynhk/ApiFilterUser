import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex flex-column justify-content-center align-items-center text-info"
    >
      <h3 className="mb-4">Loading...</h3>
      <Spinner animation="border" />
    </div>
  );
};

export default Loading;

import { Spin } from "antd";
import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <Spin tip="Loading" size="large" />
      <p>Loading....</p>
    </div>
  );
};

export default Loader;

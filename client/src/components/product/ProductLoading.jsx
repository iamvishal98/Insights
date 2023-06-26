import React from "react";
import "./product.css";
import { Card, Col } from "antd";
const ProductLoading = () => {
  return (
    <Col sm={24} md={12} lg={8} xl={6}>
      <div className="product-container">
        <Card loading={true}></Card>
      </div>
    </Col>
  );
};

export default ProductLoading;

import React from "react";
import "./product.css";
import { Card, Col, Collapse, Rate, Typography } from "antd";

const Product = ({ data }) => {
  const { Paragraph } = Typography;
  const items = [
    {
      key: data._id,
      label: "See more",
      children: (
        <div>
          <p>Supply left :{data?.supply}</p>
          <p>Yearly Sales :{data?.stat[0]?.yearlySalesTotal}</p>
          <p>Total sales :{data?.stat[0]?.yearlyTotalSoldUnits}</p>
        </div>
      ),
    },
  ];

  return (
    <Col sm={24} md={12} lg={8} xl={6}>
      <div className="product-container">
        <Card>
          <p className="product-category">{data?.category}</p>
          <p className="product-name">{data?.name}</p>
          <p className="product-price">INR {data?.price}</p>
          <Rate allowHalf disabled value={data?.rating} />
          <Paragraph
            ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
            className="product-info"
          >
            {data?.description}
          </Paragraph>
          <Collapse ghost items={items} />
        </Card>
      </div>
    </Col>
  );
};

export default Product;

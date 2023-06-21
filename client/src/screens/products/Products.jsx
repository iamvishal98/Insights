import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Rate, Row } from "antd";
import axios from "axios";
import "./products.css";
import Product from "../../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/facing/facingSlice";

const Products = () => {
  const { products } = useSelector((state) => state.facing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="products-container">
      <div className="header">
        <h2>PRODUCTS</h2>
        <p>See list of all your products</p>
      </div>
      <Row>
        {products?.map((productdata) => (
          <Product data={productdata} key={productdata._id} />
        ))}
      </Row>
    </div>
  );
};

export default Products;

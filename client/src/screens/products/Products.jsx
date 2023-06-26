import React, { useEffect } from "react";
import { Row } from "antd";
import "./products.css";
import Product from "../../components/product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/facing/facingSlice";
import ProductLoading from "../../components/product/ProductLoading";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.facing);
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
      {!isLoading ? (
        <Row>
          {products?.map((productdata) => (
            <Product
              data={productdata}
              key={productdata._id}
              isLoading={isLoading}
            />
          ))}
        </Row>
      ) : (
        <Row>
          <ProductLoading />
          <ProductLoading />
          <ProductLoading />
          <ProductLoading />
        </Row>
      )}
    </div>
  );
};

export default Products;

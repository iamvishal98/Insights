import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPerformanceData } from "../../redux/management/managementSlice";
import { Table } from "antd";

const Performance = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.general);
  const { perfromanceData, isLoading } = useSelector(
    (state) => state.management
  );

  const data = perfromanceData?.sales?.map((product) => {
    return {
      key: product._id,
      productId: product.userId,
      cost: product.cost,
      numberOfProducts: product.products.length,
      createdAt: product.createdAt,
    };
  });
  useEffect(() => {
    dispatch(getPerformanceData(user._id));
  }, []);

  const columns = [
    {
      title: "ProductId",
      dataIndex: "productId",
      key: "productId",
    },
    {
      title: "Nmber of Products",
      dataIndex: "numberOfProducts",
      key: "products",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "products",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: (a, b) => a.cost - b.cost,
    },
  ];
  return (
    <div className="table-container">
      <div className="header">
        <h2>PERFORMANCE</h2>
        <p>Track your affilaite sales performance here</p>
      </div>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        className="dark-table"
        pagination={{
          pageSize: 8,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default Performance;

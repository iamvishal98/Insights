import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "ant-table-extensions";
import "./transaction.css";

const Transaction = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
    showSizeChanger: false,
  });
  const [sorter, setSorter] = useState({});
  const [data, setData] = useState([]);

  const fetchTransaction = async () => {
    const { current, pageSize } = pagination;
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}client/transactions?page=${
        current - 1
      }&pageSize=${pageSize}&sort=${JSON.stringify(sorter)}`
    );
    if (response.data) {
      setData(response.data.transactions);
      setPagination({ ...pagination, total: response.data.total });
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [pagination.current, sorter]);

  const handleTableChange = (pagination, _, sorter) => {
    setPagination(pagination);
    if (sorter.field) {
      setSorter(sorter);
    }
  };
  const columns = [
    {
      title: "TransactionId",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Nmber of Products",
      dataIndex: "numberOfProducts",
      key: "products",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: true,
      sortDirections: ["ascend", "descend"],
      sortOrder: sorter.order,
    },
  ];

  const transactions = data?.map((transaction) => {
    return {
      key: transaction._id,
      transactionId: transaction.userId,
      cost: transaction.cost,
      numberOfProducts: transaction.products.length,
    };
  });

  return (
    <div className="table-container">
      <div className="header">
        <h2>TRANSACTIONS</h2>
        <p>See list of all your transactions</p>
      </div>
      <Table
        columns={columns}
        dataSource={transactions}
        pagination={pagination}
        onChange={handleTableChange}
        className="dark-table"
        exportable
      />
    </div>
  );
};

export default Transaction;

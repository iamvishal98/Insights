import React, { useEffect, useState } from "react";
import axios from "axios";
import "./transaction.css";
import { Table } from "antd";

const Transaction = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 7,
    total: 0,
    showSizeChanger: false,
  });
  const [data, setData] = useState([]);

  const fetchTransaction = async () => {
    const { current, pageSize } = pagination;
    const response = await axios.get(
      `http://localhost:5050/client/transactions?page=${
        current - 1
      }&pageSize=${pageSize}`
    );
    if (response.data) {
      setData(response.data.transactions);
      setPagination({ ...pagination, total: response.data.total });
    }
  };

  useEffect(() => {
    fetchTransaction();
  }, [pagination.current]);

  const handleTableChange = (pagination, _, sorter) => {
    console.log(sorter);
    setPagination(pagination);
  };
  const columns = [
    {
      title: "TransactionId",
      dataIndex: "transactionId",
    },
    {
      title: "Cost",
      dataIndex: "cost",
    },
  ];

  const transactions = data?.map((transaction) => {
    return {
      key: transaction._id,
      transactionId: transaction.userId,
      cost: transaction.cost,
    };
  });

  return (
    <div className="transaction-container">
      <Table
        columns={columns}
        dataSource={transactions}
        pagination={pagination}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default Transaction;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import "./customers.css";
import { getCustomers } from "../../redux/facing/facingSlice";

const Customers = () => {
  const dispatch = useDispatch();
  const { customers, isLoading } = useSelector((state) => state.facing);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.localeCompare(b.name), // Custom sorter function
      sortDirections: ["ascend", "descend"], // Sorting directions
    },
    {
      title: "City",
      dataIndex: "city",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Occupation",
      dataIndex: "occupation",
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
  ];

  const data = customers.map((customer) => {
    return {
      key: customer._id,
      name: customer.name,
      city: customer.city,
      country: customer.country,
      occupation: customer.occupation,
      phone: customer.phoneNumber,
    };
  });
  return (
    <div className="table-container">
      <div className="header">
        <h2>CUSTOMERS</h2>
        <p>See list of all your customers</p>
      </div>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={data}
        className="dark-table"
        pagination={{
          pageSize: 7,
          showSizeChanger: false,
        }}
      />
    </div>
  );
};

export default Customers;

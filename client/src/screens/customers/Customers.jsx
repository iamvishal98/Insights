import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "antd";
import "./customers.css";
import { getCustomers } from "../../redux/facing/facingSlice";

const Customers = () => {
  const dispatch = useDispatch();
  const { customers } = useSelector((state) => state.facing);

  useEffect(() => {
    dispatch(getCustomers());
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
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

  //   console.log(data1);

  //   const data = [
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       chinese: 98,
  //       math: 60,
  //       english: 70,
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       chinese: 98,
  //       math: 66,
  //       english: 89,
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       chinese: 98,
  //       math: 90,
  //       english: 70,
  //     },
  //     {
  //       key: "4",
  //       name: "Jim Red",
  //       chinese: 88,
  //       math: 99,
  //       english: 89,
  //     },
  //   ];
  return (
    <div className="cutomers-table-container">
      <div className="header">
        <h2>CUSTOMERS</h2>
        <p>See list of all your customers</p>
      </div>
      <Table
        columns={columns}
        dataSource={data}
        className="dark-table"
        pagination={{
          pageSize: 8,
          showSizeChanger: false,
        }}
        theme="dark"
      />
    </div>
  );
};

export default Customers;

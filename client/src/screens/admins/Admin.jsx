import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getadminData } from "../../redux/management/managementSlice";
import { Table } from "antd";

const Admin = () => {
  const dispatch = useDispatch();
  const { adminData, isLoading } = useSelector((state) => state.management);

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
    {
      title: "Email",
      dataIndex: "email",
    },
  ];
  const data = adminData.map((admin) => {
    return {
      key: admin._id,
      name: admin.name,
      city: admin.city,
      country: admin.country,
      occupation: admin.occupation,
      phone: admin.phoneNumber,
      email: admin.email,
    };
  });

  useEffect(() => {
    dispatch(getadminData());
  }, []);
  return (
    <div className="table-container">
      <div className="header">
        <h2>ADMINS</h2>
        <p>See list of all your admins</p>
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

export default Admin;

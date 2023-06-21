import {
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Input, Button } from "antd";
import React from "react";
import RightMenu from "./RightMenu";
import "./navbar.css";
const { Search } = Input;

const Navbar = ({ toggleCollapsed, collapsed }) => {
  return (
    <Layout.Header theme="dark" className="navbar">
      <div className="left">
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <h2>INSIGHTS</h2>
        <Search
          placeholder="input search text"
          allowClear
          //   onSearch={onSearch}
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="right">
        <SettingOutlined />
        <RightMenu />
      </div>
    </Layout.Header>
  );
};

export default Navbar;

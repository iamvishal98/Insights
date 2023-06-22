import {
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import { Layout, Input, Button, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/general/generalSlice";
import RightMenu from "./RightMenu";
import "./navbar.css";

const Navbar = ({ toggleCollapsed, collapsed }) => {
  const { Search } = Input;
  const { Text } = Typography;
  const { user } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser("63701cc1f032398675000120"));
  }, []);

  return (
    <Layout.Header theme="dark" className="navbar">
      <div className="left">
        <div className="logo-btn">
          <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
          <h2>INSIGHTS</h2>
        </div>
        <Search
          placeholder="input search text"
          allowClear
          style={{
            width: 200,
          }}
        />
      </div>
      <div className="right">
        <SettingOutlined />
        <div className="profile-content">
          <RightMenu />
          <Text type="success" ellipsis>
            {user?.name}
          </Text>
        </div>
      </div>
    </Layout.Header>
  );
};

export default Navbar;

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, Button, Typography } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/general/generalSlice";
import RightMenu from "./RightMenu";
import "./navbar.css";

const Navbar = ({ toggleCollapsed, collapsed }) => {
  const { Text } = Typography;
  const { user } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser("63701cc1f03239b7f700000e"));
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
      </div>
      <div className="right">
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

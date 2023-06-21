import React, { useState } from "react";
import { Avatar, Dropdown } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

const RightMenu = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleMenuClick = ({ key }) => {
    if (key === "logout") {
    }
    setDropdownVisible(false);
  };

  const handleDropdownVisibleChange = (visible) => {
    setDropdownVisible(visible);
  };
  const items = [
    {
      label: "Profile",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Logout",
      key: "2",
      icon: <LogoutOutlined />,
    },
  ];
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };
  return (
    <>
      <Dropdown
        menu={menuProps}
        trigger={["click"]}
        open={dropdownVisible}
        onOpenChange={handleDropdownVisibleChange}
      >
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </>
  );
};

export default RightMenu;

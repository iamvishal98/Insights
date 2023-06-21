import {
  HomeOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  AccountBookOutlined,
  GlobalOutlined,
  GitlabOutlined,
  CalendarOutlined,
  HourglassOutlined,
  RadarChartOutlined,
  RiseOutlined,
  VerifiedOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./sider.css";
import { useLocation, useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const Sider = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const items = [
    getItem("Dashboard", "/dashboard", <HomeOutlined />),
    getItem(
      !collapsed ? "Client Facing" : "",
      "clientFacing",
      "",
      [
        getItem("Products", "/products", <ShoppingCartOutlined />),
        getItem("Customers", "/customers", <TeamOutlined />),
        getItem("Transaction", "transaction", <AccountBookOutlined />),
        getItem("Geography", "geography", <GlobalOutlined />),
      ],
      "group"
    ),
    getItem(
      !collapsed ? "Sales" : "",
      "sales",
      "",
      [
        getItem("Overview", "overview", <GitlabOutlined />),
        getItem("Daily", "daily", <HourglassOutlined />),
        getItem("Monthly", "monthly", <CalendarOutlined />),
        getItem("BreakDown", "breakdown", <RadarChartOutlined />),
      ],
      "group"
    ),
    getItem(
      !collapsed ? "Management" : "",
      "management",
      "",
      [
        getItem("Admin", "admin", <VerifiedOutlined />),
        getItem("Performance", "performance", <RiseOutlined />),
      ],
      "group"
    ),
  ];
  return (
    <Layout.Sider className="slider" collapsed={collapsed}>
      <Menu
        mode="inline"
        theme="dark"
        items={items}
        defaultSelectedKeys={location.pathname}
        onClick={({ key }) => navigate(key)}
      />
    </Layout.Sider>
  );
};
export default Sider;

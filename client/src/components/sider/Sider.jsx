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
import useWindowDimensions from "../../utils/useWindowDimensions";
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
  const { width } = useWindowDimensions();
  const items = [
    getItem("Dashboard", "/dashboard", <HomeOutlined />),
    getItem(
      !collapsed && width > 767 ? "Client Facing" : "",
      "clientFacing",
      "",
      [
        getItem("Products", "/products", <ShoppingCartOutlined />),
        getItem("Customers", "/customers", <TeamOutlined />),
        getItem("Transaction", "/transactions", <AccountBookOutlined />),
        getItem("Geography", "/geographs", <GlobalOutlined />),
      ],
      "group"
    ),
    getItem(
      !collapsed && width > 767 ? "Sales" : "",
      "sales",
      "",
      [
        getItem("Overview", "/overview", <GitlabOutlined />),
        getItem("Daily", "/daily", <HourglassOutlined />),
        getItem("Monthly", "/monthly", <CalendarOutlined />),
        getItem("BreakDown", "/breakdown", <RadarChartOutlined />),
      ],
      "group"
    ),
    getItem(
      !collapsed && width > 767 ? "Management" : "",
      "management",
      "",
      [
        getItem("Admin", "/admin", <VerifiedOutlined />),
        getItem("Performance", "/performance", <RiseOutlined />),
      ],
      "group"
    ),
  ];
  return (
    <Layout.Sider className="slider" collapsed={width > 767 ? collapsed : true}>
      <Menu
        mode="inline"
        theme="dark"
        items={items}
        defaultSelectedKeys={location.pathname}
        onClick={({ key }) => navigate(key)}
        inlineCollapsed={width > 767 ? collapsed : true}
      />
    </Layout.Sider>
  );
};
export default Sider;

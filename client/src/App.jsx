import React, { useState } from "react";
import { Layout, Space } from "antd";
import {
  BrowserRouter,
  Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Sider from "./components/sider/Sider";
import Dashboard from "./screens/dashboard/Dashboard";
import Products from "./screens/products/Products";
import Customers from "./screens/customers/Customers";
import Transaction from "./screens/transaction/Transaction";
import GeoGraphs from "./screens/goegraphy/GeoGraphs";
import Overview from "./screens/overview/Overview";
import Monthly from "./screens/monthly/Monthly";
import Breakdown from "./screens/breakdown/Breakdown";
import Daily from "./screens/daily/Daily";
const { Header, Footer, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <BrowserRouter>
      <Layout>
        <Navbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        <Layout>
          <Sider toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
          <Content>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transaction />} />
              <Route path="/geographs" element={<GeoGraphs />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/daily" element={<Daily />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

import React, { useState, Suspense } from "react";
import { Alert, Layout, Space } from "antd";
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

const Products = React.lazy(() => import("./screens/products/Products"));
const Customers = React.lazy(() => import("./screens/customers/Customers"));
const Transaction = React.lazy(() =>
  import("./screens/transaction/Transaction")
);
const GeoGraphs = React.lazy(() => import("./screens/goegraphy/GeoGraphs"));
const Overview = React.lazy(() => import("./screens/overview/Overview"));
const Monthly = React.lazy(() => import("./screens/monthly/Monthly"));
const Breakdown = React.lazy(() => import("./screens/breakdown/Breakdown"));
const Daily = React.lazy(() => import("./screens/daily/Daily"));
const Admin = React.lazy(() => import("./screens/admins/Admin"));
const Performance = React.lazy(() =>
  import("./screens/performance/Performance")
);
import NoSupport from "./components/noSupport/NoSupport";
import Loader from "./components/loader/Loader";

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <BrowserRouter>
      <NoSupport />
      <Layout>
        <Navbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
        <Layout>
          <Sider toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
          <Content>
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products" element={<Products />} />
                <Route path="/customers" element={<Customers />} />
                <Route path="/transactions" element={<Transaction />} />
                <Route path="/geographs" element={<GeoGraphs />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/monthly" element={<Monthly />} />
                <Route path="/breakdown" element={<Breakdown />} />
                <Route path="/daily" element={<Daily />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/performance" element={<Performance />} />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

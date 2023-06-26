import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardStats } from "../../redux/general/generalSlice";
import { Row, Table } from "antd";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "./dashbord.css";
import StatCard from "../../components/statCard/statCard";

Chart.register(CategoryScale);

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboardStat } = useSelector((state) => state.general);
  console.log(dashboardStat);
  useEffect(() => {
    dispatch(getDashboardStats());
  }, []);

  const salesChange =
    ((dashboardStat?.todayStats?.totalSales -
      dashboardStat?.yesterdayStats?.totalSales) /
      dashboardStat?.yesterdayStats?.totalSales) *
    100;

  const unitsChange =
    ((dashboardStat?.todayStats?.totalUnits -
      dashboardStat?.yesterdayStats?.totalUnits) /
      dashboardStat?.yesterdayStats?.totalUnits) *
    100;

  // Chart props

  const chartData = dashboardStat?.monthlyData
    ?.slice(0, 7)
    .map(({ totalSales }) => totalSales);
  console.log(chartData);

  const Linedata = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: chartData,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Table props
  const columns = [
    {
      title: "TransactionId",
      dataIndex: "transactionId",
      key: "transactionId",
    },
    {
      title: "Nmber of Products",
      dataIndex: "numberOfProducts",
      key: "products",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
      sorter: true,
    },
  ];

  const transactions = dashboardStat?.transactions?.map((transaction) => {
    return {
      key: transaction._id,
      transactionId: transaction.userId,
      cost: transaction.cost,
      numberOfProducts: transaction.products.length,
    };
  });

  return (
    <div className="dashboard-container">
      <div className="header">
        <h2>DASHBOARD</h2>
        <p>Welcome to your Dashboard</p>
      </div>
      <div className="dashboard-stats">
        <div className="stat-cards">
          <Row gutter={[12, 12]}>
            <StatCard
              title={"Total Customers"}
              value={dashboardStat?.totalCustomers}
              changeTitle={"Since Last Month"}
              changeValue={10}
              increase={true}
            />
            <StatCard
              title={"Sales Today"}
              value={dashboardStat?.todayStats?.totalSales}
              changeTitle={"Since Last Day"}
              changeValue={salesChange}
              increase={true}
            />
            <StatCard
              title={"Units Solds"}
              value={dashboardStat?.todayStats?.totalUnits}
              changeTitle={"Since Last Day"}
              changeValue={unitsChange}
              increase={false}
            />
            <StatCard
              title={"Monthly Sales"}
              value={dashboardStat?.thisMonthStats?.totalSales}
              changeTitle={"Since Last Month"}
              changeValue={3676}
              increase={true}
            />
          </Row>
        </div>

        <h3>Sales Chart</h3>
        <div className="dasboard-line-chart">
          <Bar data={Linedata} options={options} />
        </div>
        <h3>Top Transactions</h3>
        <div className="dashboard-table">
          <Table
            dataSource={transactions}
            columns={columns}
            scroll={{ y: 300 }}
            className="dark-table"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

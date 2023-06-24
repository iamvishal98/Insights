import React, { useEffect, useState } from "react";
import "./overview.css";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import OverviewChart from "../../components/overviewChart/OverviewChart";
import { getSalesData } from "../../redux/sales/salesSlice";

const Overview = () => {
  const [view, setView] = useState("units");
  const dispatch = useDispatch();
  const { salesData } = useSelector((sales) => sales.sales);
  const totalSales = salesData?.monthlyData?.map(
    (monthData) => monthData.totalSales
  );
  const totalUnits = salesData?.monthlyData?.map(
    (monthData) => monthData.totalUnits
  );

  useEffect(() => {
    dispatch(getSalesData());
  }, []);
  const handleChange = (value) => {
    setView(value);
  };

  const Linedata = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: view === "sales" ? "Sales" : "units",
        data: view === "sales" ? totalSales : totalUnits,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="overivew-container">
      <div className="header">
        <h2 className="header-name">OVERVIEW</h2>
        <p>See overview of general revenue and profit</p>
        <div className="line-chart-container">
          <div className="select-view">
            <Select
              defaultValue="units"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "sales", label: "Sales" },
                { value: "units", label: "Units" },
              ]}
            />
            <OverviewChart view={view} data={Linedata} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

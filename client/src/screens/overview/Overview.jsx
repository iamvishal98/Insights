import React, { useState } from "react";
import "./overview.css";
import { Select } from "antd";
import OverviewChart from "../../components/overviewChart/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setView(value);
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
            <OverviewChart view={view} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;

import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const OverviewChart = ({ view, data, options }) => {
  return (
    <div className="line-chart-view">
      <Line data={data} options={options} className="line-chart" />{" "}
    </div>
  );
};

export default OverviewChart;

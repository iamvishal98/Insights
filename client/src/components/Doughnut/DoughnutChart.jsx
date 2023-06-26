import React from "react";
import Chart from "chart.js/auto";
import "./doughnutChart.css";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(CategoryScale);
Chart.defaults.plugins.legend.labels.color = "#f8f8f8";

const DoughnutChart = ({ data, options }) => {
  return <Doughnut data={data} options={options} className="doughnut-chart" />;
};

export default DoughnutChart;

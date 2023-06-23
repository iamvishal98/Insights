import React from "react";
import Chart from "chart.js/auto";
import "./doughnutChart.css";
import { CategoryScale } from "chart.js";
import { Doughnut } from "react-chartjs-2";
Chart.register(CategoryScale);

const DoughnutChart = ({ data }) => {
  return <Doughnut data={data} className="doughnut-chart" />;
};

export default DoughnutChart;

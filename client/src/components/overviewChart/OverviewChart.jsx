import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useDispatch, useSelector } from "react-redux";
import { getSalesData } from "../../redux/sales/salesSlice";
Chart.register(CategoryScale);

const OverviewChart = ({ view }) => {
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

  console.log(view);

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
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div className="line-chart-view">
      <Line data={Linedata} options={options} className="line-chart" />{" "}
    </div>
  );
};

export default OverviewChart;

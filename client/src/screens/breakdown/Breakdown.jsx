import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesData } from "../../redux/sales/salesSlice";
import DoughnutChart from "../../components/Doughnut/DoughnutChart";
import "./breakdown.css";
const Breakdown = () => {
  const dispatch = useDispatch();
  const { salesData } = useSelector((sales) => sales.sales);
  const { salesByCategory } = salesData;
  const category = Object.keys(salesByCategory ? salesByCategory : {});
  const price = Object.values(salesByCategory ? salesByCategory : {});
  useEffect(() => {
    dispatch(getSalesData());
  }, []);

  const data = {
    labels: category,
    datasets: [
      {
        data: price,
        backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        labels: {
          color: "#f8f8f8", // Change the font color of the legend labels here
        },
      },
    },
  };

  return (
    <div className="breakdown-container">
      <div className="header">
        <h2 style={{ color: "#f8f8f8" }}>BREAKDOWN</h2>
        <p>Breakdown of sales by category</p>
        <div className="chart-container">
          <DoughnutChart data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Breakdown;

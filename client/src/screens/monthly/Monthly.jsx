import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSalesData } from "../../redux/sales/salesSlice";
import OverviewChart from "../../components/overviewChart/OverviewChart";

const Monthly = () => {
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
        label: "Sales",
        data: totalSales,
        borderColor: "rgb(75, 192, 192)",
      },
      {
        label: "Units",
        data: totalUnits,
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  return (
    <div className="monthly-container">
      <div className="header">
        <h2 className="header-name">MONTHLY</h2>
        <p>See overview of monthly sales</p>
        <div className="line-chart-container">
          <div className="select-view">
            <OverviewChart data={Linedata} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monthly;

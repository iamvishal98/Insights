import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DatePicker } from "antd";
import { getSalesData } from "../../redux/sales/salesSlice";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import OverviewChart from "../../components/overviewChart/OverviewChart";

dayjs.extend(customParseFormat);
const { RangePicker } = DatePicker;

const Daily = () => {
  const dispatch = useDispatch();
  const { salesData } = useSelector((sales) => sales.sales);
  const { dailyData } = salesData;
  const [startDate, setStartDate] = useState(new Date("2021-01-02"));
  const [endDate, setEndDate] = useState(new Date("2021-01-31"));

  useEffect(() => {
    dispatch(getSalesData());
  }, []);

  const formattedData = useMemo(() => {
    if (salesData.length === 0) return [];

    let labels = [];
    const totalSalesLine = {
      label: "totalSales",
      data: [],
      borderColor: "rgb(75, 192, 192)",
    };
    const totalUnitsLine = {
      label: "totalUnits",
      data: [],
      borderColor: "rgb(255, 99, 132)",
    };

    Object.values(dailyData ? dailyData : {}).forEach(
      ({ date, totalSales, totalUnits }) => {
        const dateFormatted = new Date(date);
        const options = { day: "2-digit", month: "2-digit" };
        if (dateFormatted >= startDate && dateFormatted <= endDate) {
          const splitDate = dateFormatted.toLocaleDateString("en-GB", options);
          totalSalesLine.data = [...totalSalesLine.data, totalSales];
          totalUnitsLine.data = [...totalUnitsLine.data, totalUnits];
          labels.push(splitDate);
        }
      }
    );

    const formattedData = {
      labels,
      datasets: [totalSalesLine, totalUnitsLine],
    };
    return formattedData;
  }, [salesData, startDate, endDate]);

  const handleDateRangeChange = (dates) => {
    setStartDate(dates[0].$d);
    setEndDate(dates[1].$d);
  };

  const disabledDate = (current) => {
    if (current) {
      const year = current.year();
      if (year !== 2021) {
        return true;
      }
    }
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div>
      <div className="header">
        <h2 style={{ color: "#f8f8f8" }}>DAILY</h2>
        <p>See daywise sales</p>
      </div>
      <div className="line-chart-container">
        <RangePicker
          onChange={handleDateRangeChange}
          defaultValue={[dayjs("2021/01/02"), dayjs("2021/01/31")]}
          disabledDate={disabledDate}
          options={options}
        />
        {Object.keys(formattedData).length > 0 && (
          <OverviewChart data={formattedData} options={options} />
        )}
      </div>
    </div>
  );
};

export default Daily;

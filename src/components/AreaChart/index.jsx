import {
  faArrowUp,
  faBangladeshiTakaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker } from "antd";
import React from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = () => {
  const options = {
    chart: {
      type: "area",
      height: 350,
    },
    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: [
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
    },

    fill: {
      type: "gradient",
    },
    colors: ["#07bfa5"],
    stroke: {
      curve: "straight",
    },
  };

  const series = [
    {
      name: "Sales",
      data: [
        20000, 10000, 20000, 10000, 9000, 8000, 11000, 7000, 5000, 8000, 6000,
        5000,
      ],
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <FontAwesomeIcon icon={faBangladeshiTakaSign} className="text-2xl" />
          <span className="text-2xl ml-2 font-semibold">65,30,000.98</span>
          <span className="font-semibold text-primary bg-primaryLight p-2 ml-3 rounded-md">
            <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
            15%
          </span>
        </div>
        <DatePicker picker="year" />
      </div>

      <div className="text-lg my-2 font-semibold">Sales This Months</div>

      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default AreaChart;

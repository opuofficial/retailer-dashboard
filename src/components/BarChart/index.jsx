import {
  faArrowDown,
  faBangladeshiTakaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ReactApexChart from "react-apexcharts";

const BarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 2,
    },
    xaxis: {
      categories: ["S", "M", "T", "W", "T", "F", "S"],
    },

    fill: {
      opacity: 1,
      colors: ["#07bfa5"],
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
  };

  const series = [
    {
      name: "Values",
      data: [10, 8, 6, 7, 9, 5, 3],
    },
  ];
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={faBangladeshiTakaSign} className="text-2xl" />
        <span className="text-2xl ml-2 font-semibold">20,65,427</span>
        <span className="font-semibold text-[#ff574c] bg-[#fff4f4] p-2 ml-3 rounded-md">
          <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
          02%
        </span>
      </div>

      <div className="text-lg my-2 font-semibold">Average Daily Sales</div>

      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;

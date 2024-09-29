import {
  faArrowDown,
  faBangladeshiTakaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import ReactApexChart from "react-apexcharts";
import api from "../../api";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const fetchWeeklySales = (token) => {
  return api.get("/retailer-panel/dashboard/average-sales-this-week", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const BarChart = () => {
  const { user } = useContext(AuthContext);

  const weeklySalesQuery = useQuery({
    queryKey: ["weekly-sales"],
    queryFn: () => fetchWeeklySales(user.token),
  });

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
      data: weeklySalesQuery.data?.data.weeklySales,
    },
  ];
  return (
    <div>
      {/* <div>
        <FontAwesomeIcon icon={faBangladeshiTakaSign} className="text-2xl" />
        <span className="text-2xl ml-2 font-semibold">20,65,427</span>
        <span className="font-semibold text-[#ff574c] bg-[#fff4f4] p-2 ml-3 rounded-md">
          <FontAwesomeIcon icon={faArrowDown} className="mr-2" />
          02%
        </span>
      </div> */}

      <div>
        <FontAwesomeIcon icon={faBangladeshiTakaSign} className="text-2xl" />
        <span className="text-2xl ml-2 font-semibold">0</span>
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

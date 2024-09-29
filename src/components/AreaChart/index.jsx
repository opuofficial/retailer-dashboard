import {
  faArrowUp,
  faBangladeshiTakaSign,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker } from "antd";
import React, { useContext, useState } from "react";
import ReactApexChart from "react-apexcharts";
import api from "../../api";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

const fetchSalesThisYear = (token, year) => {
  return api.get(`/retailer-panel/dashboard/sales-this-year?year=${year}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const AreaChart = () => {
  const { user } = useContext(AuthContext);
  const [salesYear, setSalesYear] = useState(2024);

  const {
    data: salesByYear,
    isError,
    error,
  } = useQuery({
    queryKey: ["sales-by-year", salesYear],
    queryFn: () => fetchSalesThisYear(user.token, salesYear),
  });

  const monthlySales = salesByYear?.data?.monthlySales;
  const salesData = Array(12).fill(0);

  monthlySales?.forEach((sale) => {
    const monthIndex = sale._id.month - 1;
    salesData[monthIndex] = sale.sum;
  });

  const handleYearChange = (_, value) => {
    setSalesYear(value);
  };

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
      data: salesData,
    },
  ];

  if (isError) {
    toast.error("Something went wrong!");
  }

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
        <DatePicker picker="year" onChange={handleYearChange} />
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

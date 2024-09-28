import React, { useContext } from "react";
import DashboardCard from "../DashboardCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCartShopping,
  faChartLine,
  faFileCircleXmark,
  faGem,
  faHourglassHalf,
  faTruck,
  faUser,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import api from "../../api";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";

const fetchOrderRelatedData = (token, fromDate = "", toDate = "") => {
  return api.get(
    `/retailer-panel/dashboard/about-order-related?fromDate=${fromDate}&toDate=${toDate}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

function formatNumber(num) {
  let formattedNumber = num?.toFixed(2);
  formattedNumber = formattedNumber?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return formattedNumber;
}

const DashboardCards = () => {
  const { user } = useContext(AuthContext);

  const orderDataQuery = useQuery({
    queryKey: ["order-data"],
    queryFn: () => fetchOrderRelatedData(user.token),
  });

  console.log(orderDataQuery.data?.data);

  const cardsData = [
    {
      id: 1,
      label: "Total Revenue",
      icon: <FontAwesomeIcon icon={faChartLine} />,
      value: formatNumber(orderDataQuery.data?.data.totalRevenue),
    },
    {
      id: 2,
      label: "Total Customers",
      icon: <FontAwesomeIcon icon={faUserGroup} />,
      value: formatNumber(orderDataQuery.data?.data.totalCustomers),
    },
    {
      id: 3,
      label: "Total Orders",
      icon: <FontAwesomeIcon icon={faCartShopping} />,
      value: formatNumber(orderDataQuery.data?.data.totalOrder),
    },
    {
      id: 4,
      label: "Delivered Orders",
      icon: <FontAwesomeIcon icon={faTruck} />,
      value: formatNumber(orderDataQuery.data?.data.deliveredOrder),
    },
    {
      id: 5,
      label: "Pending Order",
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
      value: formatNumber(orderDataQuery.data?.data.pendingOrder),
    },
    {
      id: 6,
      label: "Order Cancellation",
      icon: <FontAwesomeIcon icon={faBan} />,
      value: formatNumber(orderDataQuery.data?.data.cancelOrder),
    },
    {
      id: 7,
      label: "Value Per Customer",
      icon: <FontAwesomeIcon icon={faUser} />,
      value: formatNumber(orderDataQuery.data?.data.valuePerCustomer),
    },
    {
      id: 8,
      label: "Active SKU",
      icon: <FontAwesomeIcon icon={faGem} />,
      value: formatNumber(orderDataQuery.data?.data.totalActiveSKU),
    },
  ];

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 mt-5">
      {cardsData.map((data) => (
        <DashboardCard key={data.id} data={data} />
      ))}
    </section>
  );
};

export default DashboardCards;

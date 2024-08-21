import React from "react";
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
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

const DashboardCards = () => {
  const cardsData = [
    {
      id: 1,
      label: "Total Revenue",
      icon: <FontAwesomeIcon icon={faChartLine} />,
      value: "6530000.98",
      percentage: "+3.4%",
      footerText: "increase this week",
    },
    {
      id: 2,
      label: "Total Customers",
      icon: <FontAwesomeIcon icon={faUserGroup} />,
      value: "8,652",
      percentage: "+0.10%",
      footerText: "increase this week",
    },
    {
      id: 3,
      label: "Total Orders",
      icon: <FontAwesomeIcon icon={faCartShopping} />,
      value: "12,784",
      percentage: "145",
      footerText: "increase this week",
    },
    {
      id: 4,
      label: "Delivered Orders",
      icon: <FontAwesomeIcon icon={faTruck} />,
      value: "7,983",
      percentage: "+0.20%",
      footerText: "increase this week",
    },
    {
      id: 5,
      label: "Pending Order",
      icon: <FontAwesomeIcon icon={faHourglassHalf} />,
      value: "2,045",
      percentage: "105k",
      footerText: "Pending Order value",
    },
    {
      id: 6,
      label: "Order Cancellation",
      icon: <FontAwesomeIcon icon={faBan} />,
      value: "0.37%",
      percentage: "-0.10%",
      footerText: "decrease this week",
    },
    {
      id: 7,
      label: "Failed Order",
      icon: <FontAwesomeIcon icon={faFileCircleXmark} />,
      value: "0.16%",
      percentage: "+0.10%",
      footerText: "decrease this week",
    },
    {
      id: 8,
      label: "Active SKU",
      icon: <FontAwesomeIcon icon={faGem} />,
      value: "364",
      percentage: "+0.02%",
      footerText: "increase this week",
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

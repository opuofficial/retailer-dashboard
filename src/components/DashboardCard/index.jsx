import React from "react";
import { Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBangladeshiTakaSign,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

const DashboardCard = ({ data }) => {
  const { id, label, icon, value, percentage, footerText } = data;

  return (
    <Card bordered={false}>
      <div className="flex justify-between items-center">
        <div className="">{label}</div>
        <span className="text-primary bg-primaryLight py-2 px-3">{icon}</span>
      </div>

      <div className="mt-4">
        {id == 1 && (
          <FontAwesomeIcon className="mr-2.5" icon={faBangladeshiTakaSign} />
        )}
        <span className="font-bold text-2xl">{value}</span>
        <div>
          <span className="text-primary mt-3">{percentage}</span> {footerText}
        </div>
      </div>
    </Card>
  );
};

export default DashboardCard;

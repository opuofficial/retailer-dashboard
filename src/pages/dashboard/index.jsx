import React from "react";
import { Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { DatePicker } from "antd";
import DashboardCards from "../../components/DashboardCards";
const { RangePicker } = DatePicker;

const Dashboard = () => {
  return (
    <section>
      <div className="heading flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="text-2xl font-semibold">Dashboard</div>
        <div className="flex gap-3">
          <div>
            <Input
              placeholder="input search text"
              suffix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            />
          </div>
          <div>
            <RangePicker />
          </div>
        </div>
      </div>

      <DashboardCards />
    </section>
  );
};

export default Dashboard;

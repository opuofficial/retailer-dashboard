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
      <div className="heading flex items-center justify-between">
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

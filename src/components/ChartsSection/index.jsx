import React from "react";
import AreaChart from "../AreaChart";
import BarChart from "../BarChart";

const CharsSection = () => {
  return (
    <section className="mt-10">
      <div className="md:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="bg-white p-5 rounded-lg">
            <AreaChart />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-5 rounded-lg">
            <BarChart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharsSection;

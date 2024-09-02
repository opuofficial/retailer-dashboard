import { Select, DatePicker, Pagination, Avatar, Badge } from "antd";
const { RangePicker } = DatePicker;

import React from "react";

const Notification = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Notification</div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <span>Total Rows</span>
          <Select
            showSearch
            optionFilterProp="label"
            options={[
              {
                value: "10",
                label: "10",
              },
              {
                value: "20",
                label: "20",
              },
              {
                value: "50",
                label: "50",
              },
              {
                value: "100",
                label: "100",
              },
            ]}
            defaultValue={"10"}
          />
          <span>of 29</span>
        </div>
        <div>
          <RangePicker />
        </div>
      </div>

      {/* notifications */}

      <div className="my-5">
        <div className="mb-3 w-4/5 bg-white p-5 mx-auto flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Avatar className="mr-2" />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-md">Md Nasiv</span>
                  <span className="text-xs">7 minutes ago</span>
                </div>
                <div className="text-[#fc8e28] font-semibold">
                  The order has been created
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span>3:57 PM</span>
            <Badge color="gray" dot />
            <span>2 Sep, 2024</span>
          </div>
        </div>
        <div className="mb-3 w-4/5 bg-white p-5 mx-auto flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Avatar className="mr-2" />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-md">Md Nasiv</span>
                  <span className="text-xs">7 minutes ago</span>
                </div>
                <div className="text-[#fc8e28] font-semibold">
                  The order has been created
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span>3:57 PM</span>
            <Badge color="gray" dot />
            <span>2 Sep, 2024</span>
          </div>
        </div>
        <div className="mb-3 w-4/5 bg-white p-5 mx-auto flex items-center justify-between">
          <div className="flex justify-between items-center">
            <div className="flex">
              <Avatar className="mr-2" />
              <div>
                <div className="flex gap-2 items-center">
                  <span className="font-semibold text-md">Md Nasiv</span>
                  <span className="text-xs">7 minutes ago</span>
                </div>
                <div className="text-[#fc8e28] font-semibold">
                  The order has been created
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <span>3:57 PM</span>
            <Badge color="gray" dot />
            <span>2 Sep, 2024</span>
          </div>
        </div>
      </div>

      {/* notifications */}
      <div className="flex justify-between">
        <div>Showing 1 of 3 Pages</div>
        <div>
          <Pagination defaultCurrent={1} total={30} />
        </div>
      </div>
    </div>
  );
};

export default Notification;

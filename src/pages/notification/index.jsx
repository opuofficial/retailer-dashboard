import { Select, DatePicker, Pagination, Avatar, Badge } from "antd";
const { RangePicker } = DatePicker;

import React, { useContext, useState } from "react";
import api from "../../api";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";
import NotificationCard from "../../components/NotificationCard";

const fetchNotifications = (token, limit, pageNo, dateFilter) => {
  return api.get(
    `/retailer-panel/notification/notification-list?limit=${limit}&pageNo=${pageNo}&fromDate=${
      dateFilter[0] || ""
    }&toDate=${dateFilter[1] || ""}`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

const Notification = () => {
  const { user } = useContext(AuthContext);
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(10);
  const [dateFilter, setDateFilter] = useState([]);

  const { data: notifications } = useQuery({
    queryKey: ["notification", pageNo, limit, dateFilter],
    queryFn: () => fetchNotifications(user.token, limit, pageNo, dateFilter),
    placeholderData: keepPreviousData,
  });

  console.log(notifications?.data);

  const handlePageChange = (value) => {
    setPageNo(value);
  };

  const handleLimitChange = (value) => {
    setLimit(value);
  };

  const handleDateFilter = (_, value) => {
    setDateFilter(value);
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Notification</div>
      <div className="flex justify-between">
        <div className="flex gap-1 items-center">
          <span>Total Rows</span>
          <Select
            showSearch
            optionFilterProp="label"
            onChange={handleLimitChange}
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
          <span>of {notifications?.data.totalLength}</span>
        </div>
        <div>
          <RangePicker onChange={handleDateFilter} />
        </div>
      </div>

      <div className="my-5">
        {notifications?.data.notifications.map((notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
          />
        ))}
      </div>

      {/* notifications */}
      <div className="flex justify-between">
        <div>
          Showing {pageNo} of{" "}
          {Math.ceil(notifications?.data.totalLength / limit)} Pages
        </div>
        <div>
          <Pagination
            defaultCurrent={1}
            total={notifications?.data.totalLength}
            onChange={handlePageChange}
            pageSize={limit}
            showSizeChanger={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Notification;

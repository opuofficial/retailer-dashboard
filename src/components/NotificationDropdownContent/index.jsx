import { Avatar, Spin } from "antd";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../api";
import { AuthContext } from "../../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const fetchLatestNotifications = (token) => {
  return api.get(
    "/retailer-panel/notification/notification-list?limit=10&pageNo=1",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

const NotificationCard = ({ notification }) => {
  return (
    <div className="w-full p-3">
      <div className="flex">
        <div>
          <Avatar
            src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${notification?.customerId?.image}`}
          />
        </div>
        <div className="text-sm text-left ml-2">
          <div>{notification.customerId.name}</div>
          <div className="font-normal">{notification.title}</div>
        </div>
      </div>
    </div>
  );
};

const NotificationDropdownContent = () => {
  const { user } = useContext(AuthContext);

  const { data: latestNotifications, isLoading } = useQuery({
    queryKey: ["latest-notifications"],
    queryFn: () => fetchLatestNotifications(user.token),
  });

  return (
    <div className="w-full min-w-52 border bg-white">
      <div className="flex justify-between text-xs pb-3 border-b p-3">
        <div>Notifications</div>
        <div>
          <Link to="/retailer/notification">View All</Link>
        </div>
      </div>
      {isLoading && (
        <div className="flex justify-center mt-5">
          <Spin />
        </div>
      )}

      <div className="text-center font-semibold text-lg mt-0 min-h-60 h-60 overflow-auto">
        {latestNotifications?.data.notifications.map((notification) => (
          <NotificationCard
            key={notification._id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdownContent;

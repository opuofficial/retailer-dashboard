import { Avatar, Badge } from "antd";
import React from "react";
import {
  convertToDate,
  convertToTime,
  timeAgo,
} from "../../utils/dateConverter";

const NotificationCard = ({ notification }) => {
  return (
    <div className="mb-3 w-4/5 bg-white p-5 mx-auto flex items-center justify-between">
      <div className="flex justify-between items-center">
        <div className="flex">
          <Avatar
            className="mr-2"
            src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${notification.customerId.image}`}
          />
          <div>
            <div className="flex gap-2 items-center">
              <span className="font-semibold text-md">
                {notification.customerId?.name}
              </span>
              <span className="text-xs">{timeAgo(notification.createdAt)}</span>
            </div>
            <div className="text-[#fc8e28] font-semibold">
              {notification.title}
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <span>{convertToTime(notification.createdAt)}</span>
        <Badge color="gray" dot />
        <span>{convertToDate(notification.createdAt)}</span>
      </div>
    </div>
  );
};

export default NotificationCard;

import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DatePicker, Pagination, Select, Table, Tag } from "antd";
import React from "react";
import { Link } from "react-router-dom";
const { RangePicker } = DatePicker;

const dataSource = [
  {
    key: "1",
    no: "1",
    id: "productId",
    orderId: "IHB-82",
    date: "04 Sep, 2024",
    customerName: "Humayun Kabir",
    customerEmail: "kabir@gmail.com",
    address: "Mirpur 14, Ibrahimpur Bazar, Dhaka North City, Dhaka",
    phone: "015********",
    amount: "500",
    quantity: 1,
    status: "pending",
  },
  {
    key: "2",
    no: "2",
    id: "productId",
    orderId: "IHB-82",
    date: "04 Sep, 2024",
    customerName: "Humayun Kabir",
    customerEmail: "kabir@gmail.com",
    address: "Mirpur 14, Ibrahimpur Bazar, Dhaka North City, Dhaka",
    phone: "015********",
    amount: "500",
    quantity: 1,
    status: "pending",
  },
  {
    key: "3",
    no: "3",
    id: "productId",
    orderId: "IHB-82",
    date: "04 Sep, 2024",
    customerName: "Humayun Kabir",
    customerEmail: "kabir@gmail.com",
    address: "Mirpur 14, Ibrahimpur Bazar, Dhaka North City, Dhaka",
    phone: "015********",
    amount: "500",
    quantity: 1,
    status: "pending",
  },
];

const columns = [
  {
    title: "No.",
    dataIndex: "no",
    key: "no",
  },
  {
    title: "Order Details",
    dataIndex: "orderdetails",
    key: "orderdetails",
    render: (_, record) => {
      const { orderId, date } = record;

      return (
        <>
          <div>{orderId}</div>
          <div>{date}</div>
        </>
      );
    },
  },
  {
    title: "Customer Info",
    dataIndex: "customerinfo",
    key: "customerinfo",
    render: (_, record) => {
      const { customerName, customerEmail } = record;

      return (
        <>
          <div>{customerName}</div>
          <div>{customerEmail}</div>
        </>
      );
    },
  },
  {
    title: "Shipping Address",
    dataIndex: "shippingaddress",
    key: "shippingaddress",
    render: (_, record) => {
      const { address, phone } = record;

      return (
        <>
          <div>{address}</div>
          <div>{phone}</div>
        </>
      );
    },
  },
  {
    title: "Total Amount",
    dataIndex: "amount",
    key: "amount",
    render: (_, record) => {
      const { amount, quantity } = record;
      return (
        <>
          <div>{amount} BDT</div>
          <div>Total Item: {quantity}</div>
        </>
      );
    },
  },
  {
    title: "Status",
    key: "status",
    render: (_, record) => {
      return <Tag color="gold">{record.status}</Tag>;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <FontAwesomeIcon
          icon={faEye}
          className="text-slate-400 border border-slate-400 rounded-md p-2 cursor-pointer"
        />
      );
    },
  },
];

const OrderList = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Order List</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>Total Rows</div>
          <Select
            showSearch
            optionFilterProp="label"
            defaultValue="10"
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
          />
          <div>of 15</div>
        </div>
        <div className="flex items-center gap-2">
          <Select placeholder="Division" />
          <Select placeholder="District" />
          <Select placeholder="Pending" />
          <RangePicker />
        </div>
      </div>

      <div className="bg-white p-5 mt-4">
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>

      <div className="flex justify-between mt-4">
        <div>Showing 1 of 2 Pages</div>
        <div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
};

export default OrderList;

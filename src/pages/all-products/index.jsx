import {
  faCircleCheck,
  faEye,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Select, Table } from "antd";
import React from "react";
import visitorChair from "../../assets/visitor-chair.png";
import lappato from "../../assets/LAPPATO.png";
import bashundharaCement from "../../assets/bashundhara-cement.jpg";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const columns = [
    {
      key: "no",
      title: "No.",
      dataIndex: "no",
    },
    {
      key: "image",
      title: () => {
        return <FontAwesomeIcon icon={faImage} />;
      },
      render: (record) => {
        return <img src={record.image} className="w-14" />;
      },
    },
    {
      key: "producttitle",
      title: "Product Title",
      render: (record) => {
        return (
          <div>
            <div>{record.title}</div>
            <div>{record.productId}</div>
          </div>
        );
      },
    },
    {
      key: "category",
      title: "Category",
      dataIndex: "category",
    },
    {
      key: "brand",
      title: "Brand",
      dataIndex: "brand",
    },
    {
      key: "totalunit",
      title: "Total Unit",
      render: (record) => {
        return (
          <div>
            <div>
              {record.totalUnit} {record.category == "Cement" ? "Bag" : "PCS"}
            </div>
            <div>
              <span className="mr-2 text-green-500">
                <FontAwesomeIcon icon={faCircleCheck} />
              </span>
              <span>In Stock</span>
            </div>
          </div>
        );
      },
    },
    {
      key: "price",
      title: "Price",
      render: (record) => {
        return (
          <div>
            <div>{record.price} BDT</div>
            <div>{record.discount}% Off</div>
          </div>
        );
      },
    },
    {
      key: "status",
      title: "Status",
      render: (record) => {
        return <div>{record.status}</div>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        return (
          <Link
            to={`/retailer/manage-products/all-products/details/${record.id}`}
          >
            <FontAwesomeIcon
              icon={faEye}
              className="text-slate-400 border border-slate-400 rounded-md p-2 cursor-pointer"
            />
          </Link>
        );
      },
    },
  ];

  const dataSource = [
    {
      key: "1",
      id: "productId1",
      no: "1",
      image: visitorChair,
      title: "Visitor Chair",
      productId: "200010005",
      category: "Adhesive Granite and Natural Stones",
      brand: "AKS",
      totalUnit: 15,
      price: 700,
      discount: 0,
      status: "active",
    },
    {
      key: "2",
      id: "productId2",
      no: "2",
      image: lappato,
      title: "LAPPATO 6 SGA-01",
      productId: "200010003",
      category: "Ceramic Tiles",
      brand: "Akij Ceramics",
      totalUnit: 29977,
      price: 120,
      discount: 8.33,
      status: "active",
    },
    {
      key: "3",
      id: "productId3",
      no: "3",
      image: bashundharaCement,
      title: "Bashundhara Cement",
      productId: "200010001",
      category: "Cement",
      brand: "Bashundhara Cement",
      totalUnit: 5000,
      price: 490,
      discount: 0,
      status: "active",
    },
  ];

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">All Products</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>Total Rows</div>
          <Select showSearch optionFilterProp="label" defaultValue="10" />
          <div>of 15</div>
        </div>
        <div className="flex items-center gap-2">
          <Select placeholder="Filter By Category" />
          <Select placeholder="Filter By Brand" />
          <Select placeholder="Active" />
        </div>
      </div>

      <div className="mt-5 bg-white">
        <Table columns={columns} dataSource={dataSource} pagination={false} />
      </div>
    </div>
  );
};

export default AllProducts;

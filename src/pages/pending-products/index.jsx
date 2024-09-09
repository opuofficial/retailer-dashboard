import { faImage, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Select, Table } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PendingProducts = () => {
  const columns = [
    {
      key: "no",
      title: "No.",
    },
    {
      key: "image",
      title: () => {
        return <FontAwesomeIcon icon={faImage} />;
      },
    },
    {
      key: "producttitle",
      title: "Product Title",
    },
    {
      key: "category",
      title: "Category",
    },
    {
      key: "brand",
      title: "Brand",
    },
    {
      key: "totalunit",
      title: "Total Unit",
    },
    {
      key: "price",
      title: "Price",
    },
    {
      key: "status",
      title: "Status",
    },
    {
      key: "action",
      title: "Action",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold mb-4">Add New Product</div>
        <Link to={"/retailer/manage-products/pending-products/create-product"}>
          <Button
            className="bg-primary text-white font-semibold text-lg p-5 rounded-md"
            icon={<FontAwesomeIcon icon={faPlus} />}
          >
            Create New
          </Button>
        </Link>
      </div>

      <div className="flex justify-between mt-4">
        <div className="flex items-center gap-2">
          <div>Total Rows</div>
          <Select showSearch optionFilterProp="label" />
          <div>of 15</div>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="Filter By Category" />
          <Select defaultValue="Filter By Brand" />
          <Select defaultValue="Pending" />
        </div>
      </div>

      <div className="bg-white p-5 mt-4">
        <Table columns={columns} pagination={false} />
      </div>
    </div>
  );
};

export default PendingProducts;

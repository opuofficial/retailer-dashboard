import {
  faCircleCheck,
  faEye,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Pagination, Select, Table } from "antd";
import React, { useContext, useState } from "react";
import visitorChair from "../../assets/visitor-chair.png";
import lappato from "../../assets/LAPPATO.png";
import bashundharaCement from "../../assets/bashundhara-cement.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "../../api";
import { AuthContext } from "../../providers/AuthProvider";

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
      return (
        <img
          src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${record.image}`}
          className="w-14"
        />
      );
    },
  },
  {
    key: "producttitle",
    title: "Product Title",
    render: (record) => {
      return (
        <div>
          <div>{record.name}</div>
          <div>{record.sku}</div>
        </div>
      );
    },
  },
  {
    key: "category",
    title: "Category",
    render: (record) => record?.categoryId.name,
  },
  {
    key: "brand",
    title: "Brand",
    render: (record) => record?.brandId.name,
  },
  {
    key: "totalunit",
    title: "Total Unit",
    render: (record) => {
      return (
        <div>
          <div>
            {record.stockQuantity} {record.unit}
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
          <div>{record.regularPrice} BDT</div>
          <div>{record.discountPercentage}% Off</div>
        </div>
      );
    },
  },
  {
    key: "status",
    title: "Status",
    render: (record) => {
      const statusStyles =
        record.status === "Active"
          ? "text-green-500 bg-green-100"
          : "text-red-500 bg-red-100";

      return (
        <div className={`${statusStyles} text-center font-semibold rounded`}>
          {record.status}
        </div>
      );
    },
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => {
      return (
        <Link
          to={`/retailer/manage-products/all-products/details/${record._id}`}
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

const getAllCategories = () => {
  return api.get(
    "/product-category/data/?limit=0&pageNo=0&categoryType=Product&status=true&parentCategoryId"
  );
};

const getAllBrands = () => {
  return api.get("/brand/data?limit=0&pageNo=0&status=true");
};

const getAllProducts = (
  token,
  pageNo,
  limit,
  status,
  brandId = "",
  categoryId = ""
) => {
  return api.get(
    `/retailer-panel/product/data?pageNo=${pageNo}&limit=${limit}&status=${status}&brandId=${brandId}&categoryId=${categoryId}&retailerRequestStatus=Approved`,
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
};

const AllProducts = () => {
  const { user } = useContext(AuthContext);
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(10);
  const [status, setStatus] = useState("Active");
  const [brandId, setBrandId] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const categoriesQuery = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  let allCategories = categoriesQuery?.data?.data.categories;

  allCategories = allCategories?.map((category) => {
    return {
      ...category,
      value: category._id,
    };
  });

  const brandsQuery = useQuery({
    queryKey: ["brands"],
    queryFn: getAllBrands,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  let allBrands = brandsQuery?.data?.data.brands;

  allBrands = allBrands?.map((brand) => {
    return {
      ...brand,
      label: brand.name,
      value: brand._id,
    };
  });

  let allProductsQuery = useQuery({
    queryKey: ["all-products", pageNo, limit, status, brandId, categoryId],
    queryFn: () =>
      getAllProducts(user.token, pageNo, limit, status, brandId, categoryId),
    refetchOnWindowFocus: false,
  });

  const allProductsQueryResponse = allProductsQuery.data?.data;
  let allProductsData = allProductsQueryResponse?.products;

  allProductsData = allProductsData?.map((product, index) => {
    return {
      ...product,
      no: index + 1,
      key: index + 1,
    };
  });

  // console.log(allProductsQueryResponse.totalLength);

  const handleLimitChange = (value) => {
    setLimit(value);
  };

  const handleCategoryChange = (value) => {
    setCategoryId(value);
  };

  const handleBrandChange = (value) => {
    setBrandId(value);
  };

  const handleStatusChange = (value) => {
    setStatus(value);
  };

  const resetAllFilter = () => {
    setCategoryId("");
    setBrandId("");
    setStatus("Active");
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">All Products</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div>Total Rows</div>
          <Select
            showSearch
            optionFilterProp="label"
            defaultValue="10"
            options={[
              {
                label: "10",
                value: "10",
              },
              {
                label: "20",
                value: "20",
              },
              {
                label: "50",
                value: "50",
              },
              {
                label: "100",
                value: "100",
              },
            ]}
            onChange={handleLimitChange}
          />
          <div>of {allProductsQueryResponse?.totalLength}</div>
        </div>
        <div className="flex items-center gap-2">
          {(categoryId || brandId || status != "Active") && (
            <Button onClick={resetAllFilter}>Reset Filter</Button>
          )}

          <Select
            showSearch
            placeholder="Filter By Category"
            optionFilterProp="label"
            options={allCategories}
            onChange={handleCategoryChange}
            allowClear
          />
          <Select
            showSearch
            placeholder="Filter By Brand"
            options={allBrands}
            optionFilterProp="label"
            onChange={handleBrandChange}
            allowClear
          />
          <Select
            placeholder="Active"
            options={[
              { label: "Active", value: "Active" },
              { label: "Inactive", value: "Inactive" },
            ]}
            onChange={handleStatusChange}
          />
        </div>
      </div>

      <div className="mt-5 bg-white">
        <>
          <Table
            columns={columns}
            dataSource={allProductsData}
            pagination={false}
            loading={allProductsQuery.isLoading}
          />
        </>
      </div>
      <div className="flex justify-between py-3">
        <div>
          Showing {pageNo} of{" "}
          {Math.ceil(allProductsQueryResponse?.totalLength / limit)} Page
        </div>
        <div>
          <Pagination
            defaultCurrent={1}
            total={allProductsQueryResponse?.totalLength}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import productDetails1 from "../../assets/productDetails1.png";
import productDetails2 from "../../assets/productDetails2.png";
import productDetails3 from "../../assets/productDetails3.png";
import visitorChair from "../../assets/visitor-chair.png";
import { Button } from "antd";
import api from "../../api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";

const fetchProductById = (token, productId) => {
  return api.get(`/retailer-panel/product/${productId}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
};

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const [displayImage, setDisplayImage] = useState(null);

  const cachedQueries = queryClient.getQueriesData();

  const allProductsCached = cachedQueries.find((queries) => {
    if (queries[0].includes("all-products")) {
      return queries;
    }
  });

  const products = allProductsCached && allProductsCached[1].data.products;

  let { data: product, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: () => fetchProductById(user.token, id),
    enabled: !products,
    refetchOnWindowFocus: false,
  });

  if (products) {
    product = products.find((product) => {
      return product._id == id;
    });
  } else {
    product = product?.data.product;
  }

  useEffect(() => {
    setDisplayImage(product?.image);
  }, [product]);

  const handleGoToBack = () => {
    navigate(-1);
  };

  if (isLoading) {
    return null;
  }

  console.log(product);

  return (
    <div className="relative">
      <div className="text-2xl font-semibold flex gap-2 items-center">
        <div
          onClick={handleGoToBack}
          className="w-10 h-10  flex justify-center items-center border rounded-full cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
        </div>
        <span className=" cursor-pointer" onClick={handleGoToBack}>
          Product Details
        </span>
      </div>

      <div className="sm:grid grid-cols-2 mt-5">
        <div className="col-span-1">
          <div>
            <img
              src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${displayImage}`}
              alt=""
              className="w-[75%] mb-5"
            />
          </div>
          <div className="flex gap-3">
            <img
              className="w-20 h-20"
              src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${product.image}`}
              onClick={() => setDisplayImage(product.image)}
              alt=""
            />
            {product.gallery.map((image) => (
              <img
                key={image}
                className="w-20 h-20"
                src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${image}`}
                onClick={() => setDisplayImage(image)}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="text-lg font-semibold">{product.name}</div>
            <div className="flex gap-2">
              <div>Category</div>
              <div>{product.categoryId.name}</div>
              <div>In Stock</div>
              <div>
                Unit : {product.stockQuantity} {product.unit}
              </div>
            </div>
            <div className="mt-3">Brand : {product.brandId.name}</div>
            <div className="my-4 border-t border-b py-4">
              Regular Price : {product.regularPrice}
            </div>
            <div className="text-xs">
              Elevate your space with our premium chairs, crafted for comfort
              and style. Each piece combines ergonomic design with high-quality
              materials, ensuring exceptional support and durability. Perfect
              for any setting, our chairs enhance your decor while providing the
              ultimate in relaxation and sophistication. Experience the art of
              seating.
            </div>

            <div className="my-4 bg-[#F2F5FF] p-[14px] rounded-[10px]">
              <p className="text-[#4A72FF] text-[14px] font-semibold leading-6 flex justify-start items-center">
                Usually Delivers in 24 to 48 hours.
              </p>
            </div>
            <div>
              The price is applicable insides of Dhaka city and outside of Dhaka
              city it will increase.
            </div>
            <div>Call us: +88013********</div>

            <Button className="bg-red-500 text-white w-3/4 mt-3">
              Inactive
            </Button>
          </div>
        </div>
      </div>

      <div className="border-t py-5 my-5">
        <div className="text-lg font-semibold">Description</div>
        <div className="font-semibold">
          Building Better, Together: Choose Akij Cement
        </div>
        <div>
          Elevate your space with our premium chairs, crafted for comfort and
          style. Each piece combines ergonomic design with high-quality
          materials, ensuring exceptional support and durability. Perfect for
          any setting, our chairs enhance your decor while providing the
          ultimate in relaxation and sophistication. Experience the art of
          seating.
        </div>
      </div>

      <div className="sticky w-full bg-white py-3 bottom-0 left-0 px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={`https://sgp1.digitaloceanspaces.com/staging-ihbbsrmbackend/${product.image}`}
              className="w-24"
              alt=""
            />
            <div className="ml-4">
              <div className="text-lg font-semibold">{product.name}</div>
              <div>Regular Price : {product.regularPrice}</div>
            </div>
          </div>
          <div>
            <Button className="bg-red-500 text-white mt-3">Inactive</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

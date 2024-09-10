import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import productDetails1 from "../../assets/productDetails1.png";
import productDetails2 from "../../assets/productDetails2.png";
import productDetails3 from "../../assets/productDetails3.png";
import visitorChair from "../../assets/visitor-chair.png";
import { Button } from "antd";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [displayImage, setDisplayImage] = useState(productDetails3);

  const handleGoToBack = () => {
    navigate(-1);
  };

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

      <div className="grid grid-cols-2 mt-5">
        <div className="col-span-1">
          <div>
            <img src={displayImage} alt="" />
          </div>
          <div className="flex">
            <img
              className="w-20 h-20"
              src={productDetails3}
              onClick={() => setDisplayImage(productDetails3)}
              alt="visitor chair"
            />
            <img
              className="w-20 h-20"
              src={productDetails2}
              onClick={() => setDisplayImage(productDetails2)}
              alt="visitor chair"
            />
            <img
              className="w-20 h-20"
              src={productDetails1}
              onClick={() => setDisplayImage(productDetails1)}
              alt="visitor chair"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <div className="text-lg font-semibold">Visitor chair</div>
            <div className="flex gap-2">
              <div>Category</div>
              <div>Adhesive Granite and Natural Stones</div>
              <div>In Stock</div>
              <div>Unit : 15 PCS</div>
            </div>
            <div className="mt-3">Brand : AKS</div>
            <div className="my-4 border-t border-b py-4">
              Regular Price : 700
            </div>
            <div className="text-xs">
              Elevate your space with our premium chairs, crafted for comfort
              and style. Each piece combines ergonomic design with high-quality
              materials, ensuring exceptional support and durability. Perfect
              for any setting, our chairs enhance your decor while providing the
              ultimate in relaxation and sophistication. Experience the art of
              seating.
            </div>

            <div class="my-4 bg-[#F2F5FF] p-[14px] rounded-[10px]">
              <p class="text-[#4A72FF] text-[14px] font-semibold leading-6 flex justify-start items-center">
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
            <img src={visitorChair} className="w-24" alt="" />
            <div>
              <div className="text-lg font-semibold">Visitor chair</div>
              <div>Regular Price : 700</div>
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

import {
  faArrowLeft,
  faImage,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, DatePicker, Input, Select, Tabs, Upload } from "antd";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import placeholderImage from "../../assets/placeholder-image.png";
import TextArea from "antd/es/input/TextArea";

const TabContentAdvance = () => {
  return <TextArea rows={4} placeholder="Type Shipping/Delivery Notes" />;
};

const TabContentInventory = () => {
  return (
    <div className="flex gap-2">
      <div>
        <label htmlFor="">SKU</label>
        <Input disabled suffix={<FontAwesomeIcon icon={faInfo} />} />
      </div>
      <div>
        <label htmlFor="">Quantity</label>
        <Input placeholder="0" />
      </div>
      <div>
        <label htmlFor="">Unit Type</label>
        <Select placeholder="Select unit type" />
      </div>
    </div>
  );
};

const TabContentShipping = () => {
  return (
    <div>
      <div>
        <label htmlFor="">Weight(gm)</label>
        <Input placeholder="0" suffix={<FontAwesomeIcon icon={faInfo} />} />
      </div>
      <div className="flex gap-2 mt-2">
        <div>
          <Input placeholder="0" suffix={<FontAwesomeIcon icon={faInfo} />} />
          <label htmlFor="">Length</label>
        </div>
        <div>
          <Input placeholder="0" />
          <label htmlFor="">Width</label>
        </div>
        <div>
          <Input placeholder="0" />
          <label htmlFor="">Height</label>
        </div>
      </div>
    </div>
  );
};

const TabContentGeneral = () => {
  return (
    <div>
      <div className="flex gap-2">
        <div>
          <label htmlFor="">Regular Price</label>
          <Input placeholder="00.00" />
        </div>
        <div>
          <label htmlFor="">Sale Price</label>
          <Input placeholder="00.00" />
        </div>
        <div>
          <label htmlFor="">Discount Percentage</label>
          <Input placeholder="00%" disabled />
        </div>
        <div>
          <label htmlFor="">Schedule</label>
          <DatePicker />
        </div>
      </div>
      <div className="mt-3">
        <label htmlFor="">Product Short Description</label>
        <TextArea rows={4} />
      </div>
    </div>
  );
};

const CreateProduct = () => {
  const navigate = useNavigate();
  const editorRef = useRef();

  const handleGoToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const quill = new Quill(editorRef.current, {
      theme: "snow",
    });
  }, []);

  const items = [
    {
      key: "1",
      label: "General",
      children: <TabContentGeneral />,
    },
    {
      key: "2",
      label: "Inventory",
      children: <TabContentInventory />,
    },
    {
      key: "3",
      label: "Shipping",
      children: <TabContentShipping />,
    },
    {
      key: "4",
      label: "Advance",
      children: <TabContentAdvance />,
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="text-2xl font-semibold flex gap-2 items-center">
          <div
            onClick={handleGoToBack}
            className="w-10 h-10  flex justify-center items-center border rounded-full cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
          </div>
          <span className=" cursor-pointer" onClick={handleGoToBack}>
            Add Product
          </span>
        </div>
        <div className="flex gap-2">
          <Button className="text-primary text-lg font-semibold p-5">
            Save as Draft
          </Button>
          <Button className="bg-primary text-white text-lg font-semibold p-5">
            Send to Publish
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-2 bg-white rounded-md p-5">
          <div>
            <label htmlFor="name">Product Name</label>
            <Input
              placeholder="Name"
              size="large"
              id="name"
              className="mt-2 mb-3"
            />
          </div>
          <div>
            <label htmlFor="name">Product Description</label>
            <div id="editor" ref={editorRef}></div>
          </div>
          <div className="mt-5">
            <Tabs defaultActiveKey="1" items={items} size="large" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-5 rounded-md">
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="category">Product Category</label>
              <Select placeholder="Select Category" id="category" />
            </div>
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="brand">Brand Name</label>
              <Select placeholder="Select Brand" id="brand" />
            </div>
          </div>

          <div className="bg-white p-5 mt-5 rounded-md">
            <div className="flex flex-col gap-2 mb-3">
              <label htmlFor="image">Set Product Image</label>
              <Upload className="border rounded-md p-2 cursor-pointer">
                <span className="mr-2">
                  <FontAwesomeIcon icon={faImage} />
                </span>
                <span>Upload Image</span>
              </Upload>
              <div className="text-xs">Upload the image carefully | PNG</div>

              <img src={placeholderImage} className="w-40" alt="" />
              <div className="text-xs">Click the image to edit and update</div>
              <div className="text-red-500 underline font-semibold">Remove</div>
            </div>
          </div>
          <div className="bg-white p-5 mt-5 rounded-md">
            <div>Product Tag</div>
            <div className="flex items-center gap-3">
              <Input size="large" placeholder="Enter tag name" />
              <Button className="bg-primary text-white" size="large">
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Modal, Tag } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LAPPATO from "../../assets/LAPPATO.png";

const OrderDetails = () => {
  const [isCancelButtonModalOpen, setIsCancelButtonModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleGoToBack = () => {
    navigate(-1);
  };

  const showCancelButtonModal = () => {
    setIsCancelButtonModalOpen(true);
  };

  const handleOkOfCancelButtonModal = () => {
    setIsCancelButtonModalOpen(false);
  };
  const handleCancelOfCancelButtonModal = () => {
    setIsCancelButtonModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Cancel Order"
        open={isCancelButtonModalOpen}
        onOk={handleOkOfCancelButtonModal}
        onCancel={handleCancelOfCancelButtonModal}
        cancelText="No"
        okText="Yes"
      >
        <p>Are you sure to cancel this order?</p>
      </Modal>
      <div className="text-2xl font-semibold flex gap-2 items-center">
        <div
          onClick={handleGoToBack}
          className="w-10 h-10  flex justify-center items-center border rounded-full cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
        </div>
        <span className=" cursor-pointer" onClick={handleGoToBack}>
          Order Details
        </span>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-5">
        <div className="col-span-1">
          <div className="bg-white pb-3">
            <div className="bg-slate-200 w-full h-16 relative">
              <div className="rounded-full border border-white w-16 h-16 absolute bg-slate-200 top-6 left-6">
                <Avatar
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="pb-5 px-2">
              <div className="text-lg mt-5">Humayun Kabir </div>
            </div>
            <div className="px-3 mt-3">
              <div>kabir@gmail.com</div>
              <div>Dhaka North City, Dhaka</div>
            </div>
            <div className="px-3 mt-3">
              <Tag color="orange">Pending</Tag>
              <div>Products was ordered on</div>
              <div>04 Sep, 2024</div>
            </div>
            <div className="px-3 mt-3">
              <Tag color="volcano">Humayun Kabir </Tag>
              <div>Mirpur 14,Ibrahim pur bazar</div>
              <div>015********</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white p-5">
          <div className="text-lg font-semibold">Order Details</div>
          <div className="border rounded-md mt-4">
            <div className="font-semibold border-b px-3 py-1">
              Rohman Enterprise
            </div>
            <div className="text-blue-500 px-3 py-1">Order Id: IHB-82</div>
            <div className="text-sm border-b px-3 py-1">
              To track the delivery of your order
            </div>
            <div className="flex justify-between border-b px-3 py-1">
              <div>
                <span>04 Sep, 2024</span>
                <span className="text-red-500 ml-3">Processing</span>
              </div>
              <div>
                <Tag color="gold">Pending</Tag>
              </div>
            </div>
            <div className="flex justify-between border-b px-3 py-1">
              <div className="flex gap-2">
                <img
                  src={LAPPATO}
                  alt="LAPPATO"
                  className="w-16 h-14 rounded-md"
                />
                <div>
                  <div className="font-semibold">LAPPATO 6 SG-01</div>
                  <div className="text-sm text-blue-500">500</div>
                </div>
              </div>
              <div>
                <div className="flex gap-2 mb-2">
                  <div
                    onClick={showCancelButtonModal}
                    className="bg-red-500 text-white p-1 font-semibold cursor-pointer"
                  >
                    Cancel
                  </div>
                  <div className="bg-green-500 text-white p-1 font-semibold cursor-pointer">
                    Status Update
                  </div>
                </div>
                <div className="text-yellow-600">Pending</div>
              </div>
              <div>
                <table>
                  <tr>
                    <td>Total Amount:</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>Discount:</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td>Net Amount:</td>
                    <td>500</td>
                  </tr>
                </table>
              </div>
            </div>
            <div className="flex justify-end px-3 py-1">
              <table>
                <tr>
                  <td>1 Item. Total Amount :</td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>Discount:</td>
                  <td>0</td>
                </tr>
                <tr>
                  <td>Net Amount:</td>
                  <td>500</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;

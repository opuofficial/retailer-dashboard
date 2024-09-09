import {
  faMagnifyingGlass,
  faPaperclip,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Button, Input } from "antd";
import React from "react";
import AvatarIcon from "../../assets/avatar.jpg";

const LiveChat = () => {
  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Live Chat</div>
      <div className="md:grid grid-cols-3 gap-5">
        <div className="col-span-1 rounded-md p-5 bg-white mb-3 md:mb-0">
          <div className="text-lg mb-2 font-semibold">Message</div>
          <Input
            placeholder="Search by name"
            suffix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
          <hr className="my-3" />
          <div>
            <div className="flex gap-4 bg-primaryLight items-center p-2 rounded-md">
              <Avatar src={AvatarIcon} />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Nasiv</span>
                <span>😄</span>
              </div>
            </div>

            <div className="flex gap-4  items-center p-2 rounded-md">
              <Avatar src={AvatarIcon} />
              <div className="flex flex-col">
                <span className="text-md font-semibold">Opu</span>
                <span>hii</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 bg-white p-5">
          <div className="flex gap-4 items-center">
            <Badge dot status="success" size="default" offset={[-3, 30]}>
              <Avatar src={AvatarIcon} size="large" />
            </Badge>
            <div className="flex flex-col">
              <span className="text-lg">Nasiv</span>
              <span className="text-sm">nasiv@gmail.com</span>
            </div>
          </div>
          <hr className="my-3" />
          <div className="h-[55vh]">
            <div className="mb-3">
              <div className="w-2/3 bg-slate-50">
                <span className="p-2 inline-block">hiii</span>
              </div>
              <div className="text-xs ml-2 mt-1">11:46 AM</div>
            </div>
            <div className="mb-3">
              <div className="w-2/3 bg-slate-50">
                <span className="p-2 inline-block">😄</span>
              </div>
              <div className="text-xs ml-2 mt-1">10:08 PM</div>
            </div>
          </div>
          <hr className="my-3" />
          <div className="flex gap-1 items-center">
            <Button className="bg-primary text-white" size="large">
              <FontAwesomeIcon icon={faPaperclip} />
            </Button>
            <Input size="large" placeholder="Message" />
            <Button className="bg-primary text-white" size="large">
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;

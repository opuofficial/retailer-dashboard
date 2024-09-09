import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Layout, Menu, theme } from "antd";
import {
  faBars,
  faBarsStaggered,
  faBell,
  faCartShopping,
  faFile,
  faGauge,
  faGear,
  faMessage,
  faTableCellsLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { Header, Sider, Content } = Layout;
import GhorBari_Logo from "../assets/Ghorbari_Logo.svg";
import G_Logo from "../assets/G.svg";
import BSRM_Logo from "../assets/BSRM_Logo.svg";
import BSRM_Icon from "../assets/bsrm_icon.svg";
import { Dropdown, Avatar } from "antd";

const sidebarItems = [
  {
    key: "dashboard",
    icon: <FontAwesomeIcon icon={faGauge} />,
    label: <Link to={"/retailer/dashboard"}>Dashboard</Link>,
  },
  {
    key: "manage-products",
    icon: <FontAwesomeIcon icon={faCartShopping} />,
    label: "Manage Products",
    children: [
      {
        key: "all-products",
        icon: <FontAwesomeIcon icon={faBarsStaggered} />,
        label: "All Products",
      },
      {
        key: "pending-products",
        icon: <FontAwesomeIcon icon={faBarsStaggered} />,
        label: (
          <Link to={"/retailer/manage-products/pending-products"}>
            Pending Products
          </Link>
        ),
      },
    ],
  },
  {
    key: "manage-order",
    icon: <FontAwesomeIcon icon={faFile} />,
    label: <Link to={"/retailer/manage-order"}>Manage Order</Link>,
  },
  {
    key: "live-chat",
    icon: <FontAwesomeIcon icon={faMessage} />,
    label: <Link to={"/retailer/live-chat"}>Live Chat</Link>,
  },
  {
    key: "notification",
    icon: <FontAwesomeIcon icon={faBell} />,
    label: <Link to={"/retailer/notification"}>Notification</Link>,
  },
  {
    key: "report",
    icon: <FontAwesomeIcon icon={faFile} />,
    label: "Report",
    children: [
      {
        key: "order-list",
        icon: <FontAwesomeIcon icon={faBarsStaggered} />,
        label: <Link to={"/retailer/report/order-list"}>Order List</Link>,
      },
    ],
  },
  {
    key: "settings",
    icon: <FontAwesomeIcon icon={faGear} />,
    label: <Link to={"/retailer/settings"}>Settings</Link>,
  },
];

const items = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Logout",
  },
];

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1250);
  const [language, setLanguage] = useState("eng");
  const [showNotification, setShowNotification] = useState(false);
  const notificationBoxRef = useRef();
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleNotificationIconClick = () => {
    setShowNotification(!showNotification);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        showNotification &&
        notificationBoxRef.current &&
        !notificationBoxRef.current.contains(e.target)
      ) {
        setShowNotification(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => window.removeEventListener("click", handleOutsideClick);
  }, [showNotification]);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={80}
          width={310}
          style={{
            height: "100vh",
            background: "#fff",
            position: "sticky",
            left: 0,
            top: 0,
          }}
        >
          <div className="p-6 border border-slate-100">
            <img
              src={collapsed ? G_Logo : GhorBari_Logo}
              className="w-28"
              alt="GhorBari Logo"
            />
          </div>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["dashboard"]}
            items={sidebarItems}
            className={collapsed ? "p-2" : "p-6"}
          />
          <div
            style={{
              position: "fixed",
              display: "flex",
              alignItems: "end",
              bottom: 0,
              padding: "1.5rem",
            }}
          >
            {collapsed ? (
              <img src={BSRM_Icon} alt="BSRM Logo" />
            ) : (
              <div className="flex flex-col gap-1">
                <span className="text-xs">Powered by</span>
                <img src={BSRM_Logo} className="w-20" alt="BSRM Logo" />
              </div>
            )}
          </div>
        </Sider>
        <Layout className="bg-[#f9fafb]">
          <Header className="flex justify-between items-center bg-white shadow-sm py-8">
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faBars} />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "1.3rem",
              }}
            />

            {/* Language Button Group */}
            <div className="pr-6 flex items-center gap-6">
              <div className="cursor-pointer border-2 border-solid border-primary flex rounded-full overflow-hidden">
                <Button
                  style={{ borderRadius: 0, border: 0, fontWeight: "bold" }}
                  className={language == "bn" ? "bg-primary text-white" : ""}
                  onClick={() => changeLanguage("bn")}
                >
                  বাং
                </Button>
                <Button
                  style={{ borderRadius: 0, border: 0, fontWeight: "bold" }}
                  className={language == "eng" ? "bg-primary text-white" : ""}
                  onClick={() => changeLanguage("eng")}
                >
                  Eng
                </Button>
              </div>

              {/* Notification section */}
              <div className="relative pt-2" ref={notificationBoxRef}>
                <FontAwesomeIcon
                  className="text-xl cursor-pointer"
                  icon={faBell}
                  onClick={handleNotificationIconClick}
                />
                <div
                  className={`h-36 w-56 absolute z-10 bg-white shadow top-[100%] right-0 p-3 ${
                    !showNotification ? "hidden" : ""
                  }`}
                >
                  <div className="flex justify-between text-xs pb-3 border-b">
                    <div>Notifications</div>
                    <div>View All</div>
                  </div>

                  <div className="text-center font-semibold text-lg mt-5">
                    No Data
                  </div>
                </div>
              </div>

              <Dropdown
                menu={{
                  items,
                }}
                placement="bottomRight"
                className="cursor-pointer"
                arrow
              >
                <Avatar size="large" icon="R" alt="Rohman" />
              </Dropdown>
            </div>
          </Header>
          <Content className="p-6">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BaseLayout;

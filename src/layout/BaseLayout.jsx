import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { Button, Drawer, Layout, Menu, theme, Space } from "antd";
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
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const { Header, Sider, Content } = Layout;
import GhorBari_Logo from "../assets/Ghorbari_Logo.svg";
import G_Logo from "../assets/G.svg";
import BSRM_Logo from "../assets/BSRM_Logo.svg";
import BSRM_Icon from "../assets/bsrm_icon.svg";
import { Dropdown, Avatar } from "antd";
import { AuthContext } from "../providers/AuthProvider";
import NotificationDropdownContent from "../components/NotificationDropdownContent";

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
        label: (
          <Link to={"/retailer/manage-products/all-products"}>
            All Products
          </Link>
        ),
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

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1250);
  const [open, setOpen] = useState(false);
  // const [language, setLanguage] = useState("eng");
  const { user } = useContext(AuthContext);

  // console.log();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { logoutUser } = useContext(AuthContext);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    // handleResize();

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
          className="hidden sm:block"
        >
          <div className="p-6">
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
              bottom: -10,
              padding: "1.5rem",
            }}
          >
            {collapsed ? (
              <img src={BSRM_Icon} alt="BSRM Logo" />
            ) : (
              <div className="flex flex-col gap-1">
                <span className="text-xs">Powered by</span>
                <img src={BSRM_Logo} className="w-16" alt="BSRM Logo" />
              </div>
            )}
          </div>
        </Sider>
        <Drawer
          width={310}
          className="sm:hidden"
          open={open}
          onClose={() => setOpen(false)}
          placement="left"
        >
          <div className="p-6">
            <img src={GhorBari_Logo} className="w-28" alt="GhorBari Logo" />
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
        </Drawer>
        <Layout className="bg-[#f9fafb]">
          <Header className="flex justify-between items-center bg-white shadow-sm px-5">
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faBars} />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "1.3rem",
              }}
              className="hidden sm:flex items-center"
            />
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faBars} />}
              onClick={() => setOpen(!open)}
              style={{
                fontSize: "1.3rem",
              }}
              className="sm:hidden"
            />

            {/* Language Button Group */}
            <div className="pr-0 flex items-center gap-6">
              {/* <div className="cursor-pointer border-2 border-solid border-primary flex rounded-full overflow-hidden">
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
              </div> */}

              {/* Notification section */}
              <Dropdown
                dropdownRender={() => <NotificationDropdownContent />}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <FontAwesomeIcon
                      className="text-xl cursor-pointer"
                      icon={faBell}
                    />
                  </Space>
                </a>
              </Dropdown>

              <Dropdown
                trigger={"click"}
                menu={{
                  items: [
                    {
                      key: "1",
                      label: "Profile",
                    },
                    {
                      key: "2",
                      label: <div onClick={logoutUser}>Logout</div>,
                    },
                  ],
                }}
                placement="bottomRight"
                className="cursor-pointer"
                arrow
              >
                <div className="flex gap-2 items-center">
                  <Avatar
                    size="large"
                    icon={<FontAwesomeIcon icon={faUser} />}
                  />
                  <div className="text-lg font-semibold">
                    {user.user.ownerName}
                  </div>
                </div>
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

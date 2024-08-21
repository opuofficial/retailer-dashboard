import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
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

const sidebarItems = [
  {
    key: "dashboard",
    icon: <FontAwesomeIcon icon={faGauge} />,
    label: "Dashboard",
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
        label: "Pending Products",
      },
    ],
  },
  {
    key: "manage-order",
    icon: <FontAwesomeIcon icon={faFile} />,
    label: "Manage Order",
  },
  {
    key: "live-chat",
    icon: <FontAwesomeIcon icon={faMessage} />,
    label: "Live Chat",
  },
  {
    key: "notification",
    icon: <FontAwesomeIcon icon={faBell} />,
    label: "Notification",
  },
  {
    key: "settings",
    icon: <FontAwesomeIcon icon={faGear} />,
    label: "Settings",
  },
];

const BaseLayout = () => {
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1250);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < 1250);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={<FontAwesomeIcon icon={faBars} />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "1.3rem",
                marginLeft: "2rem",
              }}
            />
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

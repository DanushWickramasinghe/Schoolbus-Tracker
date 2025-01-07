import React, { Suspense, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  SettingOutlined,
  CarOutlined,
  UserOutlined,
  UserSwitchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Button, Menu, message } from "antd";

import { logout } from "../../apis/auth.api";

const General = React.lazy(() => import("../admin/general"));
const VehicleRegistrationForm = React.lazy(() =>
  import("../user/busOwners/vehicleRegister")
);
const ViewPassengers = React.lazy(() =>
  import("../user/busOwners/viewPassengers")
);

const RegisterPage = React.lazy(() => import("../common/register"));

const componentsMap = {
  1: <General />,
  2: <VehicleRegistrationForm />,
  3: <ViewPassengers />,
  4: <RegisterPage />,
  5: <ViewPassengers />,
  8: <RegisterPage />,
};

const horizontalItems = [
  {
    label: "Navigation One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Navigation Two",
    key: "app",
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: "Navigation Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
          {
            label: "Option 2",
            key: "setting:2",
          },
        ],
      },
      {
        type: "group",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  // {
  //   key: 'alipay',
  //   label: (
  //     <a href='https://ant.design' target='_blank' rel='noopener noreferrer'>
  //       Navigation Four - Link
  //     </a>
  //   ),
  // },
  {
    label: "Logout",
    key: "logout",
    icon: <LogoutOutlined />,
  },
];

const items = [
  {
    key: "1",
    icon: <PieChartOutlined />,
    label: "General",
  },
  {
    key: "sub1",
    icon: <CarOutlined />,
    label: "Bus",
    children: [
      {
        key: "8",
        label: "Register Driver",
      },
      {
        key: "2",
        label: "Register Bus",
      },
      {
        key: "9",
        label: "View Driver",
      },
      {
        key: "3",
        label: "View Bus",
      },
    ],
  },
  {
    key: "sub2",
    icon: <UserOutlined />,
    label: "Passenger",
    children: [
      {
        key: "4",
        label: "Register Passenger",
      },
      {
        key: "5",
        label: "View Passenger",
      },
    ],
  },
  {
    key: "sub3",
    label: "Admin",
    icon: <UserSwitchOutlined />,
    children: [
      {
        key: "6",
        label: "Register Admin",
      },
      {
        key: "7",
        label: "View Admin",
      },
    ],
  },
  // {
  //   key: 'sub2',
  //   label: 'Navigation Two',
  //   icon: <AppstoreOutlined />,
  //   children: [
  //     {
  //       key: '9',
  //       label: 'Option 9',
  //     },
  //     {
  //       key: '10',
  //       label: 'Option 10',
  //     },
  //     {
  //       key: 'sub3',
  //       label: 'Submenu',
  //       children: [
  //         {
  //           key: '11',
  //           label: 'Option 11',
  //         },
  //         {
  //           key: '12',
  //           label: 'Option 12',
  //         },
  //       ],
  //     },
  //   ],
  // },
];

const DashBoard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [verticalSelected, setVerticalSelected] = useState("1");

  const handlelogout = () => {
    try {
      logout();
      message.success("Logged out successfully");
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      message.error("Error logging out");
    }
  };

  const handleHorizontalClick = (key) => {
    switch (key) {
      case "logout":
        handlelogout();
        break;
      default:
        break;
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-between",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            margin: 8,
            width: 40,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <h1 style={{ margin: 8, fontSize: 25, marginLeft: 18 }}>
          School Bus Tracker
        </h1>
        <Menu
          onClick={({ key }) => handleHorizontalClick(key)}
          mode="horizontal"
          items={horizontalItems}
          style={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "flex-end",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          onClick={({ key }) => setVerticalSelected(key)}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          style={{
            flexGrow: 1, // Make Menu take up remaining space
            minHeight: 0, // Ensure it can shrink if needed
            // width: collapsed ? 80 : 256,
            maxWidth: collapsed ? 70 : 256,
          }}
        />
        <div style={{ flexGrow: 1, padding: 16, overflow: "auto" }}>
          <Suspense fallback={<div>Loading...</div>}>
            {componentsMap[verticalSelected] || (
              <p>Please select a valid option.</p>
            )}
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default DashBoard;

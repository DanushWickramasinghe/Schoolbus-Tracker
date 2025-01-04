import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';

const horizontalItems = [
  {
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    children: [
      {
        type: 'group',
        label: 'Item 1',
        children: [
          {
            label: 'Option 1',
            key: 'setting:1',
          },
          {
            label: 'Option 2',
            key: 'setting:2',
          },
        ],
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
  },
];

const items = [
  {
    key: '1',
    icon: <PieChartOutlined />,
    label: 'Option 1',
  },
  {
    key: '2',
    icon: <DesktopOutlined />,
    label: 'Option 2',
  },
  {
    key: '3',
    icon: <ContainerOutlined />,
    label: 'Option 3',
  },
  {
    key: 'sub1',
    label: 'Navigation One',
    icon: <MailOutlined />,
    children: [
      {
        key: '5',
        label: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
          },
        ],
      },
    ],
  },
];

const DashBoard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100vw', // Set width to screen width
        height: '100vh', // Set height to screen height
      }}
    >
      <div
        style={{
          display: 'flex',
          width: '100vw',
          justifyContent: 'space-between',
        }}
      >
        <Button
          type='primary'
          onClick={toggleCollapsed}
          style={{
            margin: 8,
            // marginBottom: 16,
            width: 40,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        {/* <h1 style={{margin:3}}>School Bus Tracker</h1> */}
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode='horizontal'
          items={horizontalItems}
          style={{
            display: 'flex',
            flexGrow: 1, // Make Menu take up remaining space
            justifyContent: 'flex-end',
          }}
          // theme='dark'
        />
      </div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={collapsed}
        items={items}
        style={{
          flexGrow: 1, // Make Menu take up remaining space
          minHeight: 0, // Ensure it can shrink if needed
          maxWidth: 240, // Set max width when collapsed

        }}
      />
    </div>
  );
};
export default DashBoard;

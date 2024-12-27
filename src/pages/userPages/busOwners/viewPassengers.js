/* Bus owners can view passengers registered for each of their vehicles here.*/
/* Functions related to removing current passengers, accepting new passengers */

import React, { useState, useEffect } from 'react';
import { getOwnedBuses, getPassengers } from '../../../apis/busOwner.api';
import { DownOutlined } from '@ant-design/icons';
import { Badge, Dropdown, Space, Table } from 'antd';

const ViewPassengers = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    try {
      getOwnedBuses().then((data) => {
        setVehicles(data);
      });
    } catch (error) {
      console.error('Error fetching owned buses:', error);
    }
  }, []);

  const handleViewPassengers = async (busId) => {
    try {
      const passengers = await getPassengers(busId);
      console.log(passengers);
    } catch (error) {
      console.error('Error fetching passengers:', error);
    }
  };

  const items = [
    {
      key: '1',
      label: 'Action 1',
    },
    {
      key: '2',
      label: 'Action 2',
    },
  ];

  const expandDataSource = Array.from({
    length: 3,
  }).map((_, i) => ({
    key: i.toString(),
    date: '2014-12-24 23:12:00',
    name: 'This is production name',
    upgradeNum: 'Upgraded: 56',
  }));

  const dataSource = Array.from({
    length: 3,
  }).map((_, i) => ({
    key: i.toString(),
    name: 'Screen',
    platform: 'iOS',
    version: '10.3.4.5654',
    upgradeNum: 500,
    creator: 'Jack',
    createdAt: '2014-12-24 23:12:00',
  }));

  const expandColumns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      key: 'state',
      render: () => <Badge status='success' text='Finished' />,
    },
    {
      title: 'Upgrade Status',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum',
    },
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <Space size='middle'>
          <a>Pause</a>
          <a>Stop</a>
          <Dropdown
            menu={{
              items,
            }}
          >
            <a>
              More <DownOutlined />
            </a>
          </Dropdown>
        </Space>
      ),
    },
  ];

  const columns = [
    {
      title: 'Vehicle Number',
      dataIndex: 'vehicleNumber',
      key: 'vehicleNumber',
    },
    {
      title: 'Vehicle Owner',
      dataIndex: 'vehicleOwner',
      key: 'vehicleOwner',
    },
    {
      title: 'Owner NIC',
      dataIndex: 'ownerNIC',
      key: 'ownerNIC',
    },
    {
      title: 'Vehicle Type',
      dataIndex: 'vehicleType',
      key: 'vehicleType',
    },
    {
      title: 'Vehicle Model',
      dataIndex: 'vehicleModel',
      key: 'vehicleModel',
    },
    {
      title: 'Action',
      key: 'operation',
      render: () => (
        <Space size='middle'>
          <a>Update</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const expandedRowRender = () => (
    <Table
      columns={expandColumns}
      dataSource={expandDataSource}
      pagination={false}
    />
  );

  return (
    <div className='viewVehicles'>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ['0'],
        }}
        dataSource={dataSource}
      />
    </div>
  );
};

export default ViewPassengers;

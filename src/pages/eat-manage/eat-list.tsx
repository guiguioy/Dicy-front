import { Tag, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getActivetyList, getFoodList } from '../touManageTable/touManage.service';

const EatManage: React.FC<any> = (props: any) => {
  const [data, setData] = useState<any[]>([]);

  const pagination = {
    hideOnSinglePage: true,
    pageSize: 10000,
  };
  const columns = [
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
      render: (text:any) => <a>{text}</a>,
    },
    {
      title: '创建人',
      dataIndex: 'user',
      key: 'user',
    },
    {
      title: '创建时间',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '状态',
      key: 'status',
      dataIndex: 'status',
      render: (status:any) => (
        <Tag color={status === 'active' ? 'geekblue' : 'volcano'} key={status}>
          {status === 'active' ? '启用' : '禁用'}
        </Tag>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (text:any, record:any) => (
        <Space size="middle">
          <a>编辑</a>
          <a>{record.status === 'active' ? '禁用' : '启用'}</a>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    initInfo();
  }, []);

  const initInfo = () => {
    getFoodList().then((res) => {
      console.info(res);
      const list = [];
      for (let index = 0; index < res.length; index++) {
        const o = res[index];
        list.push({
          name: o,
          date: '2022/2/2',
          user: 'tom',
          key: index,
          status: index % 2 === 0 ? 'active' : 'disabled',
        });
      }
      setData(list);
    });
  };

  return (
    <Table
      columns={columns}
      pagination={pagination}
      dataSource={data}
      bordered={true}
    />
  );
};
export default React.memo(EatManage);

import { Tag, Space, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { getActivetyList } from '../touManageTable/touManage.service';

const ActiveManage: React.FC<any> = (props: any) => {
  const [data, setData] = useState<any[]>([]);

  const date = [
    '打游戏',
    '玩桌游',
    '买游戏',
    '搞男酮',
    '吃炒饭',
    '吃火锅',
    '吃烧烤',
    '吃肥宅快乐餐',
    '吃甜食',
    '喝酒',
    '聚会',
    '上班摸鱼',
    '请假在家',
    '带薪拉屎',
    '上班聊微信',
    '调戏骰娘',
    '出警emo',
    '出警二郎腿',
    '运动',
    '冲动消费',
    '淘宝购物',
    '吸猫吸狗',
    '谈恋爱',
    '联系旧友',
    '买彩票',
    '参与抽奖',
  ]

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
    // getActivetyList().then((res) => {
      const res = date;
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
    // });
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
export default React.memo(ActiveManage);

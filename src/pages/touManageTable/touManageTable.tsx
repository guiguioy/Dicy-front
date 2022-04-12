import { Tag, Space, Table, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { colorList } from './dataMock';
import { getActivetyList, getFoodList, getGameList } from './touManage.service';
import TagEdit from './tagEdit';

const TouManageTable: React.FC<any> = (props: any) => {
  const [editModalVisit, setEditModalVisit] = useState(false);
  const [tableData, setTableData] = useState([
    {
      key: '1',
      name: '抽奖活动',
      tags: [],
    },
    {
      key: '2',
      name: '抽奖游戏',
      tags: [],
    },
    {
      key: '3',
      name: '吃什么',
      tags: [],
    },
  ]);
  const columns = [
    {
      title: 'DLC名称',
      dataIndex: 'name',
      key: 'name',
      width: 150,
    },
    {
      title: '包含标签',
      key: 'tags',
      dataIndex: 'tags',
      render: (tags: any, _: any, index: number) => (
        <>
          {tags.map((tag: any) => {
            return (
              <Tag
                color={colorList[index]}
                key={tag.id}
                style={{ marginBottom: '6px' }}
              >
                {tag.activity || tag.game || tag.food}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      width: 120,
      render: (text: any, record: any) => (
        <Space size="middle">
          <a onClick={() => setEditModalVisit(true)}>编辑</a>
          {/* <a>删除</a> */}
        </Space>
      ),
    },
  ];

  useEffect(() => {
    initInfo();

  }, []);

  const initInfo = () => {
    const cache = [];
    const p1 = new Promise((resolve, reject) => {
      getActivetyList().then(
        (res) => {
          console.info(res);
          res.code === 200 ? resolve(res) : reject();
        },
        (err) => {
          reject();
        },
      );
    });
    const p2 = new Promise((resolve, reject) => {
      getGameList().then(
        (res) => {
          console.info(res);
          res.code === 200 ? resolve(res) : reject();
        },
        (err) => {
          reject();
        },
      );
    });
    const p3 = new Promise((resolve, reject) => {
      getFoodList().then(
        (res) => {
          console.info(res);
          res.code === 200 ? resolve(res) : reject();
        },
        (err) => {
          reject();
        },
      );
    });
    Promise.all([p1, p2, p3]).then((res: any) => {
      console.info(res);
      const cache = [
        {
          key: '1',
          name: '抽奖活动',
          tags: res[0],
        },
        {
          key: '2',
          name: '抽奖游戏',
          tags: res[1],
        },
        {
          key: '3',
          name: '吃什么',
          tags: res[2],
        },
      ];
      setTableData(cache);
    });
  };

  return (
    <div>
      <Table columns={columns} dataSource={tableData} pagination={false} />
      <Modal
        title="Basic Modal"
        visible={editModalVisit}
        // onOk={handleOk}
        // onCancel={handleCancel}
      >
        <TagEdit></TagEdit>
      </Modal>
    </div>
  );
};
export default React.memo(TouManageTable);

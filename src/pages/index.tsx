import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from './index.less';
import { SettingOutlined } from '@ant-design/icons';
import ActiveManage from './active-manage/active-list';
import GameManage from './game-manage/game-list';
import EatManage from './eat-manage/eat-list';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const IndexPage: React.FC<any> = (props: any) => {
  const [state, setState] = useState({ collapsed: false });
  const [selectkey, setSelectkey] = useState(1);
  const { collapsed } = state;

  const handleClick = (e: any) => {
    setSelectkey(e.key);
  };

  const onCollapse = (collapsed: any) => {
    console.log(collapsed);
    setState({ collapsed });
  };

  useEffect(() => {
    console.info('????');
    menuContent();
  }, [selectkey]);

  const menuContent = () => {
    switch (selectkey) {
      case 1:
        return <ActiveManage></ActiveManage>;
      case 2:
        return <GameManage></GameManage>;
      case 3:
        return <EatManage></EatManage>;
      default:
        break;
    }
  };

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className={styles.logo} />
          <Menu
            theme="dark"
            onClick={handleClick}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
          >
            <SubMenu
              key="sub1"
              icon={<SettingOutlined />}
              title="油盐社成都聚会项目组🤺"
            >
              <Menu.ItemGroup key="g1" title="骰娘DLC配置">
                <Menu.Item key="1">抽奖活动</Menu.Item>
                <Menu.Item key="2">游戏列表</Menu.Item>
                <Menu.Item key="3">吃什么</Menu.Item>
                {/* <Menu.Item key="2">Option 2</Menu.Item> */}
              </Menu.ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className={styles.siteLayoutBackground}
            style={{ padding: 0 }}
          />
          <Content style={{ margin: '24px' }}>
            {/* {menuContent()} */}
            <ActiveManage></ActiveManage>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            骰娘骰骰骰 ©2021 Created by ap
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default React.memo(IndexPage);

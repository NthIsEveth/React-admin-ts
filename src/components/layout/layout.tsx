import { Layout, Space, theme } from "antd";
import React, { useState } from "react";
import { SideMenu } from "../sideMenu/sideMenu";
import logo from '@/assets/images/logo.png';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
import './layout.less';

const Main: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null} collapsible collapsed={collapsed}
      >
        <div className="logo"></div>
        <SideMenu />
      </Sider>
      <Layout >
        <Header
          style={{ background: colorBgContainer, padding: '0 24px' }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @TS BASEED REACT ADMIN
        </Footer>
      </Layout>
    </Layout>
  )
};
export default Main;
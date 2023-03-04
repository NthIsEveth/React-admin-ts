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
import SideHead from "./logo/sideHeader";
import { routes } from "@/router/baseRoutes";
import { convertRouteToMenu } from "@/util/menu";
import { Outlet } from "react-router";

const Main: React.FC = () => {
  const { token: { colorBgContainer } } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const menus = convertRouteToMenu(routes[0].children);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        trigger={null} collapsible collapsed={collapsed}
      >
        <SideHead collpased={collapsed} />
        <SideMenu menus={menus} />
      </Sider>
      <Layout >
        <Header
          style={{ background: colorBgContainer, padding: '0 24px' }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            style: { fontSize: '18px', color: 'black' },
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
          <Outlet/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          @TS BASEED REACT ADMIN
        </Footer>
      </Layout>
    </Layout>
  )
};
export default Main;
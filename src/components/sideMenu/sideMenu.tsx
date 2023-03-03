import { Menu, MenuProps } from "antd"
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';

import MenuItem from "antd/es/menu/MenuItem";

type MenuItem = Required<MenuProps>['items'][number];
const menuList: MenuProps['items'] = [
  {
    key: 1,
    icon: <AppstoreOutlined/>,
    label: '配置管理',
  }
];
const menuClick = (e) => {
  console.log(e)
}
export const SideMenu:React.FC = () => (
  <Menu
    items={ menuList }
    theme="dark"
    onClick={ menuClick }
  />
)
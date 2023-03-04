import { Menu, MenuProps } from "antd"
type MenuItems = Required<MenuProps>['items'];

const menuClick = (e) => {
  console.log(e.item.props.path);
}
export const SideMenu:React.FC<{ menus: MenuItems}> = (props) => (
  <Menu
    items={ props.menus }
    theme="dark"
    onClick={ menuClick }
    mode="inline"
  />
)
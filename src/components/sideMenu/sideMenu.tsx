import { Menu, MenuProps } from "antd"

type MenuItem = Required<MenuProps>['items'][number];
type MenuList = {
  path: string,
  name: string,
  parentId?:string,
  icon: string
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
};
const SideMenu:React.FC<MenuList> = (menulist) => (
  <Menu
    items={}
  />
)
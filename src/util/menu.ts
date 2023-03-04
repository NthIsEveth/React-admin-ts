import { ExtendRoute } from "@/router/baseRoutes";
import { MenuProps } from "antd";
type ConvertRouteToMenu = (routes: ExtendRoute[]) => MenuProps['items']
export const convertRouteToMenu:ConvertRouteToMenu = (routes) => {
  return routes.map(({ path, label, icon, children}, key) => ({
    key,
    path,
    label,
    icon,
    children: children && children.length > 0?  convertRouteToMenu(children) : undefined
  }))
};
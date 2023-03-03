import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { routes } from './router/baseRoutes';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import { ConfigProvider } from "antd";
const hashRoutes = createHashRouter(routes);
const root = createRoot(document.getElementById('appContainer'));
root.render(
  <ConfigProvider locale={ zhCN }>
    <RouterProvider router={ hashRoutes }></RouterProvider>
  </ConfigProvider>
)
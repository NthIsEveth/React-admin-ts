import { createHashRouter, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import { routes } from './router/baseRoutes';
import 'antd/dist/reset.css';
const hashRoutes = createHashRouter(routes);
const root = createRoot(document.getElementById('appContainer'));
root.render(<RouterProvider router={ hashRoutes }></RouterProvider>)
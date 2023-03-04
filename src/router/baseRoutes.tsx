import React, { Children } from "react";
import { IndexRouteObject, NonIndexRouteObject, Outlet, RouteObject } from "react-router";
import { BankOutlined, CiOutlined } from '@ant-design/icons';
import MainLayout from '@/components/layout/layout'
import Agent from "@/views/agent/agent";

// 为了扩展个属性是真费劲
type Extended = { icon?: React.ReactNode, label?: string } & RouteObject;
type ExtendNonIndex =Omit<NonIndexRouteObject, 'children'> & { children?: Extended[]}
export type ExtendRoute = (IndexRouteObject | ExtendNonIndex) & { icon?: React.ReactNode, label?: string };

export const routes = [
  {
    path: '/',
    element: <MainLayout/>,
    label: '首页',
    children: [
      {
        path: '/abc',
        label: '商户管理',
        icon: <CiOutlined />,
        children: [
          {
            path: 'watting',
            element: <Agent/>,
            label: '待审核商户'
          }
        ]
      }
    ]
  },
];

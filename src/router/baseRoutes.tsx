import React from "react";
import type { RouteObject } from "react-router";
// import Main from "@/components/layout/layout";
const Test = React.lazy(() => import('@/components/layout/layout'));

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <Test/>
  }
]
import type { RouteObject } from "react-router";
import { Main } from "@/components/main";

export const routes:RouteObject[] = [
  {
    path: '/',
    element: <Main/>
  }
]
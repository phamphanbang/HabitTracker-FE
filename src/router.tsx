// src/router.tsx
import { createBrowserRouter } from "react-router";
import Layout from "@/layouts/Layout";
import Login from "@/features/login";
import Home from "@/features/home";
import About from "@/features/about";
import NotFound from "@/features/notFound";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

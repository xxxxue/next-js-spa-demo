import { lazy } from "react";
import { RouterProvider, createHashRouter as createRouter } from "react-router-dom";

let Login = lazy(() => import("./Login"));
let Layout = lazy(() => import("./Layout"));
let Home = lazy(() => import("./Home"));
let Log = lazy(() => import("./Log"));

let router = createRouter([
  {
    path: "/login",
    element: <Login />,
    loader: () => {
      return "i am loder data";
    },
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/log",
        element: <Log />,
      },
      {
        path: "*",
        element: (
          <>
            <h1>error 404</h1>
          </>
        ),
      },
    ],
  },
]);
export default function MyRouter() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

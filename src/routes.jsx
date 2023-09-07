import { createBrowserRouter } from "react-router-dom";
import Main from "./components/layout/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statistics/Statistics";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
    ],
  },
]);

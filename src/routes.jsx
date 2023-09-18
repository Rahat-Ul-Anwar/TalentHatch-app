import { createBrowserRouter } from "react-router-dom";
import Main from "./components/layout/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home/Home";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Statistics from "./components/Statistics/Statistics";
import JobDetails from "./components/Home/jobDetails/jobDetails";
import { getJobsData } from "./Loader/getJobsData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: getJobsData,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
      },

      {
        path: "/job/:jobId",

        element: <JobDetails></JobDetails>,
        loader: () => fetch()
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

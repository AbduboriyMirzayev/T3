import Login from "./containers/Login";
import ErrorPage from "./containers/ErrorPage";

const routes = [
  {
    component: Homes,
    exact: true,
    path: ["/homes"],
    title: "Homes",
  },
  {
    component: ErrorPage,
    exact: true,
    path: ["/error"],
    title: "error",
  },
];

export default routes;

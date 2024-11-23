import { type RouteConfig } from "@react-router/dev/routes";
// import { flatRoutes } from "@react-router/fs-routes";
import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/about.tsx"),
] satisfies RouteConfig;
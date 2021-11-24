import Photos from "./features/photos/Photos";
import Users from "./features/users/Users";
import Settings from "./features/settings/Settings";
const dashboardRoutes = [
  {
    path: "/photos",
    name: "Photos",
    icon:  "nc-icon nc-album-2",
    component:Photos,
    layout: "/admin",
  },
  {
    path: "/users",
    name: "Users",
    icon:  "nc-icon nc-badge",
    component:Users,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Settings",
    icon:  "nc-icon nc-settings-gear-64",
    component:Settings,
    layout: "/admin",
  },
];

export default dashboardRoutes;

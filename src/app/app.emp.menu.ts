import { MenuItem } from "../fw/services/menu.service";

export let empMenu: Array<MenuItem> = [
  {
    text: "Dashboard",
    icon: "glyphicon-dashboard",
    route: "/authenticated/dashboard",
    submenu: null
  },
  {
    text: "Profile",
    icon: "glyphicon-user",
    route: "/authenticated/profile-detail",
    submenu: null
  },
  {
    text: "Job Admin",
    icon: "glyphicon-cog",
    route: "/authenticated/job-admin",
    submenu: null
  }
];

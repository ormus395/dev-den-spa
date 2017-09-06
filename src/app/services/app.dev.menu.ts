import { MenuItem } from '../../fw/services/menu.service';

export let devMenu: Array<MenuItem> = [
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
        text: "Open Jobs", 
        icon: "glyphicon-briefcase", 
        route: "/authenticated/job-list",
        submenu: null
    },
    { 
        text: "Skills", 
        icon: "glyphicon-education", 
        route: "/authenticated/skills", 
        submenu: null 
    }
];
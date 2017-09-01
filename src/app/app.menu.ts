import { MenuItem } from '../fw/services/menu.service';

export let initialMenuItems: Array<MenuItem> = [
    { 
        text: "Dashboard", 
        icon: "glyphicon-dashboard", 
        route: "/authenticated/dashboard", 
        submenu: null 
    }, 
    { 
        text: "Profile", 
        icon: "glyphicon-user", 
        route: "/authenticated/profile", 
        submenu: null 
    }, 
    { 
        text: "Open Jobs", 
        icon: "glyphicon-briefcase", 
        route: "/authenticated/job-list",
        submenu: null
    },

    { 
        text: "Job Admin", 
        icon: "glyphicon-cog",  
        route: "/authenticated/job-admin", 
        submenu: null
    }, 
    { 
        text: "Skills", 
        icon: "glyphicon-education", 
        route: "/authenticated/skills", 
        submenu: null 
    }
];
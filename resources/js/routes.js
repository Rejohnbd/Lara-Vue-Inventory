let login = require("./components/auth/login.vue").default;
let register = require("./components/auth/register.vue").default;
let forget = require("./components/auth/forget.vue").default;
let logout = require("./components/auth/logout.vue").default;
// End Authentication
let home = require("./components/home.vue").default;
// Employee
let storeemployee = require("./components/employee/create.vue").default;
let employee = require("./components/employee/index.vue").default;

export const routes = [
    { path: "/", component: login, name: "/" },
    { path: "/register", component: register, name: "register" },
    { path: "/forget", component: forget, name: "forget" },
    { path: "/logout", component: logout, name: "logout" },
    { path: "/home", component: home, name: "home" },

    {
        path: "/store-employee",
        component: storeemployee,
        name: "store-employee",
    },
    {
        path: "/employee",
        component: employee,
        name: "employee",
    },
];

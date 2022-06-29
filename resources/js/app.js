require("./bootstrap");

// window.Vue = require('vue');
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// Route Imported
import { routes } from "./routes";

// Import User Class
import User from "./helpers/User";
window.User = User;

const router = new VueRouter({
    routes,
    mode: "history",
});

const app = new Vue({
    router,
    el: "#app",
});

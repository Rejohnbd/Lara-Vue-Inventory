require("./bootstrap");

// window.Vue = require('vue');
import Vue from "vue";
import VueRouter from "vue-router";
import Swal from "sweetalert2";

Vue.use(VueRouter);

// Route Imported
import { routes } from "./routes";

// Import User Class
import User from "./helpers/User";
window.User = User;

// Sweet Alert Start
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
});

window.Toast = Toast;
// End  Sweet Alert

const router = new VueRouter({
    routes,
    mode: "history",
});

const app = new Vue({
    router,
    el: "#app",
});

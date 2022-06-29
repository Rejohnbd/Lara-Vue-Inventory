require("./bootstrap");

// window.Vue = require('vue');
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
    routes,
});

const app = new Vue({
    el: "#app",
});

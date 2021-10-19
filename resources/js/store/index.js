import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import order from "./order"
import user from "./user";
import product from "./product";
import notification from "./notification";

import VueCookies from 'vue-cookies';
import category from "./category";

Vue.use(VueCookies);
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        errors: []
    },

    getters: {
        errors: state => state.errors
    },

    mutations: {
        setErrors(state, errors) {
            state.errors = errors;
        }
    },

    actions: {},

    modules: {
        auth,
        order,
        product,
        user,
        category,
        notification,
    }
});

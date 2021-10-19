import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const guest = (to, from, next) => {
    if (!localStorage.getItem("authToken")) {
        return next();
    } else {
        return next("/");
    }
};
const auth = (to, from, next) => {
    if (localStorage.getItem("authToken")) {
        return next();
    } else {
        return next("/login");
    }
};
const routes = [
    {
        path: '/register',
        name: 'Register',
        component: () => import('./pages/Register.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/forgot-password',
        name: 'forgot-password',
        component: () => import('./pages/ForgotPassword.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('./pages/Home.vue')
    },
    {
        path: '/dash',
        name: 'Dashboard',
        component: () => import('./pages/admin/Dashboard.vue')
    },
    {
        path: '/active',
        name: 'ActiveOrders',
        component: () => import('./pages/admin/ActiveOrder.vue')
    },
    {
        path: '/unActive',
        name: 'UnActiveOrders',
        component: () => import('./pages/admin/UnActiveOrder.vue')
    },
    {
        path: '/refused',
        name: 'RefusedOrders',
        component: () => import('./pages/admin/RefusedOrder.vue')
    },
    {
        path: '/myOrders',
        name: 'Orders',
        component: () => import('./pages/user/myOrder.vue')
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('./pages/admin/Product.vue')
    },
    {
        path: '/activate/',
        name: 'Active',
        component: () => import('./pages/user/ActiveAccount.vue')
    },
    {
        path: '/createProduct',
        name: 'createProduct',
        component: () => import('./pages/admin/CreateProduct.vue')
    },
    {
        path: '/editProduct/:id',
        name: 'EditProduct',
        component: () => import('./pages/admin/EditProduct.vue')
    },
    {
        path: '/users',
        name: 'Users',
        component: () => import('./pages/admin/ShowUsers.vue')
    },
    {
        path: '/accountUser/:userId',
        name: 'showUsers',
        component: () => import('./pages/admin/ViewUser.vue')
    },
    {
        path: '/verify',
        name: 'Verify',
        component: () => import('./pages/ForgotPassword.vue')
    },
    {
        path: '/resetPassword/:token',
        name: 'resetPassword',
        component: () => import('./pages/ResetPassword.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('./pages/user/Profile.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router;




// import VueRouter from 'vue-router'
// // Pages
// import Home from './pages/Home'
// import Register from './pages/Register'
// import Login from './pages/Login'
// // import Dashboard from './pages/user/Dashboard'
// import AdminDashboard from './pages/admin/Dashboard'
// // Routes
// const routes = [
//     {
//         path: '/',
//         name: 'home',
//         component: Home,
//         meta: {
//             auth: undefined
//         }
//     },
//     {
//         path: '/register',
//         name: 'register',
//         component: Register,
//         meta: {
//             auth: false
//         }
//     },
//     {
//         path: '/login',
//         name: 'login',
//         component: Login,
//         meta: {
//             auth: false
//         }
//     },
//     // USER ROUTES
//     // {
//     //     path: '/dashboard',
//     //     name: 'dashboard',
//     //     component: Dashboard,
//     //     meta: {
//     //         auth: true
//     //     }
//     // },
//     // ADMIN ROUTES
//     {
//         path: '/admin',
//         name: 'admin.dashboard',
//         component: AdminDashboard,
//         meta: {
//             auth: {roles: 'admin', redirect: {name: 'login'}, forbiddenRedirect: '/403'}
//         }
//     },
// ]
// const router = new VueRouter({
//     history: true,
//     mode: 'history',
//     routes,
// })
// export default router

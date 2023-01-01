import Home from './pages/Index.js';
import About from './pages/About.js';
import Services from './pages/Services.js'
import Collaborations from './pages/Collaborations.js'
import PageNotFound from './pages/PageNotFound.js';

const { createApp } = Vue;


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Services },
    { path: '/collaborations', component: Collaborations },
    { path: '/:pathMatch(.*)', component: PageNotFound }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({});

app.use(router);

app.mount("#app");

import Home from './pages/Index.js';
import About from './pages/About.js';
import Service from './pages/Service.js'
import Contacts from './pages/Contacts.js'
import PageNotFound from './pages/PageNotFound.js';

const { createApp } = Vue;


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Service },
    { path: '/contacts', component: Contacts },
    { path: '/:pathMatch(.*)', component: PageNotFound }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({});

// app.component('about', Contacts)

app.use(router);



app.mount("#app");

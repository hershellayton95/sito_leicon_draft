import Home from './pages/Index.js';
import About from './pages/About.js';
import Service from './pages/Service.js'
import Contacts from './pages/Contact.js'
import PageNotFound from './pages/PageNotFound.js';
// const About = { template: `<div>About</div>`}
// const NotFoundComponent = { template: `<div>Errore</div>`}

const { createApp } = Vue;


// const routes = [
//     { path: '/', component: Home },
//     { path: '/about', component: About },
//     { path: '/:pathMatch(.*)', component: NotFoundComponent }
// ];

// const router = VueRouter.createRouter({
//     history: VueRouter.createWebHashHistory(),
//     routes, // short for `routes: routes`
// });

const app = createApp({});

app.component('index', Home)

// app.use(router);



app.mount("#app");

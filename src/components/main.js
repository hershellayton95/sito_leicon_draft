import Home from './pages/Index.js';
import About from './pages/About.js';
import Services from './pages/Services.js'
import Collaborations from './pages/Collaborations.js'
import PageNotFound from './pages/PageNotFound.js';
import Privacy from './pages/Privacy.js';

const { createApp } = Vue;


const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/service', component: Services },
    { path: '/collaborations', component: Collaborations },
    { path: '/privacy', component: Privacy },
    { path: '/:pathMatch(.*)', component: PageNotFound }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

const app = createApp({});

app.use(router);

app.mount("#app");

(function ($) {
    "use strict";


    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


})(jQuery);

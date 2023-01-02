import barraBlue from "../components/barraBlue.js";
import AboutSection from "../layout/AboutSection.js";
import Carousel from "../layout/Carousel.js";
import Container from "../layout/Container.js";
import PatnerSection from "../layout/CollaborationSection.js";
import ServiceSection from "../layout/ServiceSection.js";

const Home = {
    template: `
    <container>
    <main>
        <!-- Carousel Start -->
        <carousel/>
        <!-- Carousel End -->
        <h2 class="text-center bg-danger text-white py-3 d-lg-none">QUESTO SITO NON FA USO DI COOKIES</h2>
        <!-- About Start -->
        <about-section/>
        <!-- About End -->

        <barra-blue/>

        <!-- Service Start -->
        <services/>
        <!-- Service End -->

        <barra-blue/>

        <!-- Patnership Start-->
        <patner-section/>
        <!-- Patnership End-->
    </main>
    </container>
    `,
    components:{
        container: Container,
        carousel: Carousel,
        "about-section": AboutSection,
        "barra-blue":barraBlue,
        services: ServiceSection,
        "patner-section": PatnerSection
    },

    beforeMount () {
        document.documentElement.scrollTop = 0;
    },
    mounted() {
        document.getElementById("mn1").classList.add('active');
    },
    beforeUnmount() {
        document.getElementById("mn1").classList.remove('active');
    },
}

export default Home;

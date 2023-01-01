import barraBlue from "../components/barraBlue.js";
import AboutSection from "../layout/AboutSection.js";
import Container from "../layout/Container.js";
import PageHeader from "../layout/PageHeader.js";
import PatnerSection from "../layout/PatnerSection.js";

const About = {
    template: `
    <container>
<main>
    <page-header>About</page-header>


    <!-- About Start -->
        <about/>
    <!-- About End -->

    <barra-blue/>

    <!-- Patnership Start-->
    <patner-section/>
    <!-- Patnership End-->
</main>
    </container>
    `,
    components:{
        container: Container,
        "page-header": PageHeader,
        about: AboutSection,
        "barra-blue":barraBlue,
        "patner-section": PatnerSection
    },
    mounted() {
        document.getElementById("mn2").classList.add('active');
    },
    beforeUnmount() {
        document.getElementById("mn2").classList.remove('active');
    },
}

export default About;

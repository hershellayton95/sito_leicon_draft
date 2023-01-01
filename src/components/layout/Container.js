import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Container = {
    template: `
    <!--Navbar Start-->
    <navbar/>
    <!--Navbar End-->
    <slot/>
    <custom-footer/>
    `,
    components: {
        navbar: Navbar,
        "custom-footer": Footer
    }
}

export default Container;

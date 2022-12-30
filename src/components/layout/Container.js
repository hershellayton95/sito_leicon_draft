import Navbar from "./Navbar.js";
import Footer from "./Footer.js";

const Container = {
    template: `
    <navbar/>
    <slot/>
    <custom-footer/>

    `,
    components: {
        navbar: Navbar,
        "custom-footer": Footer
    }
}

export default Container;

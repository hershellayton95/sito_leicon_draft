import Container from "../layout/Container.js";
import PageHeader from "../layout/PageHeader.js";

const Collaboratios = {
    template: `
    <container>
    <main>
    <page-header>Collaborazioni</page-header>
    </main>
    </container>
    `,
    components:{
        container: Container,
        "page-header": PageHeader
    },
    mounted() {
        document.getElementById("mn4").classList.add('active');
    },
    beforeUnmount() {
        document.getElementById("mn4").classList.remove('active');
    },
}

export default Collaboratios;

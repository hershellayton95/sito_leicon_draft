import Container from "../layout/Container.js";
import PageHeader from "../layout/PageHeader.js";
import ErrorSection from '../layout/ErrorSection.js'

const PageNotFound = {
    template: `
    <container>
    <main>
    <page-header>404 Error</page-header>

    <!-- 404 Start -->
    <error-section/>
    <!-- 404 End -->

    </main>
    </container>
    `,
    components:{
        container: Container,
        "page-header": PageHeader,
        "error-section": ErrorSection
    },
    beforeMount () {
        document.documentElement.scrollTop = 0;
    },
}

export default PageNotFound;

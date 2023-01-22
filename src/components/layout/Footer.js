const Footer = {
    template: `
    <footer>
        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-light footer mt-5 py-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row justify-content-start g-5">
                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-4">Contatti</h4>
                        <p class="mb-0 d-flex align-items-baseline"><i class="fa fa-map-marker-alt me-3"></i><p>Via delle Cascine, 38<br/>21041 Albizzate (VA)</p></p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+39 3406825226</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@leicon.it</p>
                        <p class="mb-2"><i class="fab fa-linkedin-in me-3"></i>Serenella Saccon</p>
                    </div>

                    <div class="col-lg-3 col-md-6">
                        <h4 class="text-white mb-4">Link Rapidi</h4>
                        <router-link to="/" class="btn btn-link">Home</router-link>
                        <router-link to="/about" class="btn btn-link">Chi Siamo</router-link>
                        <router-link to="/service" class="btn btn-link">Servizi</router-link>
                        <router-link to="/collaborations" class="btn btn-link">Collaborazioni</router-link>
                        <router-link to="/privacy" class="btn btn-link">Privacy</router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- Footer End -->


        <!-- Copyright Start -->
        <div class="container-fluid copyright py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom" href="#">Leicon di Serenella Saccon</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                        Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a> Distributed By
                        <a href="https://themewagon.com">ThemeWagon</a> Modified By <a href="https://www.linkedin.com/in/filippo-di-marco-703649168/">Filippo Di Marco</a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Copyright End -->
    </footer>
    `
}

export default Footer;

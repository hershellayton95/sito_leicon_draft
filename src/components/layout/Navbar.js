const Navbar = {
    template: `
    <!-- Navbar Start -->
    <header>

        <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
        </div>
            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
                <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                    <h1 class="display-5 text-primary m-0">
                        <h1 class="text-primary m-0"><img class="me-2" src="./img/logo_leicon_nav.png" width="120">
                        </h1>
                    </h1>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <router-link to="/" class="nav-item nav-link active">Home</router-link>
                        <router-link to="/service" class="nav-item nav-link">Servizi</router-link>
                        <router-link to="/collaborations" class="nav-item nav-link">Collaborazioni</router-link>
                        <router-link to="/privacy" class="nav-item nav-link">Privacy</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- Navbar End -->
    `
}

export default Navbar;

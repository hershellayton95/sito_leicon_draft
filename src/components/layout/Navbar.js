const Navbar = {
    template: `
    <!-- Spinner Start -->
    <div id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;"></div>
    </div>
    <!-- Spinner End -->

    <!-- Navbar Start -->
    <header>
        <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
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
                        <a href="index.html" class="nav-item nav-link active">Home</a>
                        <a href="service.html" class="nav-item nav-link">Servizi</a>
                        <a href="collaborazioni.html" class="nav-item nav-link">Collaborazioni</a>
                        <a href="privacy.html" class="nav-item nav-link">Privacy</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- Navbar End -->
    `
}

export default Navbar;

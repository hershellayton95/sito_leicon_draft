const Navbar = {
    template:`
    <header>
        <div class="container-fluid fixed-top px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="top-bar row gx-0 align-items-center d-none d-lg-flex">
        </div>
            <nav class="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <router-link id="mn1" to="/" class="navbar-brand ms-4 ms-lg-0">
            <h1 class="display-5 text-primary m-0">
            <h1 class="text-primary m-0"><img class="me-2" src="./img/logo_leicon_nav.png" width="120">
            </h1>
            </h1>
            </router-link>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <router-link id="mn1" to="/" class="nav-item nav-link">Home</router-link>
                        <router-link id="mn2" to="/about" class="nav-item nav-link">Chi Siamo</router-link>
                        <router-link id="mn3" to="/service" class="nav-item nav-link">Servizi</router-link>
                        <router-link id="mn4" to="/collaborations" class="nav-item nav-link">Collaborazioni</router-link>
                        <router-link id="mn5" to="/privacy" class="nav-item nav-link">Privacy</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    `
}

export default Navbar;

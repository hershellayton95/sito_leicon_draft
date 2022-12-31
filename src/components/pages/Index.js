import barraBlue from "../components/barraBlue.js";
import AboutSection from "../layout/AboutSection.js";
import Container from "../layout/Container.js";
import ServiceSection from "../layout/ServiceSection.js";

const Home = {
    template: `
    <container>
    <main>
        <!-- Carousel Start -->
        <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
            <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src="img/carousel-1.jpg" alt="Image">
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-lg-8">
                                        <h1 class="display-1 mb-4 animated slideInDown">Leicon di Serenella Saccon
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="w-100" src="img/carousel-2.jpg" alt="Image">
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-start">
                                    <div class="col-lg-7">
                                        <h1 class="display-1 mb-4 animated slideInDown">I nostri Servizi
                                        </h1>
                                        <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <!-- Carousel End -->
        <!-- About Start -->
        <about/>
        <!-- About End -->

        <barra-blue/>

        <!-- Service Start -->
        <service/>

        <!-- Service End -->
        <barra-blue/>
        <!-- Patnership Start-->
        <div class="container text-center py-5">
            <h1 class="display-5 wow fadeInUp">Le nostre collaborazioni</h1>
            <p class="fs-4 mb-5 wow fadeInUp">Siamo lieti di presentarvi le persone, le aziende ed associazioni con cui
                abbiamo l'onore di lavorare:</p>
            <div class="row justify-content-center g-5">
                <div class="col-12 col-md-5 col-xxl-3 d-flex justify-content-center wow fadeInUp">
                    <div class=" flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                            <div class="card justify-content-between align-items-center"
                                style="width: 300px; height:300px">
                                <img class="card-img-top pt-2" src="./img/mapod_new_render_scontornato.png"
                                    alt="MAPOD4D" style="width: 50%; height: auto;">
                                <div class="card-body" style="flex: 0;">
                                    <h5 class="card-title">MAPOD4D</h5>
                                </div>
                            </div>
                        </div>
                        <div class="flip-card-back">
                            <div class="card justify-content-between align-items-center"
                                style="width: 300px; height:300px">
                                <div class="card-body" style="flex: 0;">
                                    <h5 class="card-title">MAPOD4D</h5>
                                    <p class="card-text text-dark">Some quick example text to build on the card
                                        title and make
                                        up the bulk of the card's content.Some quick example text to build on the
                                        card title and make
                                        up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Visita il sito</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5 col-xxl-3 d-flex justify-content-center wow fadeInUp">
                    <div class=" flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <div class="card justify-content-between align-items-center" style="width: 300px; height:300px">
                            <img class="card-img-top pt-2" src="./img/mapod_new_render_scontornato.png"
                                alt="MAPOD4D" style="width: 50%; height: auto;">
                            <div class="card-body" style="flex: 0;">
                                <h5 class="card-title">MAPOD4D</h5>
                            </div>
                        </div>
                    </div>
                    <div class="flip-card-back">
                        <div class="card justify-content-between align-items-center" style="width: 300px; height:300px">
                            <div class="card-body" style="flex: 0;">
                                <h5 class="card-title">MAPOD4D</h5>
                                <p class="card-text text-dark">Some quick example text to build on the card
                                    title and make
                                    up the bulk of the card's content.Some quick example text to build on the
                                    card title and make
                                    up the bulk of the card's content.</p>
                                <a href="#" class="btn btn-primary">Visita il sito</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-5 col-xxl-3 d-flex justify-content-center wow fadeInUp">
                    <div class=" flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card justify-content-between align-items-center" style="width: 300px; height:300px">
                        <img class="card-img-top pt-2" src="./img/mapod_new_render_scontornato.png"
                            alt="MAPOD4D" style="width: 50%; height: auto;">
                        <div class="card-body" style="flex: 0;">
                            <h5 class="card-title">MAPOD4D</h5>
                        </div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="card justify-content-between align-items-center" style="width: 300px; height:300px">
                        <div class="card-body" style="flex: 0;">
                            <h5 class="card-title">MAPOD4D</h5>
                            <p class="card-text text-dark">Some quick example text to build on the card
                                title and make
                                up the bulk of the card's content.Some quick example text to build on the
                                card title and make
                                up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visita il sito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="col-12 col-md-5 col-xxl-3 d-flex justify-content-center wow fadeInUp">
                    <div class=" flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <div class="card justify-content-between align-items-center" style="width: 300px; height:300px">
                        <img class="card-img-top pt-2" src="./img/mapod_new_render_scontornato.png"
                            alt="MAPOD4D" style="width: 50%; height: auto;">
                        <div class="card-body" style="flex: 0;">
                            <h5 class="card-title">MAPOD4D</h5>
                        </div>
                    </div>
                </div>
                <div class="flip-card-back">
                    <div class="card justify-content-between align-items-center" style="width: 300px; height:300px">
                        <div class="card-body" style="flex: 0;">
                            <h5 class="card-title">MAPOD4D</h5>
                            <p class="card-text text-dark">Some quick example text to build on the card
                                title and make
                                up the bulk of the card's content.Some quick example text to build on the
                                card title and make
                                up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Visita il sito</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>

        </div>
        <!-- Patnership End-->
    </main>
    </container>
    `,
    components:{
        container: Container,
        about: AboutSection,
        "barra-blue":barraBlue,
        service: ServiceSection
    },
    mounted() {
        document.getElementById("mn1").classList.add('active');
    },
    beforeUnmount() {
        document.getElementById("mn1").classList.remove('active');
    },
}

export default Home;

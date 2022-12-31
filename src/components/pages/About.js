import barraBlue from "../components/barraBlue.js";
import AboutSection from "../layout/AboutSection.js";
import Container from "../layout/Container.js";
import PageHeader from "../layout/PageHeader.js";

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
    <div class="container text-center py-5">
        <h1 class="display-5 wow fadeInUp">I nostri patner</h1>
        <p class="fs-4 mb-5 wow fadeInUp">Siamo lieti di presentarvi le persone e le aziende ed associazioni con cui
            abbiamo
            l'onore di lavorare:</p>
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
                        <img class="card-img-top pt-2" src="./img/mapod_new_render_scontornato.png" alt="MAPOD4D" style="width: 50%; height: auto;">
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
        "page-header": PageHeader,
        about: AboutSection,
        "barra-blue":barraBlue
    },
    mounted() {
        document.getElementById("mn2").classList.add('active');
    },
    beforeUnmount() {
        document.getElementById("mn2").classList.remove('active');
    },
}

export default About;

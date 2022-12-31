import Container from "../layout/Container.js";
import PageHeader from "../layout/PageHeader.js";

const Collaboratios = {
    template: `
    <container>
    <main>
    <page-header>Collaborazioni</page-header>

        <!-- About Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4 align-items-end mb-4">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <img class="img-fluid rounded" src="img/about.jpg">
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <p class="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Chi Siamo</p>
                        <h1 class="display-5 mb-4">Aiutiamo i nostri clieni a proteggere le loro attività</h1>
                        <p class="mb-4 fs-5">Il nostro scopo è affiancare le risorse aziendali con competenza e
                            professionalità fornendo supporto ai settori amministrativi ed operativi per il
                            raggiungimento ed il mantenimento della conformità alla normativa vigente ed in continua
                            evoluzione tramite attività di analisi, audit, formazione, interpretazione normativa,
                            elaborazione procedure e soluzioni.
                        </p>
                        <p class="mb-4 fs-5">Ogni aspetto della gestione di un’azienda o di un’ente deve essere
                            affrontato da
                            molteplici punti di vista con esigenze a volte contrastanti, integrare l’ottimizzazione
                            delle risorse pratiche con gli adempimenti richiesti dalla normativa è un compito
                            impegnativo, mettiamo la nostra competenza al vostro servizio per raggiungere insieme
                            l’obiettivo.
                        </p>
                    </div>
                </div>
                <div class="border rounded p-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row g-4">
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                            <div class="h-100">
                                <div class="d-flex align-items-end">
                                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i class="fa fa-times text-white"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h4>Nessun costo nascosto</h4>
                                    </div>
                                    <div class="border-end d-none d-lg-block"></div>
                                </div>
                                <div class="border-bottom mt-4 d-block d-lg-none"></div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                            <div class="h-100">
                                <div class="d-flex align-items-end">
                                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i class="fa fa-users text-white"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h4>Esperti ceritficati</h4>
                                    </div>
                                    <div class="border-end d-none d-lg-block"></div>
                                </div>
                                <div class="border-bottom mt-4 d-block d-lg-none"></div>
                            </div>
                        </div>
                        <div class="col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                            <div class="h-100">
                                <div class="d-flex align-items-end">
                                    <div class="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                        <i class="fa fa-phone text-white"></i>
                                    </div>
                                    <div class="ps-3">
                                        <h4>Sempre a vostra disposizione</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->


        <!-- Service Start -->
        <div class="container-fluid facts my-5 py-5">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">

                    </div>
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">

                    </div>
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">

                    </div>
                    <div class="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    </div>
                </div>
            </div>
            <p id="dlgs-ra"></p>
        </div>
        <!-- Service End -->
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
                                <img class="card-img-top pt-2" src="./img/mapod_new_render_scontornato.png" alt="MAPOD4D" style="width: 50%; height: auto;">
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
        </div>

        </div>
        <!-- Patnership End-->
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

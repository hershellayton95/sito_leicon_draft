import Container from "../layout/Container.js";

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
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-4 align-items-end mb-4">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <img class="img-fluid rounded" src="img/about.jpg">
                    </div>
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                        <h1 class="display-5 mb-4">Il nostro scopo</h1>
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
            </div>
        </div>
        <!-- About End -->

        <div class="container-fluid facts py-3">
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

        <!-- Service Start -->
        <div class="container-xxl service py-5">
            <div class="container">
                <div class="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h1 class="display-5 mb-5">Le nostre competenze al tuo servizio</h1>
                </div>
                <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="col-lg-4">
                        <div class="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                <h5 class="d-flex align-items-center m-0"><i
                                        class="fa fa-bars text-primary me-3"></i>D.Lgs
                                    231/01 e RA</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Privacy</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Audit ISO 9001</h5>
                            </button>
                            <button class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0"
                                style="height: 75px;" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                <h5 class="m-0"><i class="fa fa-bars text-primary me-3"></i>Licensing</h5>
                            </button>
                        </div>
                    </div>
                    <div class="col-lg-8">
                        <div class="tab-content w-100">
                            <div class="tab-pane fade show active" id="tab-pane-1">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="./img/service-1.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">D.Lgs 231/01 e Responsabilità Amministrativa</h3>
                                        <p class="mb-2">Le nostre competenze e attività in materia della
                                            <strong>Responsabilità amministrativa delle società e degli enti (D.Lgs
                                                231/01)</strong> sono:
                                        </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Analisi e Gestione del Rischio
                                        </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Organizzazione del sistema di
                                            deleghe e responsabilità</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Formazione e Vigilanza</p>
                                        <a href="#dlgs-ra" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-2">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="./img/service-2.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">Privacy</h3>
                                        <p class="mb-4">Le nostre competenze e attività in materia ci consentono di
                                            affrontare le problematiche ordinarie in ogni settore lavorativo, come ad
                                            esempio: </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Area Medico-Sanitario</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiunger eltro settore in cui
                                            c'è
                                            mercato</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiunger eltro settore in cui
                                            c'è
                                            mercato</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiunger eltro settore in cui
                                            c'è
                                            mercato</p>
                                        <a href="#privicy" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-3">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="img/service-3.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">Audit ISO 9001</h3>
                                        <p class="mb-4">Le nostre competenze e attività in materia ci consentono di
                                            affiancare l’azienda nel mantenere
                                            attivo e funzionale il sistema di gestione qualità eseguendo: </p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Aggiornamenti</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Monitoraggio</p>
                                        <p><i class="fa fa-check text-primary me-3"></i>Audit</p>
                                        <a href="#audit" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="tab-pane-4">
                                <div class="row g-4">
                                    <div class="col-md-6" style="min-height: 350px;">
                                        <div class="position-relative h-100">
                                            <img class="position-absolute rounded w-100 h-100" src="img/service-4.jpg"
                                                style="object-fit: cover;" alt="">
                                        </div>
                                    </div>
                                    <div class="col-md-6" style="height: 400px;">
                                        <h3 class="mb-4">Licensing</h3>
                                        <div class="mb-4"> Le nostre competenze in termini di Licenze ci permette:
                                            <p><i class="fa fa-check text-primary me-3"></i>Redazione di licenze in
                                                ambito
                                                proprietario e open source</p>
                                            <p><i class="fa fa-check text-primary me-3"></i>Valutazione testi di licenza
                                                in
                                                Italiano</p>
                                            <p><i class="fa fa-check text-primary me-3"></i>Valutazione testi di licenza
                                                in
                                                Inglese</p>
                                            <a href="#licensing" class="btn btn-primary py-3 px-5 mt-3">Scopri di
                                                più</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Service End -->
        <div class="container-fluid facts py-3">
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
        container: Container
    }
}

export default Home;

const ServiceSection = {
    template: `
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
`
}

export default ServiceSection;

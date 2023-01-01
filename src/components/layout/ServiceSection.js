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
                <!--for -->
                    <button v-for="item in input" class="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" style="height: 75px;" data-bs-toggle="pill" :data-bs-target="item.dataTarget" type="button">
                        <h5 class="d-flex align-items-center m-0">
                            <i class="fa fa-bars text-primary me-3"></i>{{item.title}}</h5>
                    </button>
                <!-- end for -->
                </div>
            </div>
            <div class="col-lg-8">
                <div class="tab-content w-100 pb-5">
                <!--for -->
                    <div v-for="item in input" class="tab-pane fade show" :id="item.id">
                        <div class="row g-4">
                            <div class="col-md-6" style="min-height: 350px;">
                                <div class="position-relative h-100">
                                    <img class="position-absolute rounded w-100 h-100" :src="item.image"
                                        style="object-fit: cover;" alt="">
                                </div>
                            </div>
                            <div class="col-md-6" style="height: 400px;">
                                <h3 class="mb-4">{{item.extendedTitle}}</h3>
                                <p class="mb-2">{{item.content}}
                                </p>
                                <p v-if="item.listItems" v-for="item in item.listItems"><i class="fa fa-check text-primary me-3"></i>{{item}}
                                </p>
                                <a href="#dlgs-ra" class="btn btn-primary py-3 px-5 mt-3">Scopri di più</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`,
data() {
    return {
        input: [
            {
                id: "tab-pane-1",
                dataTarget: "#tab-pane-1",
                title: "D.Lgs 231/01 e RA",
                extendedTitle: "D.Lgs 231/01 e Responsabilità Amministrativa",
                image: "./img/service-1.jpg",
                content: "Le nostre competenze e attività in materia della Responsabilità amministrativa delle società e degli enti (D.Lgs 231/01) sono:",
                listItems: ["Analisi e Gestione del Rischio", "Organizzazione del sistema di deleghe e responsabilità", "Formazione e Vigilanza" ]
            },
            {
                id: "tab-pane-2",
                dataTarget: "#tab-pane-2",
                title: "Privacy",
                extendedTitle: "Privacy",
                image: "./img/service-2.jpg",
                content: "Le nostre competenze e attività in materia ci consentono di affrontare le problematiche ordinarie in ogni settore lavorativo, come ad esempio: ",
                listItems: ["Area Medico-Sanitario", "Aggiunger eltro settore in cui c'è mercato",  "Aggiunger eltro settore in cui c'è mercato",  "Aggiunger eltro settore in cui c'è mercato"]
            },
            {
                id: "tab-pane-3",
                dataTarget: "#tab-pane-3",
                title: "Audit ISO 9001",
                extendedTitle: "Audit ISO 9001",
                image: "./img/service-3.jpg",
                content: "Le nostre competenze e attività in materia ci consentono di affiancare l’azienda nel mantenere attivo e funzionale il sistema di gestione qualità eseguendo: ",
                listItems: ["Aggiornamenti", "Monitoraggi",  "Audit"]
            },
            {
                id: "tab-pane-4",
                dataTarget: "#tab-pane-4",
                title: "Licensing",
                extendedTitle: "Licensing",
                image: "./img/service-4.jpg",
                content: "Le nostre competenze in termini di Licenze ci permette: ",
                listItems: ["Redazione di licenze in ambito proprietario e open source", "Valutazione testi di licenza in Italiano", "Valutazione testi di licenza in Inglese"]
            },
        ]
}
},

mounted() {
    document.querySelector('[data-bs-target="#tab-pane-1"]').classList.add('active');
    document.getElementById('tab-pane-1').classList.add('show','active');
},
}

export default ServiceSection;



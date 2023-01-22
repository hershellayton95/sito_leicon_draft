const PatnerSection = {
    template: `
        <div class="container text-center py-5 d-flex flex-column align-items-center">
            <h1 class="display-5 wow fadeInUp">Le nostre collaborazioni</h1>
            <p class="fs-4 mb-5 wow fadeInUp">Siamo lieti di presentarvi le persone e le aziende ed associazioni con cui abbiamo l'onore di lavorare:</p>
            <div class="container-sm row justify-content-center" style="max-width:750px">
                <div v-for="item in input" class="col-12 col-md-4 text-center mt-3 overflow-hidden d-flex flex-column justify-content-end align-items-center">
                    <a :href="item.href" target="_blank">
                        <img v-if="item.image" :src="item.image" alt="MAPOD4D" :width="item.size" style="height: auto; cursor:pointer" >
                                <h5 class="card-title mt-3">
                                {{item.title}}
                                </h5>
                    </a>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            input: [
                {
                    title: "MAPOD4D",
                    href: "https://www.mapod4d.it/",
                    image: "./img/mapod.png",
                    size: 120
                },
                {
                    title: "ROBDEV",
                    href: "#",
                    image: "",
                    size: 90
                },
                {
                    title: "ARCHEOS TEC",
                    href: "https://www.archeostec.it/",
                    image: "./img/archeostec.jpg",
                    size: 150
                },
                {
                    title: "ARGONAVIS srl",
                    href: "https://www.argonavis.it/",
                    image: "./img/argonavis.jpg",
                    size: 200
                },
                {
                    title: "OSTEOARC",
                    href: "https://www.osteoarc.it/",
                    image: "./img/osteoarc.jpg",
                    size: 200
                }
            ]
        }
    }
}

export default PatnerSection;


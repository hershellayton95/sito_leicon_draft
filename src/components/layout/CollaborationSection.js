const PatnerSection = {
    template:`
        <div class="container text-center py-5 d-flex flex-column align-items-center">
            <h1 class="display-5 wow fadeInUp">I nostri patner</h1>
            <p class="fs-4 mb-5 wow fadeInUp">Siamo lieti di presentarvi le persone e le aziende ed associazioni con cui abbiamo l'onore di lavorare:</p>
            <div class="container-sm row justify-content-center" style="max-width:750px">
                <div v-for="item in input" class="col-6 col-md-4 text-center mt-3">
                    <img :src="item.image" alt="MAPOD4D" style="width:100px; height: auto; cursor:pointer">
                            <h5 class="card-title mt-3">
                            {{item.title}}
                            </h5>
                </div>
            </div>
        </div>
    `,
    data(){
        return {
            input: [
                {
                    title: "MAPOD4D",
                    image: "./img/mapod_new_render_scontornato.png"
                },
                {
                    title: "MAPOD4D",
                    image: "./img/mapod_new_render_scontornato.png"
                },
                {
                    title: "MAPOD4D",
                    image: "./img/mapod_new_render_scontornato.png"
                },
                {
                    title: "MAPOD4D",
                    image: "./img/mapod_new_render_scontornato.png"
                },
                {
                    title: "MAPOD4D",
                    image: "./img/mapod_new_render_scontornato.png"
                }
            ]
        }
    }
}

export default PatnerSection;


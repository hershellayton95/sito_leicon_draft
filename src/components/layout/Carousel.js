const Carousel = {
    template: `
    <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
    <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div v-for="item in input" class="carousel-item">
                <img class="w-100" :src=item.image alt="Image">
                <div class="carousel-caption">
                    <div class="container">
                        <div class="row justify-content-start">
                            <div class="col-lg-8">
                                <h1 class="display-1 mb-4 animated slideInDown">{{item.title}}
                                </h1>
                                <a v-if="item.src_btn && item.button" :href=input.src_btn class="btn btn-primary py-3 px-5 mt-5 animated slideInDown">{{item.button}}</a>
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
    `,
    data() {
        return {
            input: [
                {
                    image: "./img/carousel-1.jpg",
                    title: "Leicon di Serenella Saccon",
                    button: "",
                    src_btn: ""
                },
                {
                    image: "./img/carousel-2.jpg",
                    title: "I nostri Servizi",
                    button: "Scopri di più",
                    src_btn: "#"
                }
            ]
    }
    },

    mounted() {
        document.querySelector(".carousel-item").classList.add('active');
    },


}
export default Carousel;

<script>
export default {
    name: "CallToAction",
}
</script>

<template>
    <section class="callToAction">

        <div class="card col-6">
            <img src="../assets/img/image_box_1-221x231.png" class="card-img-left" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
        <div class="card col-6">
            <img src="../assets/img/image_box_2-234x231.png" class="card-img-top" alt="">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.callToAction {
    .col-6 {
        img {
            width: 50px;
        }
    }
}
</style>

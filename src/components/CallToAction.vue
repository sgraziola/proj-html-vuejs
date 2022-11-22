<script>
export default {
    name: "CallToAction",
}
</script>

<template>
    <section class="callToAction main_container d-flex justify-content-center py-5 my-2">
        <div class="card flex-row rounded-0 me-2 p-5">
            <img src="../assets/img/image_box_1-221x231.png" alt="">
            <div class="card-body">
                <h3 class="card-title mb-4">Become an Instructor</h3>
                <p class="card-text col-9">Teach what you love. Masterstudy gives you the tools to create a course.</p>
                <a href="#"><button class="btn_sign">START TEACHING</button></a>
            </div>
        </div>
        <div class="card flex-row rounded-0 ms-2 p-5">
            <img src="../assets/img/image_box_2-234x231.png" alt="">
            <div class="card-body">
                <h3 class="card-title mb-4">Access for Business</h3>
                <p class="card-text col-9">Get unlimited access to 2,500 of top courses for your team.</p>
                <a href="#"><button class="btn_sign">DOING BUSINESS</button></a>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.callToAction {
    .card {
        width: 50%;

        .card-body {
            margin-left: 2rem;

            h3 {
                font-size: 34px;
            }

            p {
                font-size: 17px;
                color: $ms_txt_header;
                margin-bottom: 2rem;
            }

            button:hover {
                background-color: $ms_hover;
            }
        }
    }
}
</style>

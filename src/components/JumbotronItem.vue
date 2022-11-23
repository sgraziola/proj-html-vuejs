<script>

export default {
    name: "JumbotronItem",
}
</script>

<template>
    <div class="jumbotron d-flex py-4">
        <div class="col-6 position-relative text-white d-flex align-items-center">
            <div class="jumbo_text">
                <h1>Udemy Affiliate Sales</h1>
                <p>Monetize your audience and attract new customers with Udemy!</p>
            </div>
            <div class="trapezium"></div>
        </div>
        <div class="col-6">
            <img src="../assets/img/slide-1.jpg" class="w-100" alt="">
        </div>
    </div>
    <!-- /.jumbotron -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.jumbotron>.col-6 {
    background-color: $ms_primary;

    .jumbo_text {
        z-index: 100;
        margin-left: 360px;

        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 22px;
            width: 93%;
        }
    }
}

.trapezium {
    background-color: $ms_primary;
    width: 200px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -95px;
    transform: skew(25deg);
    z-index: 99;
}
</style>
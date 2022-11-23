<script>

export default {
    name: "QuoteSection",

}
</script>

<template>
    <section class="testimonial">
        <img src="../assets/img/testimonial-1-1917x640-1-1914x639.jpg" alt="">
        <div class="quote_text">
            <h3>Investing for Your Future</h3>
            <p>It is no exaggeration to say this MasterStudy experience was transformative-both professionally and
                personally. This workshop will long remain a high point of my life. Thanks again... I am feeling
                energized and eager to start teaching my class next week. I can't wait to use all of my new teaching
                tools. I will absolutely recommend this workshop to other educators!</p>
            <strong>Linda Green</strong>
            <span>Product Manager, Apple Inc</span>
            <div class="arrow"></div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.testimonial {
    position: relative;

    .quote_text {
        position: absolute;
        top: 12%;
        left: 20%;
        background-color: $ms_light;
        width: 37%;
        padding: 6rem;

        h3 {
            font-size: 34px;
            margin-bottom: 1.5rem;
        }

        p {
            margin-bottom: 2.5rem;
        }

        span {
            display: block;
            font-size: 13px;
        }

        .arrow {
            position: absolute;
            bottom: 230px;
            left: 98%;
            width: 0;
            border-left: 20px solid transparent;
            border-right: 20px solid transparent;
            border-top: 20px solid $ms_light;
            transform: rotate(270deg);
        }
    }
}
</style>

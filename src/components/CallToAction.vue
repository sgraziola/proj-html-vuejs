<script>
export default {
    name: "CallToAction",
}
</script>

<template>
    <section class="callToAction">
        <img src="../assets/img/bg.png" alt="">
        <div class="callToAction_details col-3">
            <h2>Limitless learning, more possibilities</h2>
            <p>Online courses open to the opportunity for learning to almost anyone, regardless of their scheduling
                commitments</p>
            <a href="#"><button class="btn_sign">READ MORE</button></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.callToAction {
    position: relative;

    .callToAction_details {
        position: absolute;
        top: 28%;
        left: 19%;

        h2 {
            font-size: 3rem;
            font-weight: bolder;
            margin-bottom: 1.5rem;
        }

        p {
            margin-bottom: 2.5rem;
        }
    }
}
</style>
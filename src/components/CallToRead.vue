<script>
export default {
    name: "CallToRead",
}
</script>

<template>
    <section class="callToRead">
        <img src="../assets/img/bg.png" alt="">
        <div class="callToRead_details col-3">
            <h2>Limitless learning, more possibilities</h2>
            <p>Online courses open to the opportunity for learning to almost anyone, regardless of their scheduling
                commitments</p>
            <a href="#"><button class="btn_sign">READ MORE</button></a>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.callToRead {
    position: relative;

    .callToRead_details {
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
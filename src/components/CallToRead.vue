<script>
export default {
    name: "CallToRead",
}
</script>

<template>
    <section class="callToRead">
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
    background-image: url('../assets/img/bg.png');
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    height: 500px;


    .callToRead_details {
        position: relative;
        top: 20%;
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
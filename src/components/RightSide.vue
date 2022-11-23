<script>
import socialNetwork from '../data/socialNetwork.js'

export default {
    name: "RightSide",
    components: {

    },
    data() {
        return {
            socialNetwork
        }
    }
}
</script>

<template>
    <div class="right_side col-6 d-flex py-5 ps-5">
        <div class="socials col-6">
            <h6>SOCIAL NETWORK</h6>
            <div class="network">
                <div class="row row-cols-4 gy-2">
                    <div class="col" v-for="social in socialNetwork">
                        <a :href="social.href" :style="{ 'background-color': social.bgColor }">
                            <font-awesome-icon :icon="['fab', social.icon]" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div class="spot col-6 ps-2">
            <img src="../assets/img/Top-udemy-courses-90-percent-off.jpg" alt="">
        </div>
    </div>
    <!-- /.rightSide -->
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.socials {
    padding-right: 5rem;

    h6 {
        margin-bottom: 1.5rem;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
        font-size: 20px;
        width: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        border-radius: 50%;
    }
}
</style>

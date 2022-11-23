<script>
import socialNetwork from '../data/socialNetwork.js'
export default {
    name: "FooterTop",
    data() {
        return {
            socialNetwork
        }
    }
}
</script>

<template>
    <div class="left_side col-6 d-flex py-5 pe-5">
        <div class="about col-7 pe-5">
            <h6>ABOUT</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, voluptates? Saepe doloribus magni,
                at, dolore facilis maiores quo alias perferendis in quam nihil vulputate.</p>
        </div>
        <div class="contacts col-5">
            <h6>CONTACT</h6>
            <p>USA, California 20, First Avenue, California</p>
            <span>Tel.:+1 212 458 300 32</span>
            <span class="mb-3">Fax:+1 212 375 24 14</span>
            <span class="email">info@masterstudy.com</span>
        </div>
    </div>
    <div class="right_side col-6 d-flex py-5 ps-5">
        <div class="socials col-6 pe-4">
            <h6>SOCIAL NETWORK</h6>
            <div class="network">
                <div class="row row-cols-4">
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
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.left_side {

    h6 {
        margin-bottom: 1.5rem;
    }

    p,
    span {
        font-size: 13px;
    }

    span {
        display: block;
    }

    .email {
        color: $ms_txt_header;
    }
}
</style>
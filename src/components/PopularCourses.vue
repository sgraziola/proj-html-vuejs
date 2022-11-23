<script>
import Course from './Course.vue';
import popularList from '../data/popularList.js'

export default {
    name: "PopularCourses",
    components: {
        Course
    },
    data() {
        return {
            popularList,
        }
    },
}
</script>

<template>
    <section class="popular pt-4">
        <div class="main_container py-5 text-center">
            <h2 class="mt-3 pt-3">Popular courses</h2>
            <p class="pb-3">Discover our most popular courses for self learning</p>
            <div class="row row-cols-6 text-start">
                <Course :course="course" v-for="course in popularList" />
            </div>
            <div class="arrows pt-5 mt-2">
                <button class="btn btn_left border rounded-0">
                    <font-awesome-icon icon="fa-solid fa-chevron-left" />
                </button>
                <button class="btn btn_right border rounded-0">
                    <font-awesome-icon icon="fa-solid fa-chevron-right" />
                </button>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

.popular {
    background-color: $ms_secondary;
    padding-bottom: 2rem;

    h2 {
        font-size: 3rem;
        font-weight: bolder;
        margin-bottom: 1rem;
    }

    .btn_left,
    .btn_right {
        background-color: $ms_light;
        color: $ms_arrows;
        font-size: 13px;
        padding: 10px 15px;
    }

    .btn_left:hover,
    .btn_right:hover {
        background-color: $ms_magnifier;
        color: $ms_light;
    }
}
</style>
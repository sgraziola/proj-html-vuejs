<script>
import categoriesList from '../data/categoriesList.js';
import recentsList from '../data/recentCourses.js'
import RecentCourse from './RecentCourse.vue';

export default {
    name: "RecentCourses",
    components: {
        RecentCourse
    },
    data() {
        return {
            categoriesList,
            recentsList
        }
    }

}
</script>

<template>
    <div class="main_container py-5 my-4 text-center">
        <h2 class="my-3 py-3">Recent Courses</h2>
        <ul class="navbar-nav flex-row justify-content-center py-3">
            <li class="nav-item px-4" v-for="category in categoriesList">
                <a class="nav-link fs-6" :class="category.text === 'All Categories' ? 'selected' : ''"
                    :href="category.href">
                    {{ category.text }}
                </a>
            </li>
        </ul>
        <div class="row row-cols-6 gy-5">
            <RecentCourse :course="course" v-for="course in recentsList" />
        </div>
        <a href="#"><button class="btn_sign">SHOW ALL</button></a>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as*;

h2 {
    font-size: 3rem;
    font-weight: bolder;
    margin-bottom: 1.5rem;
}

ul {
    margin-bottom: 2.5rem;

    .selected {
        color: $ms_txt_header;
        background-color: $ms_secondary;
    }

    a {
        color: $ms_magnifier;
        border-radius: 2rem;
        padding: 0.5rem 1rem;
    }

    a:hover {
        color: $ms_txt_header;
        background-color: $ms_secondary;
    }
}

.btn_sign {
    margin-top: 5rem;
}
</style>
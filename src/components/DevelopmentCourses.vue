<script>
import Course from './Course.vue';
import devList from '../data/developerCourses.js'

export default {
    name: "DevelopmentCourses",
    components: {
        Course
    },
    data() {
        return {
            devList,
        }
    },
}
</script>

<template>
    <div class="main_container py-5 mb-4">
        <h4 class="mb-3 pb-3">Popular Development Courses</h4>
        <div class="row row-cols-6">
            <Course :course="course" v-for="course in devList" />
        </div>
    </div>

</template>

<style lang="scss" scoped>

</style>
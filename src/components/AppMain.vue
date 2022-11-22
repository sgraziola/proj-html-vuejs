<script>
import JumbotronItem from './JumbotronItem.vue';
import DevelopmentCourses from './DevelopmentCourses.vue';

export default {
    name: "AppMain",
    components: {
        JumbotronItem,
        DevelopmentCourses
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronItem />
        <DevelopmentCourses />
    </main>
    <!-- site_main -->
</template>

<style lang="scss" scoped>

</style>
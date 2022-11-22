<script>
import JumbotronItem from './JumbotronItem.vue';
import DevelopmentCourses from './DevelopmentCourses.vue';
import CallToAction from './CallToAction.vue';
import RecentCourses from './RecentCourses.vue';

export default {
    name: "AppMain",
    components: {
        JumbotronItem,
        DevelopmentCourses,
        CallToAction,
        RecentCourses
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronItem />
        <DevelopmentCourses />
        <CallToAction />
        <RecentCourses />
    </main>
    <!-- site_main -->
</template>

<style lang="scss" scoped>

</style>
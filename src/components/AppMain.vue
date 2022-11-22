<script>
import JumbotronItem from './JumbotronItem.vue';
import DevelopmentCourses from './DevelopmentCourses.vue';
import CallToAction from './CallToAction.vue';
import RecentCourses from './RecentCourses.vue';
import CallToSubscribe from './CallToSubscribe.vue';
import PopularCourses from './PopularCourses.vue';


export default {
    name: "AppMain",
    components: {
        JumbotronItem,
        DevelopmentCourses,
        CallToAction,
        RecentCourses,
        CallToSubscribe,
        PopularCourses,
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronItem />
        <DevelopmentCourses />
        <CallToAction />
        <RecentCourses />
        <CallToSubscribe />
        <PopularCourses />
    </main>
    <!-- site_main -->
</template>

<style lang="scss" scoped>

</style>
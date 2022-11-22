<script>
import JumbotronItem from './JumbotronItem.vue';
import DevelopmentCourses from './DevelopmentCourses.vue';
import CallToRead from './CallToRead.vue';
import RecentCourses from './RecentCourses.vue';
import CallToSubscribe from './CallToSubscribe.vue';
import PopularCourses from './PopularCourses.vue';
import CallToAction from './CallToAction.vue';


export default {
    name: "AppMain",
    components: {
        JumbotronItem,
        DevelopmentCourses,
        CallToRead,
        RecentCourses,
        CallToSubscribe,
        PopularCourses,
        CallToAction
    }
}
</script>

<template>
    <main id="site_main">
        <JumbotronItem />
        <DevelopmentCourses />
        <CallToRead />
        <RecentCourses />
        <CallToSubscribe />
        <PopularCourses />
        <CallToAction />
    </main>
    <!-- site_main -->
</template>

<style lang="scss" scoped>

</style>
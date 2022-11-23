<script>
import FooterTop from '../FooterTop.vue';
import FooterBot from '../FooterBot.vue';

export default {
    name: "AppFooter",
    components: {
        FooterTop,
        FooterBot
    }
}
</script>

<template>
    <footer id="site_footer">
        <div class="subcontainer d-flex flex-wrap">
            <FooterTop />
        </div>
        <hr>
        <div class="subcontainer d-flex flex-wrap">
            <FooterBot />
        </div>
    </footer>
    <!-- /#site_footer -->
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;


footer {
    color: $ms_light;
    background-color: $ms_nav;

    hr {
        border: 1px solid;
    }
}
</style>

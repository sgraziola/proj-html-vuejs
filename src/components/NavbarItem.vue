<script>
import NavbarTop from './NavbarTop.vue';
import NavbarBot from './NavbarBot.vue';

export default {
    name: "NavbarItem",
    components: {
        NavbarTop,
        NavbarBot
    }
}
</script>

<template>
    <div class="main_container">
        <nav class="navbar navbar-expand">
            <div class="container-fluid">
                <div class="collapse navbar-collapse flex-wrap">
                    <NavbarTop />
                    <!-- /.nav_top -->
                    <NavbarBot />
                    <!-- /.nav_bot -->
                </div>
            </div>
        </nav>
        <!-- /.navbar -->
    </div>
    <!-- /.nav_container -->

</template>

<style lang="scss">

</style>
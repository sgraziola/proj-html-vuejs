<script>
import NavbarItem from './NavbarItem.vue';

export default {
    name: "AppHeader",
    components: {
        NavbarItem
    }
}
</script>

<template>
    <header id="site_header">
        <div class="nav_container">
            <NavbarItem />
            <!-- /.navbar -->

        </div>
    </header>
    <!-- /#site_header -->
</template>

<style lang="scss" scoped>
header {
    .nav_container {
        max-width: 90%;
        margin: auto;
    }
}
</style>
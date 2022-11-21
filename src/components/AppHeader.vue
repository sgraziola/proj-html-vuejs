<script>
import NavbarItem from './NavbarItem.vue';
import SubCategory from './SubCategory.vue';

export default {
    name: "AppHeader",
    components: {
        NavbarItem,
        SubCategory
    }
}
</script>

<template>
    <header id="site_header">
        <div class="nav_container">
            <NavbarItem />
            <!-- /.navbar -->
        </div>
        <!-- /.nav_container -->
        <SubCategory />
        <!-- /.subcategory -->
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
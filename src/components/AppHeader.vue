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
        <NavbarItem />
        <SubCategory />
        <!-- /.subcategory -->
    </header>
    <!-- /#site_header -->
</template>


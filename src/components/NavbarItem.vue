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
    <NavbarTop />
    <hr>
    <NavbarBot />
</template>

<style lang="scss">

</style>
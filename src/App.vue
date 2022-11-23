<script>
import AppHeader from './components/layout/AppHeader.vue';
import AppMain from './components/layout/AppMain.vue';
import AppFooter from './components/layout/AppFooter.vue';


export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
    AppFooter
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>

<style scoped>

</style>

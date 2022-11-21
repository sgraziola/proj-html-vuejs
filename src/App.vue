<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />

  <footer id="site_footer"></footer>
  <!-- /#site_footer -->
</template>

<style scoped>

</style>

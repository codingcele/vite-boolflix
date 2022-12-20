<script>
import AppHeader from './components/AppHeader.vue';
import AppFilmsListVue from "./components/AppFilmsList.vue";



export default {
  name: "App",
  components: {
    AppHeader,
    AppFilmsListVue,
  },
}
</script>

<template>
  <AppHeader />
  <AppFilmsListVue />
</template>

<style lang="scss">
* {
  margin: 0px;
  box-sizing: border-box;
  font-family: Verdana;
}
</style>

<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppFilmsListVue from "./components/AppFilmsList.vue";

import { store } from "./store";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFilmsListVue,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getFilms() {
      axios
        .get(store.apiURL)
        .then(res => {
          store.filmsList = res.data.results;
        })
        .catch(err => {
          console.log("Errori", err);
        }
        );
    }
  },
  mounted() {
    this.getFilms();
  }
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

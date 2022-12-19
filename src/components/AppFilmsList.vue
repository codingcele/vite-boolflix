<script>
import AppSingleFilm from "./AppSingleFilm.vue";

import { store } from "../store.js";
export default {
    name: "AppFilmsList",
    components: {
        AppSingleFilm,
    },
    data() {
        return {
            store,
        }
    },
}

</script>

<template>
    <section class="container">
        <div class="row">
            <div v-for="film in store.filmsList" :key="film.id">
                <AppSingleFilm :info="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* scoped serve a dire che il css si riferirà solo all'header */
</style>
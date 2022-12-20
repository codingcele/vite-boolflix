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
        <div class="row flex center">
            <div v-for="film in store.filmsList" :key="film.id" class="film">
                <AppSingleFilm :info="film" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* scoped serve a dire che il css si riferirà solo all'header */
.container {

    .flex {
        display: flex;
        flex-wrap: wrap;
        padding: 30px 150px;
    }

    .center {
        justify-content: space-between;

        .film {
            padding: 15px;
            width: 10vw;
        }
    }
}
</style>
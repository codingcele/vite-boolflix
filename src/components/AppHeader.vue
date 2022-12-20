<script>
import { store } from "../store.js";
import axios from "axios";

export default {
    name: "AppHeader",
    data() {
        return {
            store,
        }
    },
    methods: {
        getFilms() {
            let link = store.apiURL + this.valore;
            console.log(link);
            axios
                .get(link)
                .then(res => {
                    store.filmsList = res;
                })
            console.log(this.valore);


            /* .catch(err => {
                console.log("Errori", err);
            }
            ); */
        }
    },
    mounted() {
        this.getFilms();
    }
}

</script>

<template>
    <header>
        <div class="boolflix">
            BoolFlix
        </div>
        <div class="search">
            <input class="searchbar" type="text" placeholder="Type here to search" v-model="valore">
            <input class="searchbutton" type="button" value="Search" @click="getFilms">
        </div>

    </header>
</template>

<style lang="scss" scoped>
/* scoped serve a dire che il css si riferirà solo all'header */

header {
    display: flex;
    padding: 30px 100px;
    justify-content: space-between;
    background-color: black;

    .boolflix {
        font-size: 30px;
        color: red;
    }

    .search {
        display: flex;

        .searchbar {
            margin-right: 5px;
        }

        .searchbutton {
            cursor: pointer;
        }
    }
}
</style>
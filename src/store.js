import { reactive } from "vue";

export const store = reactive({
    filmsList: [],
    apiURL: "https://api.themoviedb.org/3/search/movie?api_key=0f3efaf7363c58edbc7ce70f8457b219&query="
})
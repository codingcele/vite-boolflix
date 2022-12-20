<script>
export default {
    name: "AppSingleFilm",
    props: ["info"],
}

</script>

<template>
    <section class="container">
        <div class="row">
            <div class="center">
                <h3>
                    {{ info.title }}
                </h3>
                <h4>
                    {{ info.original_title }}
                </h4>
                <h4>
                    {{ info.original_language }}
                </h4>
                <h4>
                    {{ info.vote_average }}
                </h4>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* scoped serve a dire che il css si riferirà solo all'header */
</style>
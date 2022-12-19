<script>
export default {
    name: "AppSingleFilm",
    props: ["info"],
}

</script>

<template>
    <section class="container">
        <div class="row">
            <div>
                <img src="info.image" alt="">
                <h3>
                    {{ info.name }}
                </h3>
                <h4>

                </h4>
                <h4>

                </h4>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
/* scoped serve a dire che il css si riferirà solo all'header */
</style>
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
                <h3>
                    {{ info.title }}
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
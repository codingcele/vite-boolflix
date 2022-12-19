<script>
export default {
    name: "AppHeader",
}

</script>

<template>
    <header>
        <div class="boolflix">
            BoolFlix
        </div>
        <div class="search">
            <input class="searchbar" type="text" placeholder="Type here to search">
            <input class="searchbutton" type="button" value="Search">
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
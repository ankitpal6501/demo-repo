<template>
    <div>
        <ul>
            <li> <router-link to="/">Show Blog</router-link> </li>
            <li> <router-link to="/home2">Blog Create</router-link> </li>
            <li> <router-link to="/home3">Props example</router-link> </li>
            <li> <router-link to="/home4">Vuex example</router-link> </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"Header",
}
</script>
<template>
    <v-container>
        Left Nav
        <v-card v-for="item in items" :key="item.name">
            <v-btn @click="item.click">{{item.name}}</v-btn>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "LeftNav",
        props:{
            items:{
                required: true
            }
        }
    }
</script>

<style scoped>

</style>
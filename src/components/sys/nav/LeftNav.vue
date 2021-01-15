<template>
    <v-container>
        <v-navigation-drawer app clipped>
            <v-list rounded>
                <v-subheader class="title">Navigation</v-subheader>
                <v-list-item link v-for="(item, index) in items" @click="item.click" :key="index">
                    <v-list-item-icon>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>{{item.name}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
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
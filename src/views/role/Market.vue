<template>
    <v-container>
        <TopNav></TopNav>
        <LeftNav :items="items"></LeftNav>
        <v-content>
            <router-view/>
        </v-content>
    </v-container>
</template>

<script>
    import TopNav from "../../components/sys/nav/TopNav";
    import LeftNav from "../../components/sys/nav/LeftNav";
    export default {
        name: "Market",
        components: {LeftNav, TopNav},
        data(){
            return{
                items: [
                    {
                        name: 'Reports',
                        icon: 'mdi-view-grid',
                        click: this.openMarketReports
                    }
                ]
            }
        },
        methods:{
            open(path){
                if (this.$route.path !== path) {
                    this.$router.push({path: path});
                }
            },
            openMarketReports(){
                this.open('/market/marketreports');
            },
        }
    }
</script>

<style scoped>

</style>
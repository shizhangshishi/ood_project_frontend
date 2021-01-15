<template>
    <v-container>
        <TopNav></TopNav>
        <LeftNav :items="items"></LeftNav>
        Expert
        <v-content>
            <router-view/>
        </v-content>
    </v-container>
</template>

<script>
    import TopNav from "../../components/sys/nav/TopNav";
    import LeftNav from "../../components/sys/nav/LeftNav";
    export default {
        name: "Expert",
        components: {LeftNav, TopNav},
        data(){
            return{
                items: [
                    {
                        name: 'Reports',
                        icon: 'mdi-view-grid',
                        click: this.openExpertReports
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
            openExpertReports(){
                this.open('/expert/expertreports');
            },
        }
    }
</script>

<style scoped>

</style>
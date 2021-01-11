<template>
    <v-container>
        <TopNav></TopNav>
        <LeftNav :items="items"></LeftNav>
        Audit
        <v-content>
            <router-view/>
        </v-content>
    </v-container>
</template>

<script>
    import TopNav from "../../components/sys/nav/TopNav";
    import LeftNav from "../../components/sys/nav/LeftNav";
    export default {
        name: "Audit",
        components: {LeftNav, TopNav},
        data(){
            return{
                items: [
                    {
                        name: 'AuditTasks',
                        icon: 'mdi-view-grid',
                        click: this.openAuditTasks
                    },
                    {
                        name: 'Executives',
                        icon: 'mdi-view-grid',
                        click: this.openExecutives
                    },
                    {
                        name: 'Products',
                        icon: 'mdi-view-grid',
                        click: this.openProducts
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
            openProducts(){
                this.open('/audit/products');
            },
            openExecutives() {
                this.open('/audit/executives');
            },
            openAuditTasks(){
                this.open('/audit/audittasks');
            }
        }
    }
</script>

<style scoped>

</style>
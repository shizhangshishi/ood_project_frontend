<template>
    <v-container>
        <TopNav></TopNav>
        <v-content>
            <v-container>
                <v-card>
                    <v-card-title>Market Report</v-card-title>
                    <v-card-text>
                        <v-data-table :headers="headers" :items="marketReport.entries" disable-sort>
                            <template v-slot:item.archive="{ item }">
                                <v-icon @click="openArchive(item)">mdi-upload</v-icon>
                            </template>
                        </v-data-table>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="submitReport">Submit{{entrySlims.length}}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-container>
        </v-content>
        <v-dialog max-width="400" v-model="showArchive">
            <v-card>
                <v-card-title>Archive {{currEntry.type.name}}</v-card-title>
                <v-card-text>
                    <v-text-field v-model="num" ref="num" label="unqualified"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="archive">Archive</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import getReq from "../../utils/request/getReq";
    import postReq from "../../utils/request/postReq";
    import TopNav from "../../components/sys/nav/TopNav";

    export default {
        name: "MarketReport",
        components: {TopNav},
        data(){
            return{
                app:this.$root.$children[0],
                id: this.$route.params.id,
                marketReport:{},
                headers:[
                    {
                        text:'ID',
                        align:'center',
                        value:'id'
                    },
                    {
                        text:'Type',
                        align:'center',
                        value:'type.name'
                    },
                    {
                        text:'Unqualified',
                        align:'center',
                        value:'unqualified'
                    },
                    {
                        text:'Is Archived',
                        align:'center',
                        value:'archived'
                    },
                    {
                        text:'DateArchived',
                        align:'center',
                        value:'dateArchived'
                    },
                    {
                        text:'Archive',
                        align:'center',
                        value:'archive'
                    }
                ],

                entrySlims:[],
                showArchive:false,
                currEntry:{
                    type:{
                        name:''
                    }
                },
                num: 0,
            }
        },
        mounted() {
            this.getMarketReport();
        },
        methods:{
            getMarketReport(){
                getReq.getMarketReport(this);
            },
            openArchive(entry){
                this.showArchive = true;
                this.currEntry = entry;
            },
            archive(){
                this.currEntry.unqualified = this.num;
                let entrySlim = {
                    type: this.currEntry.type.name,
                    unqualified: this.currEntry.unqualified
                };
                this.entrySlims.push(entrySlim);
                this.showArchive = false;
            },
            submitReport(){
                // console.log(this.entrySlims);
                postReq.submitMarketReport(this);
            }
        }
    }
</script>

<style scoped>

</style>
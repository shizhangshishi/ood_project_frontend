<template>
    <v-container>
        <TopNav></TopNav>
        <v-content>
            <v-container>
                <v-container>
                    <v-card>
                        <v-card-title>
                            Expert Report
                        </v-card-title>
                        <v-card-text>
                            <v-row justify="center" align="center">
                                <v-col cols="10">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-card outlined>
                                                <v-card-title>Check Reports</v-card-title>
                                                <v-card-subtitle>
                                                    Check all sub market reports.
                                                </v-card-subtitle>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="primary" @click="checkSubMarketReports">
                                                        Check
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container v-if="showSubMarketReports">
                    <v-card>
                        <v-card-title>
                            <v-col cols="20">
                                All Sub Market Reports
                            </v-col>
                            <v-col cols="4">
                                <v-btn color="primary" text @click="submitExpertReport">Submit</v-btn>
                                <v-btn color="red" text @click="showSubMarketReports=false">Close</v-btn>
                            </v-col>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table :headers="headers" :items="subMarketReports" disable-sort>
                                <template v-slot:item.detail="{ item }">
                                    <v-icon @click="checkSubMarketReport(item.id)">mdi-eye</v-icon>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-container>
        </v-content>
    </v-container>
</template>

<script>
    import getReq from "../../utils/request/getReq";
    import postReq from "../../utils/request/postReq";
    import TopNav from "../../components/sys/nav/TopNav";

    export default {
        name: "ExpertReport",
        components: {TopNav},
        data(){
            return{
                app:this.$root.$children[0],
                id: this.$route.params.id,
                expertReport:{},

                subMarketReports:[],
                showSubMarketReports:false,
                headers:[
                    {
                        text: 'ID',
                        align: 'center',
                        value: 'id'
                    },
                    {
                        text: 'Submitted',
                        align: 'center',
                        value: 'submitted'
                    },
                    {
                        text: 'Date Submit',
                        align: 'center',
                        value: 'dateSubmit'
                    },
                    {
                        text: 'Detail',
                        align: 'center',
                        value: 'detail'
                    }
                ],
            }
        },
        mounted() {
            this.getExpertReport();
        },
        methods:{
            getExpertReport(){
                getReq.getExpertReport(this);
            },
            checkSubMarketReports(){
              this.showSubMarketReports = true;
              getReq.getSubMarketReports(this);
            },
            checkSubMarketReport(id){
                let url = '/submarketreport/'+id;
                window.open(url, '_blank')
            },
            submitExpertReport(){
                // console.log(this.entrySlims);
                postReq.submitExpertReport(this);
            }
        }
    }
</script>

<style scoped>

</style>
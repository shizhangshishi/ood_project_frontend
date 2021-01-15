<template>
    <v-container>
        ExpertReport
        <v-card>
            <v-card-text>
                id: {{expertReport.id}},
                dateSubmit: {{expertReport.dateSubmit}},
                submitted: {{expertReport.submitted}},
            </v-card-text>
        </v-card>
        <v-card>
            <v-btn @click="checkSubMarketReports">Check Sub Market Reports</v-btn>
        </v-card>
        <v-card v-if="showSubMarketReports">
            <v-card-text>
                <v-data-table :headers="headers" :items="subMarketReports" disable-sort>
                    <template v-slot:item.detail="{ item }">
                        <v-icon @click="checkSubMarketReport(item.id)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showSubMarketReports=false">Close</v-btn>
                <v-btn @click="submitExpertReport">Submit</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import getReq from "../../utils/request/getReq";
    import postReq from "../../utils/request/postReq";

    export default {
        name: "ExpertReport",
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
<template>
    <v-container>
        <v-container>
            <v-card>
                <v-card-title>
                    Expert Reports
                </v-card-title>
                <v-card-text>
                    <v-row justify="center" align="center">
                        <v-col cols="10">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card outlined>
                                        <v-card-title>Check Reports</v-card-title>
                                        <v-card-subtitle>
                                            Check all expert reports.
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" @click="checkExpertReports">
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
        <v-container v-if="showExpertReports">
            <v-card>
                <v-card-title>
                    <v-col cols="4">
                        All Expert Reports
                    </v-col>
                    <v-col cols="20">
                        <v-btn color="red" text @click="showExpertReports=false">Close</v-btn>
                    </v-col>
                </v-card-title>
                <v-card-text>
                    <v-data-table :headers="headers" :items="expertReports" disable-sort>
                        <template v-slot:item.detail="{ item }">
                            <v-icon @click="checkExpertReport(item.id)">mdi-eye</v-icon>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
    import getReq from "../../../../utils/request/getReq";

    export default {
        name: "ExpertReports",
        data(){
            return{
                app:this.$root.$children[0],
                expertReports:[],
                showExpertReports:false,
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
        methods:{
            checkExpertReports(){
                this.showExpertReports = true;
                getReq.getExpertReports(this);
            },
            checkExpertReport(id){
                let url = '/expertreport/'+id;
                window.open(url, '_blank')
            },
        }
    }
</script>

<style scoped>

</style>
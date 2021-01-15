<template>
    <v-container>
        <v-container>
            <v-card>
                <v-card-title>
                    Market Reports
                </v-card-title>
                <v-card-text>
                    <v-row justify="center" align="center">
                        <v-col cols="10">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card outlined>
                                        <v-card-title>Check Reports</v-card-title>
                                        <v-card-subtitle>
                                            Check all market reports.
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" @click="checkMarketReports">
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
        <v-container v-if="showMarketReports">
            <v-card>
                <v-card-title>
                    <v-col cols="4">
                        All Market Reports
                    </v-col>
                    <v-col cols="20">
                        <v-btn color="red" text @click="showMarketReports=false">Close</v-btn>
                    </v-col>
                </v-card-title>
                <v-card-text>
                    <v-data-table :headers="headers" :items="marketReports" disable-sort>
                        <template v-slot:item.detail="{ item }">
                            <v-icon @click="checkMarketReport(item.id)">mdi-eye</v-icon>
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
        name: "Reports",
        data(){
            return{
                app:this.$root.$children[0],
                marketReports:[],
                showMarketReports:false,
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
            checkMarketReports(){
                this.showMarketReports = true;
                getReq.getMarketReports(this);
            },
            checkMarketReport(id){
                let url = '/marketreport/'+id;
                window.open(url, '_blank')
            }
        }
    }
</script>

<style scoped>

</style>
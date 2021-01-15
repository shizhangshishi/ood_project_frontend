<template>
    <v-container>
        MarketReports
        <v-card>
            <v-card-text>
                <v-btn @click="checkMarketReports">Check All Market Reports</v-btn>
            </v-card-text>
        </v-card>
        <v-card v-if="showMarketReports">
            <v-card-text>
                <v-data-table :headers="headers" :items="marketReports" disable-sort>
                    <template v-slot:item.detail="{ item }">
                        <v-icon @click="checkMarketReport(item.id)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showMarketReports=false">Close</v-btn>
            </v-card-actions>
        </v-card>
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
<template>
    <v-container>
        ExpertReports
        <v-card>
            <v-card-text>
                <v-btn @click="checkExpertReports">Check All Expert Reports</v-btn>
            </v-card-text>
        </v-card>
        <v-card v-if="showExpertReports">
            <v-card-text>
                <v-data-table :headers="headers" :items="expertReports" disable-sort>
                    <template v-slot:item.detail="{ item }">
                        <v-icon @click="checkExpertReport(item.id)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showExpertReports=false">Close</v-btn>
            </v-card-actions>
        </v-card>
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
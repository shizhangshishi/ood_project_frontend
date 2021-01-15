<template>
    <v-container>
        <v-card>
            {{name}}
        </v-card>
        <v-card>
            <v-card-title>
                grades:{{grades}}
            </v-card-title>
            <v-card-actions>
                <v-btn @click="getTotalGrades">Get Total Grades</v-btn>
            </v-card-actions>
        </v-card>
        <v-card>
            <v-card-title>
                Get Grade Records
            </v-card-title>
            <v-card-actions>
                <v-btn @click="getGradeRecords">Get Grade Records</v-btn>
            </v-card-actions>
        </v-card>
        <v-card>
            Records
            <v-data-table>
                <v-data-table :headers="headers" :items="records" disable-sort>
                </v-data-table>
            </v-data-table>
        </v-card>
    </v-container>
</template>

<script>
    import getReq from '../../utils/request/getReq'
    export default {
        name: "Executive",
        data(){
            return{
                app: this.$root.$children[0],
                grades:'',
                records: [],
                name: this.$route.params.name,
                headers:[
                    {
                        text: 'ID',
                        align: 'center',
                        value: 'id'
                    },
                    {
                        text: 'Grade',
                        align: 'center',
                        value: 'grading'
                    },
                    {
                        text: 'Detail',
                        align: 'center',
                        value: 'detail'
                    }
                ],
            }
        },
        mounted(){

        },
        methods:{
            getTotalGrades(){
                getReq.getGrades(this)
            },
            getGradeRecords(){
                getReq.getGradeRecords(this);
            }
        }
    }
</script>

<style scoped>

</style>
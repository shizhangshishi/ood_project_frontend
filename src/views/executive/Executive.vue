<template>
    <v-container>
        <TopNav></TopNav>
        <v-content>
            <v-container>
                <v-card>
                    <v-card-title>
                        <v-col cols="16">
                            All  Records{{records.length}}
                        </v-col>
                        <v-col cols="8">
                            Total Grades:{{grades}}
                        </v-col>
                    </v-card-title>
                    <v-card-text>
                        <v-data-table :headers="headers" :items="records" disable-sort>
                        </v-data-table>
                    </v-card-text>
                </v-card>
            </v-container>
        </v-content>
    </v-container>
</template>

<script>
    import getReq from '../../utils/request/getReq'
    import TopNav from "../../components/sys/nav/TopNav";
    export default {
        name: "Executive",
        components: {TopNav},
        data(){
            return{
                app: this.$root.$children[0],
                grades:'',
                records: [],
                name: this.$route.params.name,
                headers:[
                    {
                        text: 'Task ID',
                        align: 'center',
                        value: 'task.id'
                    },
                    {
                        text: 'Record ID',
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
                    },
                ],
            }
        },
        mounted(){
            this.getTotalGrades();
            this.getGradeRecords();
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
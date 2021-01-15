<template>
    <v-container>
        <v-card>
            <v-card-title>AuditTask</v-card-title>
            <v-card-text>
                id: {{auditTask.id}},
                type: {{auditTask.type}}, // market or expert
                description: {{auditTask.description}},
                deadline: {{auditTask.deadline}},
                completed: {{auditTask.completed}},
            </v-card-text>
        </v-card>
        <v-card>
            {{auditTask.description}}
        </v-card>
        <v-card>
            <v-btn @click="showTypes=true">Check Product Types</v-btn>
            <v-btn @click="checkUncompletedMarkets">Check Uncompleted Markets</v-btn>
        </v-card>
        <v-card v-if="showMarkets">
            <v-card-title>Uncompleted Markets in Task</v-card-title>
            <v-card-text>
                <v-data-table :headers="market_headers" :items="markets" disable-sort>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showMarkets=false">Close</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="showTypes">
            <v-card-title>Product Types in Task</v-card-title>
            <v-card-text>
                <v-radio-group v-model="completed">
                    <v-radio label="completed" value="true"></v-radio>
                    <v-radio label="not completed" value="false"></v-radio>
                </v-radio-group>
                <v-btn @click="checkTypes">Check</v-btn>

                <v-data-table :headers="headers" :items="productTypes" disable-sort>
                    <template v-slot:item.num="{ item }">
                        <v-icon @click="checkNum(item.name)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showTypes=false">Close</v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog max-width="600" v-model="showNum">
            <v-card>
                <v-card-title>
                    Unqualified Num is: {{num}}
                </v-card-title>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import getReq from "../../utils/request/getReq";

    export default {
        name: "AuditTask",
        data(){
            return{
                app:this.$root.$children[0],
                id:this.$route.params.id,
                auditTask:{},

                completed: false,
                productTypes:[],
                headers:[
                    {
                        text: 'Name',
                        align:'center',
                        value:'name'
                    },
                    {
                        text: 'Unqualified Num',
                        align:'center',
                        value:'num'
                    }
                ],
                showTypes:false,

                num:'',
                typeName:'',
                showNum:false,

                market_headers:[
                    {
                        text:'Name',
                        align:'center',
                        value:'name'
                    },
                    {
                        text:'Role',
                        align:'center',
                        value:'role'
                    }
                ],
                markets:[],
                showMarkets: false
            }
        },
        mounted() {
            this.getAuditTask();
        },
        methods:{
            getAuditTask(){
                getReq.getAuditTask(this);
            },
            checkNum(name){
                this.showNum = true;
                this.typeName = name;
                getReq.getUnqualifiedNumInTask(this);
            },
            checkTypes(){
                getReq.getProductTypesInTask(this);
            },
            checkUncompletedMarkets(){
                this.showMarkets = true;
                getReq.getUncompletedMarkets(this);
            }
        }
    }
</script>

<style scoped>

</style>
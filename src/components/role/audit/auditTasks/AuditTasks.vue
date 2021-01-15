<template>
    <v-container>
        AuditTasks
        <v-card>
            <v-card-actions>
                <v-btn @click="showAuditTasks = true">Check Audit Tasks</v-btn>
                <v-btn @click="showAdd=true">Add Audit Task</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="showAuditTasks">
            <v-card-title>All Audit Tasks</v-card-title>
            <v-radio-group v-model="completed">
                <v-radio label="completed" value="true"></v-radio>
                <v-radio label="not completed" value="false"></v-radio>
            </v-radio-group>
            <v-btn @click="checkAuditTasks">Check</v-btn>
            <v-card-text>
                <v-data-table :headers="headers" :items="auditTasks" disable-sort>
                    <template v-slot:item.detail="{ item }">
                        <v-icon @click="checkAuditTask(item.id)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showAuditTasks=false">Close</v-btn>
            </v-card-actions>
        </v-card>
        <v-dialog  max-width="600px" overlay-opacity="0.9" v-model="showAdd">
            <v-card>
                <v-card-title>
                    Add Audit Task
                </v-card-title>
                <v-card-text>
                    <v-form v-model="form" ref="form">
                        <v-autocomplete v-model="auditTaskType" ref="auditTaskType"
                                      label="AuditTaskType" :items="auditTaskTypes"></v-autocomplete>

                        <v-radio-group v-model="expert" ref="expert"
                                       label="Expert">
                            <v-btn @click="getAllExperts">All Experts</v-btn>
                            <v-radio v-for="item in experts" :key="item.name"
                                     :label="item.name" :value="item.name"></v-radio>
                        </v-radio-group>

                        <v-label>Markets</v-label>
                        <v-btn @click="getAllMarkets">All Markets</v-btn>
                        <v-checkbox v-for="item in markets" :key="item.name"
                                    v-model="markets_s" ref="markets_s"
                                    :label="item.name" :value="item.name">
                        </v-checkbox>


                        <v-label>ProductTypes</v-label>
                        <v-btn @click="getAllProducts">All Products</v-btn>
                        <v-checkbox v-for="item in products" :key="item.name"
                                    v-model="productTypes" ref="productTypes"
                                    :label="item.name" :value="item.name">
                        </v-checkbox>

                        <v-text-field v-model="description" ref="description"
                                      label="Description"></v-text-field>

                        <v-label>Deadline</v-label>
                        <v-date-picker v-model="deadline" ref="deadline"></v-date-picker>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="showAdd=false">Close</v-btn>
                    <v-btn @click="addAuditTask">Add</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import getReq from '../../../../utils/request/getReq'
    import constant from '../../../../config/constant'
    import postReq from "../../../../utils/request/postReq";
    export default {
        name: "AuditTasks",
        data(){
            return{
                app:this.$root.$children[0],

                auditTasks:[],
                completed: false,
                headers:[
                    {
                        text: 'ID',
                        align: 'center',
                        value: 'id'
                    },
                    {
                        text: 'Type',
                        align: 'center',
                        value: 'type'
                    },
                    {
                        text: 'Deadline',
                        align: 'center',
                        value: 'deadline'
                    },
                    {
                        text: 'IsCompleted',
                        align: 'center',
                        value: 'completed'
                    },
                    {
                        text: 'Detail',
                        align: 'center',
                        value: 'detail'
                    }
                    ],

                form:'',
                auditTaskType: '', // "market" or "expert",
                expert: '',
                description: '',
                deadline: '',
                productTypes: [],
                markets_s: [],

                markets:[],
                experts:[],
                products:[],
                auditTaskTypes:[constant.AUDIT_TASK_TYPE.EXPERT, constant.AUDIT_TASK_TYPE.MARKET],

                showAuditTasks: false,
                showAdd: false
            }
        },
        mounted(){

        },
        methods:{
            addAuditTask(){
                // let params = {
                //     auditTaskType: this.auditTaskType,
                //     expert: this.expert,
                //     description: this.description,
                //     deadline: this.deadline,
                //     productTypes: this.productTypes,
                //     markets: this.markets_s
                // };
                // console.log(params);
                postReq.addAuditTask(this);
            },
            checkAuditTask(id){
                let url = '/audittask/' + id;
                window.open(url, '_blank');
            },
            getAllExperts(){
                getReq.getExperts(this);
            },
            getAllMarkets(){
                getReq.getMarkets(this);
            },
            getAllProducts(){
              getReq.getProducts(this);
            },
            checkAuditTasks(){
                getReq.getAuditTasks(this);
            }
        }
    }
</script>

<style scoped>

</style>
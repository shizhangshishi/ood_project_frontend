<template>
    <v-container>
        <v-container>
            <v-card>
                <v-card-title>
                    Audit Tasks
                </v-card-title>
                <v-card-text>
                    <v-row justify="center" align="center">
                        <v-col cols="10">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card outlined>
                                        <v-card-title>Check Tasks</v-card-title>
                                        <v-card-subtitle>
                                            Check all audit tasks.
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" @click="checkAuditTasks">
                                                Check
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-card outlined>
                                        <v-card-title>Add Task</v-card-title>
                                        <v-card-subtitle>
                                            Add a market or expert task.
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" @click="showAdd=true">
                                                Add
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
        <v-container v-if="showAuditTasks">
            <v-card>
                <v-card-title>
                    <v-col cols="4">
                        All Audit Tasks
                    </v-col>
                    <v-col cols="20">
                        <v-btn :color="comColor" text @click="getCompleted">Completed</v-btn>
                        <v-btn :color="notComColor" text @click="getNotCompleted">NotCompleted</v-btn>
                        <v-btn color="red" text @click="showAuditTasks=false">Close</v-btn>
                    </v-col>
                </v-card-title>
                <v-card-text>
                    <v-data-table :headers="headers" :items="auditTasks" disable-sort>
                        <template v-slot:item.detail="{ item }">
                            <v-icon @click="checkAuditTask(item.id)">mdi-eye</v-icon>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-container>
        <v-dialog  max-width="600px" overlay-opacity="0.9" v-model="showAdd">
            <v-card>
                <v-card-title>
                    Add Audit Task
                </v-card-title>
                <v-card-text>
                    <v-form v-model="form" ref="form">
                        <v-card>
                            <v-card-title>
                                Basic Info
                            </v-card-title>
                            <v-card-text>
                                <v-text-field v-model="deadline" ref="deadline" label="Deadline"></v-text-field>
                                <v-text-field v-model="description" ref="description"
                                              label="Description"></v-text-field>
                                <v-autocomplete v-model="auditTaskType" ref="auditTaskType"
                                                label="AuditTaskType" :items="auditTaskTypes"></v-autocomplete>
                            </v-card-text>
                        </v-card>

                        <v-card v-if="auditTaskType === EXPERT">
                            <v-card-title>
                                Select An Expert
                            </v-card-title>
                            <v-card-text>
                                <v-btn color="primary" text @click="getAllExperts" v-if="!showExperts">Experts</v-btn>
                                <v-btn color="primary" text @click="closeExperts" v-if="showExperts">Close</v-btn>
                                <v-radio-group v-model="expert" ref="expert" v-if="showExperts">
                                    <v-radio v-for="item in experts" :key="item.name"
                                             :label="item.name" :value="item.name"></v-radio>
                                </v-radio-group>
                            </v-card-text>
                        </v-card>

                        <v-card>
                            <v-card-title>Select Markets</v-card-title>
                            <v-card-text>
                                <v-btn color="primary" text @click="getAllMarkets" v-if="!showMarkets">Markets</v-btn>
                                <v-btn color="primary" text @click="closeMarkets" v-if="showMarkets">Close</v-btn>
                                <v-container v-if="showMarkets">
                                    <v-checkbox v-for="item in markets" :key="item.name"
                                                v-model="markets_s" ref="markets_s"
                                                :label="item.name" :value="item.name">
                                    </v-checkbox>
                                </v-container>
                            </v-card-text>
                        </v-card>

                        <v-card>
                            <v-card-title>Select Product Types</v-card-title>
                            <v-card-text>
                                <v-btn color="primary" text @click="getAllProducts" v-if="!showProducts">Products</v-btn>
                                <v-btn color="primary" text @click="closeProducts" v-if="showProducts">Close</v-btn>
                                <v-container v-if="showProducts">
                                    <v-checkbox v-for="item in products" :key="item.name"
                                                v-model="productTypes" ref="productTypes"
                                                :label="item.name" :value="item.name">
                                    </v-checkbox>
                                </v-container>
                            </v-card-text>
                        </v-card>
                    </v-form>
                </v-card-text>
                <v-row justify="center">
                    <v-card-actions>
                        <v-btn color="primary" @click="addAuditTask">Add</v-btn>
                    </v-card-actions>
                </v-row>
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

                markets:'',
                experts:'',
                products:'',
                auditTaskTypes:[constant.AUDIT_TASK_TYPE.EXPERT, constant.AUDIT_TASK_TYPE.MARKET],
                EXPERT: constant.AUDIT_TASK_TYPE.EXPERT,
                MARKET: constant.AUDIT_TASK_TYPE.MARKET,

                showAuditTasks: false,
                showAdd: false,

                showMarkets:false,
                showExperts:false,
                showProducts:false
            }
        },
        computed:{
          comColor(){
              return this.completed ? 'primary' : 'black';
          },
          notComColor(){
              return !this.completed ? 'primary' : 'black';
          }
        },
        mounted(){

        },
        methods:{
            addAuditTask(){
                postReq.addAuditTask(this);
            },
            checkAuditTask(id){
                let url = '/audittask/' + id;
                window.open(url, '_blank');
            },
            getAllExperts(){
                if (!this.experts)
                    getReq.getExperts(this);
                this.showExperts = true;
            },
            closeExperts(){
              this.showExperts = false;
            },
            getAllMarkets(){
                if(!this.markets)
                    getReq.getMarkets(this);
                this.showMarkets = true;
            },
            closeMarkets(){
                this.showMarkets = false;
            },
            getAllProducts(){
                if (!this.products)
                    getReq.getProducts(this);
                this.showProducts = true;
            },
            closeProducts(){
                this.showProducts = false;
            },
            checkAuditTasks(){
                this.showAuditTasks = true;
                getReq.getAuditTasks(this);
            },
            getCompleted(){
                this.completed = true;
                this.checkAuditTasks();
            },
            getNotCompleted(){
                this.completed = false;
                this.checkAuditTasks();
            }
        }
    }
</script>

<style scoped>

</style>
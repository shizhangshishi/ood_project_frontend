<template>
    <v-container>
        <TopNav></TopNav>
        <v-content>
            <v-container>
                <v-container>
                    <v-card>
                        <v-card-title>
                            Audit Task
                        </v-card-title>
                        <v-card-text>
                            <v-row justify="center" align="center">
                                <v-col cols="10">
                                    <v-row>
                                        <v-col cols="12" md="6">
                                            <v-card outlined>
                                                <v-card-title>Check Markets</v-card-title>
                                                <v-card-subtitle>
                                                    Check uncompleted markets.
                                                </v-card-subtitle>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="primary" @click="checkUncompletedMarkets">
                                                        Check
                                                    </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-col>
                                        <v-col cols="12" md="6">
                                            <v-card outlined>
                                                <v-card-title>Check Product Types</v-card-title>
                                                <v-card-subtitle>
                                                    Check uncompleted products.
                                                </v-card-subtitle>
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn color="primary" @click="checkTypes">
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
                <v-container v-if="showMarkets">
                    <v-card>
                        <v-card-title>
                            <v-col cols="20">
                                Uncompleted Markets
                            </v-col>
                            <v-col cols="4">
                                <v-btn color="red" text @click="showMarkets=false">Close</v-btn>
                            </v-col>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table :headers="market_headers" :items="markets" disable-sort>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-container v-if="showTypes">
                    <v-card>
                        <v-card-title>
                            <v-col cols="4">
                                Product Types
                            </v-col>
                            <v-col cols="20">
                                <v-btn :color="comColor" text @click="getCompleted">Completed</v-btn>
                                <v-btn :color="notComColor" text @click="getNotCompleted">NotCompleted</v-btn>
                                <v-btn color="red" text @click="showTypes=false">Close</v-btn>
                            </v-col>
                        </v-card-title>
                        <v-card-text>
                            <v-data-table :headers="headers" :items="productTypes" disable-sort>
                                <template v-slot:item.num="{ item }">
                                    <v-icon @click="checkNum(item.name)">mdi-eye</v-icon>
                                </template>
                            </v-data-table>
                        </v-card-text>
                    </v-card>
                </v-container>
                <v-dialog max-width="400" v-model="showNum">
                    <v-card>
                        <v-card-title>
                            Unqualified Num is: {{num}}
                        </v-card-title>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-content>
    </v-container>
</template>

<script>
    import getReq from "../../utils/request/getReq";
    import TopNav from "../../components/sys/nav/TopNav";

    export default {
        name: "AuditTask",
        components: {TopNav},
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
        computed:{
            comColor(){
                return this.completed ? 'primary' : 'black';
            },
            notComColor(){
                return !this.completed ? 'primary' : 'black';
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
                this.showTypes = true;
                getReq.getProductTypesInTask(this);
            },
            getCompleted(){
                this.completed = true;
                this.checkTypes();
            },
            getNotCompleted(){
                this.completed = false;
                this.checkTypes();
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
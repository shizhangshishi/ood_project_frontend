<template>
    <v-container>
        <v-container>
            <v-card>
                <v-card-title>
                    Executives
                </v-card-title>
                <v-card-text>
                    <v-row justify="center" align="center">
                        <v-col cols="10">
                            <v-row>
                                <v-col cols="12" md="6">
                                    <v-card outlined>
                                        <v-card-title>Check Experts</v-card-title>
                                        <v-card-subtitle>
                                            Check all experts.
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" @click="checkExperts">
                                                Check
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-card outlined>
                                        <v-card-title>Check Markets</v-card-title>
                                        <v-card-subtitle>
                                            Check all markets.
                                        </v-card-subtitle>
                                        <v-card-actions>
                                            <v-spacer></v-spacer>
                                            <v-btn color="primary" @click="checkMarkets">
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
                    <v-col cols="4">
                        All Markets
                    </v-col>
                    <v-col cols="20">
                        <v-btn color="red" text @click="showMarkets=false">Close</v-btn>
                    </v-col>
                </v-card-title>
                <v-card-text>
                    <v-data-table :headers="headers" :items="markets" disable-sort>
                        <template v-slot:item.records="{ item }">
                            <v-icon @click="getRecords(item.name)">mdi-eye</v-icon>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-container>
        <v-container v-if="showExperts">
            <v-card>
                <v-card-title>
                    <v-col cols="4">
                        All Experts
                    </v-col>
                    <v-col cols="20">
                        <v-btn color="red" text @click="showExperts=false">Close</v-btn>
                    </v-col>
                </v-card-title>
                <v-card-text>
                    <v-data-table :headers="headers" :items="experts" disable-sort>
                        <template v-slot:item.records="{ item }">
                            <v-icon @click="getRecords(item.name)">mdi-eye</v-icon>
                        </template>
                    </v-data-table>
                </v-card-text>
            </v-card>
        </v-container>
    </v-container>
</template>

<script>
    import getReq from '../../../../utils/request/getReq'
    export default {
        name: "Executives",
        data(){
            return{
                app: this.$root.$children[0],
                showMarkets: false,
                showExperts: false,

                markets:[],
                experts:[],
                headers:[
                    {
                        text: 'Name',
                        align: 'center',
                        value: 'name'
                    },
                    {
                        text: 'Role',
                        align: 'center',
                        value: 'role'
                    },
                    {
                        text: 'Records',
                        align: 'center',
                        value: 'records'
                    }
                ],
            }
        },
        methods:{
            checkMarkets(){
                this.showMarkets = true;
                this.showExperts = false;
                getReq.getMarkets(this);
            },
            checkExperts(){
                this.showExperts = true;
                this.showMarkets = false;
                getReq.getExperts(this);
                // getReq.getExperts(this);
            },
            getRecords(name){
                let url = '/executive/' + name;
                window.open(url, '_blank');
            }
        }
    }
</script>

<style scoped>

</style>
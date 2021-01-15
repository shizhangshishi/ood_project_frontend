<template>
    <v-container>
        <v-card>
            <v-card-title>Executives</v-card-title>
            <v-card-text>
                <v-btn @click="checkMarkets">Check Markets</v-btn>
                <v-btn @click="checkExperts">Check Experts</v-btn>
            </v-card-text>
        </v-card>
        <v-card v-if="showMarkets">
            <v-card-title>
                All Markets
            </v-card-title>
            <v-card-text>
                <v-data-table :headers="headers" :items="markets" disable-sort>
                    <template v-slot:item.records="{ item }">
                        <v-icon @click="getRecords(item.name)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showMarkets=false">Close</v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="showExperts">
            <v-card-title>
                All Experts
            </v-card-title>
            <v-card-text>
                <v-data-table :headers="headers" :items="experts" disable-sort>
                    <template v-slot:item.records="{ item }">
                        <v-icon @click="getRecords(item.name)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="showExperts=false">Close</v-btn>
            </v-card-actions>
        </v-card>
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
                // console.log(this.$store.state.token.name);
                // console.log(localStorage.getItem('token'));
                getReq.getMarkets(this);
            },
            checkExperts(){
                this.showExperts = true;
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
<template>
    <v-container>
        <v-card>
            <v-card-title>
                <v-col cols="4">
                    All Products
                </v-col>
                <v-col cols="20">
                    <v-btn color="primary" text @click="showAdd=true">Add Product</v-btn>
                </v-col>
            </v-card-title>
            <v-card-text>
                <v-data-table :headers="headers" :items="products" disable-sort>
                    <template v-slot:item.num="{ item }">
                        <v-icon @click="checkNum(item.name)">mdi-eye</v-icon>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>
        <v-dialog max-width="600" v-model="showAdd">
            <v-card>
                <v-card-title>
                    Add Product
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="addName" ref="addName" label="Product's Name"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="addProduct">Add</v-btn>
                    <v-btn @click="showAdd=false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog max-width="600" v-model="showNum">
            <v-card>
                <v-card-title>
                    Unqualified Num
                </v-card-title>
                <v-card-text>
                    <v-form v-model="form" ref="form">
                        <v-text-field v-model="uqName" ref="name" label="Product Type"></v-text-field>
                        <v-text-field v-model="fromTime" ref="fromTime" label="From"></v-text-field>
                        <v-text-field v-model="toTime" ref="toTime" label="To"></v-text-field>
                    </v-form>
                    <row>
                        Unqualified Num is {{num}}
                    </row>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="checkUnqualifiedNum">Check</v-btn>
                    <v-btn @click="showNum=false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
    import getReq from '../../../../utils/request/getReq'
    import postReq from "../../../../utils/request/postReq";
    export default {
        name: "Products",
        data(){
            return{
                app: this.$root.$children[0],
                products: [],
                headers: [
                    {
                        text: 'Name',
                        align:'center',
                        value:'name'
                    },
                    {
                        text: 'Unqualified Num',
                        align: 'center',
                        value: 'num'
                    }
                ],

                addName: '',

                num: '',
                form:'',
                uqName:'',
                fromTime:'',
                toTime:'',

                showAdd: false,
                showNum: false,
                showProducts: false
            }
        },
        mounted(){
          this.checkProducts();
        },
        methods:{
            checkProducts(){
                getReq.getProducts(this)
            },
            addProduct(){
                this.showAdd = true;
                postReq.addProduct(this);
            },
            checkUnqualifiedNum(){
                getReq.getUnqualifiedNum(this);
            },
            checkNum(name){
                this.uqName = name;
                this.num = '';
                this.showNum = true;
            }
        }
    }
</script>

<style scoped>

</style>
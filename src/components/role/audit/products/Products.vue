<template>
    <v-container>
        <v-card>
            <v-btn @click="checkProducts"> Check All Products</v-btn>
            <v-btn @click="showAdd=true">Add Product</v-btn>
            <v-btn @click="showNum=true">Check Unqualified Num</v-btn>
        </v-card>
        <v-card v-if="showProducts">
            <v-data-table :headers="headers" :items="products" disable-sort>
            </v-data-table>
            <v-btn @click="showProducts=false">Close</v-btn>
        </v-card>
        <v-overlay v-if="showAdd">
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
        </v-overlay>
        <v-overlay v-if="showNum">
            <v-card>
                <v-card-title>
                    Unqualified Num: {{num}}
                </v-card-title>
                <v-card-text>
                    <v-form v-model="form" ref="form">
                        <v-text-field v-model="uqName" ref="name" label="uqName"></v-text-field>
                        <v-date-picker v-model="fromTime" ref="fromTime" ></v-date-picker>
                        <v-date-picker v-model="toTime" ref="toTime" ></v-date-picker>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="checkUnqualifiedNum">Check</v-btn>
                    <v-btn @click="showNum=false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-overlay>
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
                    }
                ],

                addName: '',

                num: 0,
                form:'',
                uqName:'',
                fromTime:'',
                toTime:'',

                showAdd: false,
                showNum: false,
                showProducts: false
            }
        },
        methods:{
            checkProducts(){
                this.showProducts = true;
                getReq.getProducts(this)
            },
            addProduct(){
                this.showAdd = true;
                postReq.addProduct(this);
            },
            checkUnqualifiedNum(){
                getReq.getUnqualifiedNum(this);
            }
        }
    }
</script>

<style scoped>

</style>
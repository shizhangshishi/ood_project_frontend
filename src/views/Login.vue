<template>
    <v-container>
        <v-card>
            <v-card-title>
                Login
            </v-card-title>
            <v-card-text>
                <v-form v-model="form" ref="form">
                    <v-text-field v-model="name" ref="name" label="name"
                                  :rules="[() => !!name || 'name is required']"></v-text-field>
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-btn @click="login">login</v-btn>
                <v-btn @click="register">register</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import postReq from '../utils/request/postReq'
    export default {
        name: "Login",
        data(){
            return{
                app: this.$root.$children[0],
                form: '',
                name: ''
            }
        },
        methods: {
            login(){
                if (this.form){
                    postReq.login(this);
                }
            },
            register(){
                this.$router.replace({path: '/register'});
            }
        }
    }
</script>

<style scoped>

</style>
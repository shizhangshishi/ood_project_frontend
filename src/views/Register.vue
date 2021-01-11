<template>
    <v-container>
        <v-card>
            <v-card-title>Register</v-card-title>
            <v-card-text>
                <v-form v-model="form" ref="form">
                    <v-text-field v-model="name" ref="name" label="name"
                                  :rules="[() => !!name || 'name is required']"></v-text-field>
                    <v-autocomplete v-model="role" ref="role" label="role"
                                    :items="roles"
                                    :rules="[() => !!role || 'role is required']"></v-autocomplete>
                </v-form>
            </v-card-text>
            <v-card>
                <v-btn @click="login">login</v-btn>
                <v-btn @click="register">register</v-btn>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
    import constant from '../config/constant'
    import postReq from '../utils/request/postReq'
    export default {
        name: "Register",
        data(){
            return{
                app: this.$root.$children[0],
                form: '',
                name: '',
                role: '',
                roles: [constant.ROLE.AUDIT, constant.ROLE.MARKET, constant.ROLE.EXPERT]
            }
        },
        methods:{
            register(){
                if (this.form){
                    postReq.register(this);
                }
            },
            login(){
                this.$router.replace({path: '/login'});
            }
        }
    }
</script>

<style scoped>

</style>
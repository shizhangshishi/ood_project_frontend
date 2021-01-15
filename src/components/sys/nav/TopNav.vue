<template>
    <v-container>
        <v-card>
            TopNav
            <v-btn @click="login" v-if="!hasLogin">login</v-btn>
            <v-btn @click="register" v-if="!hasLogin">register</v-btn>
            <v-btn @click="logout" v-if="hasLogin">logout</v-btn>
            <v-card-text>Date:{{date}}</v-card-text>
        </v-card>
    </v-container>
</template>

<script>
    export default {
        name: "TopNav",
        data(){
            return{
                app: this.$root.$children[0],
                date:this.$store.state.date
            }
        },
        computed:{
            hasLogin(){
                return this.$store.state.token;
            }
        },
        methods:{
            login(){
                if (this.hasLogin)
                    this.app.notify(this.app.messages.HAS_LOGIN, 'warning');
                else
                    this.$router.replace({path:'/login'});
            },
            register(){
                if (this.hasLogin)
                    this.app.notify(this.app.messages.HAS_LOGIN, 'warning');
                else
                    this.$router.replace({path:'/register'});
            },
            logout(){
                if (this.hasLogin){
                    this.$store.commit('logout');
                    this.app.notify(this.app.messages.LOGOUT_S, 'success');
                    this.$router.replace({path:'/login'});
                }
                else{
                    this.app.notify(this.app.messages.NOT_LOGIN, 'warning');
                }
            }
        }
    }
</script>

<style scoped>

</style>
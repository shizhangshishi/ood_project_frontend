<template>
    <v-container>
        <v-app-bar app clipped-left flat color="blue">
            <v-app-bar-nav-icon class="d-lg-none"/>
            <v-img src="../../../assets/logo.svg" alt="Logo" max-height="50px" max-width="50px"></v-img>
            <v-spacer></v-spacer>
            <v-btn text v-if="!hasLogin" @click="login" >
                <v-icon>mdi-login</v-icon>
                <div class="d-none d-md-flex">Login</div>
            </v-btn>
            <v-btn text v-if="!hasLogin" @click="register">
                <v-icon>mdi-account-arrow-right-outline</v-icon>
                <div class="d-none d-md-flex">Register</div>
            </v-btn>
            <v-btn text v-if="hasLogin" @click="logout" class="navBtn">
                <v-icon color="white">mdi-login</v-icon>
                <div class="d-none d-md-flex">Logout</div>
            </v-btn>
        </v-app-bar>
        <v-card>
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
    .navBtn{
        color: white;
    }

</style>
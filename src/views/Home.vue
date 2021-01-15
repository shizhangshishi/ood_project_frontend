<template>
  <v-container>
    <TopNav></TopNav>
    Home
    <v-btn @click="start">start</v-btn>
  </v-container>
</template>

<script>
  import constant from '../config/constant'
  import TopNav from "../components/sys/nav/TopNav";
  export default {
    name: 'Home',
    components: {TopNav},
    data(){
      return{
        app: this.$root.$children[0],
        role : ''
      }
    },
    mounted(){
      if (this.$store.state.token)
        this.role = this.$store.state.token.role;
    },
    methods:{
      start(){
        // // console.log(this.$store.state.token.role);
        // this.role = constant.ROLE.AUDIT;
        if (this.role === constant.ROLE.AUDIT){
          this.$router.replace({path: '/audit'});
        }
        else if (this.role === constant.ROLE.MARKET){
          this.$router.replace({path: '/market'});
        }
        else if (this.role === constant.ROLE.EXPERT){
          this.$router.replace({path: '/expert'});
        }
        else{
          this.$router.replace({path: '/login'});
        }
      }
    }
  }
</script>

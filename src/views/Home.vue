<template>
  <v-container>
    <TopNav></TopNav>
    <v-content>
      <v-card>
        <v-card-title>
          Welcome to MarketSupervise!
        </v-card-title>
        <v-card-text>
          MarketSupervise is a.....
        </v-card-text>
        <v-card-actions>
          <v-btn @click="start">Start Now</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>
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

<template>
  <div class="home">
    <h1>Scores</h1>
    <a class="button"
         @click="actionHit()">
        test
        </a>
        {{score}}
        {{this.$store.state.Boss.jadAttack}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  name: 'Scores',
  data(){
    return{
      score: 0,

    }
  },
  methods: mapActions('Scores',['actionHit']),
  computed:{ 
            ...mapState('Scores',['currentHitsTaken']),
            ...mapGetters('tickTimer',['getTime']),
            ...mapGetters('Scores',['currentHitsTaken']),
            ...mapGetters('Boss',['jadAttack'])
            },
  watch:{
    jadAttack(){
          if(this.$store.state.Boss.jadAttack == "ranged"
            && this.$store.state.tickTimer.rangedPrayerOn == false){
              this.score += 1;
            }
          if(this.$store.state.Boss.jadAttack == "mage"
            && this.$store.state.tickTimer.magePrayerOn == false){
              this.score += 1;
            }

        }
    }
  }
</script>

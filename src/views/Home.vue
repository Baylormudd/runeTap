<template>
  <div class="home">
    <h1>home</h1>
    <h2>{{ timeTotal }}</h2>
     <h2>{{ isTickOn }}</h2>
       <a class="button is-danger" @click="timeStart();jadStart();">start Ticker</a>
       
       <a class="button"
        v-bind:class="{'is-success': rangedIsOn }" @click="prayerRangedStart()">
        range
        </a>
        <a class="button"
        v-bind:class="{'is-success': mageIsOn }" @click="prayerMageStart()">
        mage
        </a>
        {{currentBoss}}
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';

export default {
  name: 'home',
  computed: { ...mapState('tickTimer',['isTickOn', 'timeTotal','magePrayerOn','rangedPrayerOn','mageIsOn','rangedIsOn']),
              ...mapState('Boss',['bossTimeTotal','jadAttack','currentBoss','openMenu'])
            },
  methods: { ...mapActions('tickTimer',['timeStart','prayerRangedStart','prayerMageStart']),
             ...mapActions('Boss',['menuOpen','jadStart','jadSelect','zulrahSelect']),
            ...mapActions('Scores',['actionHit'])
           }
};
</script>

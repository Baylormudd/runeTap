<template>
  <div class="home">
       <div class="dropdown "
        v-bind:class="{'is-active': openMenu }"
 > 
       
  <div class="dropdown-trigger">
    <button class="button" @click="menuOpen()" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span>Select Boss</span>
     
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item" @click="zulrahSelect()">
        Zulrah
      </a>
      <a href="#" class="dropdown-item" @click="jadSelect()">
        Jad
      </a>
      <a href="#" class="dropdown-item">
        Zulrah
      </a>
    </div>
  </div>
</div>
  <div class="image is-128x128"
  v-bind:class="{'jadImage': jadIsOn}"
  ></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Boss',
  computed: mapState('Boss',['jadIsOn','currentHitsTaken','bossTimeTotal','jadAttack','currentBoss','openMenu']),
  methods: mapActions('Boss',['actionHit','menuOpen','jadStart','jadSelect','zulrahSelect']),
};
</script>

<style>
.jadImage{
  background: url("../assets/jadProfilePic.png");
  background-repeat: no-repeat;
}
</style>


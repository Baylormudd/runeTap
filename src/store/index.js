import Vue from 'vue';
import Vuex from 'vuex';

import tickTimer from './tickTimer';
import Boss from './Boss';
import Scores from './Scores';
Vue.use(Vuex);

export default new Vuex.Store({
 modules : {
     tickTimer,
     Boss,
     Scores
 }
});

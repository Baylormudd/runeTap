import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Boss from './views/Boss.vue';
import Scores from './views/Scores.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components:{
        default: Home,
        a: Boss,
        b: Scores
      } 
    }
  
  ],
});

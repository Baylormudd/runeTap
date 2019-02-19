const state = {
    currentHitsTaken: 0,
};


const mutations = {
    takeHit(){
        state.currentHitsTaken += 1;
    }
};

const actions = {
     actionHit({commit, rootState}){
        console.log('yoyo')
        var EventedLoop = require('eventedloop'); // Only relevant if you're using Node or Browserify
        var loop = new EventedLoop();
        loop.every('200ms', function (e) {
           
       
        if(rootState.Boss.jadAttack == "ranged" && 
            rootState.tickTimer.rangedPrayerOn == false){
                commit('takeHit')
        }
        if(rootState.Boss.jadAttack == "mage"){
            commit('takeHit')
    }

        });
        
    }
};
const getters = {
    currentHitsTaken(state){
        return state.currentHitsTaken;
    }
}

export default{
    namespaced: true,
    mutations,
    state,
    actions,
    getters
    
};
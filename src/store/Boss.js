const state = {
    currentBoss: "",
    jadIsOn: false,
    openMenu: false,
    jadAttack: "range",
    bossTimeTotal: 0,
    currentHitsTaken: 0,

};


const mutations = {
    takeHit(){
        state.currentHitsTaken += 1;
    },
    openIt(state){
        state.openMenu = !state.openMenu;
    },
    setJadOn(state){
        console.log('ayee');
        var EventedLoop = require('eventedloop'); // Only relevant if you're using Node or Browserify
        var loop = new EventedLoop();
        loop.every('600ms', function (e) {
            
           
            state.bossTimeTotal += parseInt(e.slice(0,3));

            if(state.bossTimeTotal % 4800 == 0){
           
                if(Math.floor(Math.random() * 11 <= 5)){   
                    state.jadAttack = "ranged";
                    console.log("ranged");  
                } else {
                    state.jadAttack = "mage";
                    console.log("mage");  
                }
                }   
          });
          loop.start();
    },
    selectJad(state){
        state.jadIsOn = true;
        state.openMenu = !state.openMenu;
        console.log(state.currentBoss);
    },
    selectZulrah(state){
        state.currentBoss = "zulrah";
        state.openMenu = !state.openMenu;
        console.log(state.currentBoss);
    },
};

const actions = {
    actionHit({commit, rootState}){
        
        
        if(rootState.Boss.jadAttack == "ranged" && 
            rootState.tickTimer.rangedPrayerOn == false){
                takeHit();
        }
        if(rootState.Boss.jadAttack == "mage"){
            commit('takeHit')
    }

        
    },
     menuOpen({ commit }){
        commit('openIt');
    },
    jadStart({ commit }){
        commit('setJadOn');
    },
    jadSelect({ commit }){
        commit('selectJad');
    },
    zulrahSelect({ commit }){
        commit('selectZulrah');
    },
};

const getters ={
    jadAttack(state) {
        return state.jadAttack;
    }
}

export default{
    namespaced: true,
    mutations,
    state,
    actions,
    getters
};
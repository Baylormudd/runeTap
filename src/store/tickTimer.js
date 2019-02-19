const state = {
    isTickOn: false,
    timeTotal: 0,
    magePrayerOn: false,
    rangedPrayerOn: false,
    mageIsOn: false,
    rangedIsOn: false,
};


const mutations = {
    setTickOn(state){
        var EventedLoop = require('eventedloop'); // Only relevant if you're using Node or Browserify
        var loop = new EventedLoop();
        loop.every('600ms', function (e) {
            
            state.isTickOn = !state.isTickOn;
            state.timeTotal += parseInt(e.slice(0,3));

            
            if(state.magePrayerOn){
                    state.mageIsOn = true;
                } 
            if(!state.magePrayerOn){
                    state.mageIsOn = false;  
                    } 
            
            if(state.rangedPrayerOn){
                    state.rangedIsOn = true;
                    } 
            if(!state.rangedPrayerOn){
                    state.rangedIsOn = false;  
                    } 
                
              
          });
          loop.start();
         
    },
    setRangedPrayerOn(state){
        state.rangedPrayerOn = !state.rangedPrayerOn;
        state.magePrayerOn = false;
     //   console.log(state.prayerOn);
        
    },
    setMagePrayerOn(state){
        state.magePrayerOn = !state.prayerOn;
        state.rangedPrayerOn = false;
     //   console.log(state.prayerOn);
        
    },
};

const actions = {
     timeStart({ commit }){
        commit('setTickOn');
    },
    prayerRangedStart({ commit }){
        commit('setRangedPrayerOn');
    },
    prayerMageStart({ commit }){
        commit('setMagePrayerOn');
    },
};

const getters = {
    getTime(state) {
        return state.timeTotal;
    }
}

export default{
    namespaced: true,
    mutations,
    state,
    actions,
    getters,
};
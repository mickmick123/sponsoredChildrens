import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://stg-svc.worldvision.ca/donorservice/api/profile/0c5cff858031433189bb6b392175e3ee/donor/children/en/NamedPrivate?svc=45507';
const headers = { Accept: 'application/json'};

export default new Vuex.Store({
	  state: {
	    childrenData:{},
	    loadingStatus: false
	  },
	  mutations:{
	  	setCurrentData(state, payload){
	  		state.childrenData = payload;
	  	},
	  	loadingStatus(state, newLoadingStatus){
	  		state.loadingStatus = newLoadingStatus;
	  	}
	  },
	  actions:{
	  	async setCurrentData(state, payload){
	  		state.commit('loadingStatus', true);
	  		const childs = await fetch(url, {headers});
	  		const c = await childs.json();
	  		state.commit(`setCurrentData`,c.sponsoredChildrenDisplay);
	  		state.commit('loadingStatus', false);
	  	}

	  },
	  modules:{},
	  getters:{
	  	getChildrens: state => state.childrenData,
	  	getLoadingState: state => state.loadingStatus
	  }
	  
})

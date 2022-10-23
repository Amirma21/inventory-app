import { createStore } from 'vuex'

export default createStore({
  state: {
    categoriesList : [
      {title:'' , description:'' }
    ]
  },
  getters: {
  },
  mutations: {
    addToCategoriesList (state , payload:any) {
      state.categoriesList.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})

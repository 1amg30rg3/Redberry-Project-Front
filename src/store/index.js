import { createStore } from 'vuex'
import auth from './auth'


export default createStore({
  state: {
    language: "en"
  },
  getters: {
    language (state) {
      return state.language
    },
  },
  mutations: {
    SET_LANGUAGE (state, value) {
      state.language = value
    },
  },
  actions: {
    lang ({ commit },lang) {
      commit('SET_LANGUAGE', lang)
    }
  },
  modules: {
    auth
  }
})

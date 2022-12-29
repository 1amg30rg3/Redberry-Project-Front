import axios from 'axios'
 
export default {
  namespaced: true,
 
  state: {
    authenticated: false,
    user: null,
    authStatus: null,
    registerStatus: null,
  },
 
  getters: {
    authenticated (state) {
      return state.authenticated
    },
 
    user (state) {
      return state.user
    },
  },
 
  mutations: {
    SET_AUTHENTICATED (state, value) {
      state.authenticated = value
    },
 
    SET_USER (state, value) {
      state.user = value
    },

    SET_AUTHSTATUS (state, value) {
      state.authStatus = value
    },
    SET_REGISTERSTATUS (state, value) {
      state.registerStatus = value
    },
  },
 
  actions: {
      async signIn ({ dispatch,commit }, credentials) {
        await axios.get('/sanctum/csrf-cookie')

        await axios.post('/api/login', credentials).then( (response) => {
          commit('SET_AUTHSTATUS', response.data.message)
        })

        return dispatch('me')
      },

      async signUp ({ dispatch,commit }, credentials) {
        await axios.get('/sanctum/csrf-cookie')
        await axios.post('/api/register', credentials).then( (response) => {
          commit('SET_REGISTERSTATUS', response.data.message)
        })
   
        return dispatch('me')
      },
   
      async signOut ({ dispatch }) {
        await axios.post('/api/logout')
        
        return dispatch('me')
      },
   
      me ({ commit }) {
        return axios.get('/api/user').then((response) => {
          commit('SET_AUTHENTICATED', true)
          commit('SET_USER', response.data)
          commit('SET_AUTHSTATUS', null)
          commit('SET_REGISTERSTATUS', null)       
        }).catch(() => {
          commit('SET_AUTHENTICATED', false)
          commit('SET_USER', null)
        })
    }
  }
}



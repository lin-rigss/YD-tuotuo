import Vue from 'vue'
import Vuex from 'vuex'
export default new Vuex.Store({
  modules: {
    vux: {
      state: {
        isLoading: false
      },
      mutations: {
        updateLoadingStatus (state, payload) {
          state.isLoading = payload.isLoading
        }
      },
      actions: {

      }
    }
  }
})

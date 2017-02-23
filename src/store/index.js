import Vue from 'vue'
import Vuex from 'vuex'
import cars from 'store/modules/cars'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cars
  },
  strict: debug
})

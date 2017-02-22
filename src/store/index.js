import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from 'store/cars/actions'
import cars from 'store/cars/modules/cars'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  modules: {
    cars
  },
  strict: debug
})

import Vue from 'vue'
import Vuex from 'vuex'
import cars from 'store/modules/cars'
import table from 'store/modules/table'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    cars,
    table
  },
  strict: debug
})

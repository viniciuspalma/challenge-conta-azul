import Vue from 'vue'
import Vuex from 'vuex'
import cars from 'store/modules/cars'
import table from 'store/modules/table'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const options = {
  modules: {
    cars,
    table
  },
  strict: debug
}

export default new Vuex.Store(options)
export { options }

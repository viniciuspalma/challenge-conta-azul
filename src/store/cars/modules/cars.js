import _ from 'lodash'

const state = {
  all: [],
  errors: [],
  showCar: {},
  filters: {
    combustivel: null,
    marca: null
  }
}

const mutations = {
  RECEIVE_CARS (state, cars) {
    state.all = cars
  },

  CREATE_CAR (state, car) {
    state.all.push(car)
  },

  ERROR_CREATE_CAR (state, errors) {
    state.errors = errors
  },

  ERROR_EDIT_CAR (state, errors) {
    state.errors = errors
  },

  SHOW_CAR (state, car) {
    state.showCar = car
  },

  UPDATE_CAR (state, car) {
    const cars = _.reject(state.all, current => current.id === car.id)
    cars.push(car)

    state.all = cars
  },

  SET_FILTER (state, filter) {
    state.filters[filter.category] = filter.hint
  },

  RESET_FILTERS (state, filter) {
    state.filters = {
      combustivel: null,
      marca: null
    }
  }
}

export default {
  state,
  mutations
}

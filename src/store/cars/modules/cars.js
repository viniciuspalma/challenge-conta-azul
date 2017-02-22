import _ from 'lodash'

const state = {
  all: [],
  errors: [],
  showCar: {}
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
  }
}

export default {
  state,
  mutations
}

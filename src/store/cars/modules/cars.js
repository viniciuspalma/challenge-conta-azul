import uuid from 'uuid/v4'

const state = {
  all: [],
  errors: []
}

const mutations = {
  RECEIVE_CARS (state, cars) {
    state.all = cars
  },

  CREATE_CAR (state, car) {
    car.id = uuid()
    state.all.push(car)
  },

  ERROR_CREATE_CAR (state, errors) {
    state.errors = errors
  }
}

export default {
  state,
  mutations
}

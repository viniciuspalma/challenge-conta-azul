import _ from 'lodash'
import uuid from 'uuid/v4'
import apiCar from 'api/cars'
import validator from 'validators/cars'

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

  RESET_FILTERS (state) {
    state.filters = {
      combustivel: null,
      marca: null
    }
  },

  DELETE_CAR (state, carId) {
    state.all = _.reject(state.all, car => car.id === carId)
  },

  MASS_DELETE_CARS (state, carIds) {
    state.all = _.reject(state.all, car => _.includes(carIds, car.id))
  }
}

const actions = {
  getCars ({ commit }) {
    apiCar.getCars(cars => {
      commit('RECEIVE_CARS', cars)
    })
  },

  createCar ({ commit }, payload) {
    payload.car.id = uuid()

    const errors = validator(payload.car)

    if (errors.length > 0) {
      return commit('ERROR_CREATE_CAR', errors)
    }

    apiCar.saveCar(payload.car, () => commit('CREATE_CAR', payload.car))
    apiCar.findCar(payload.car.id, (current) => commit('SHOW_CAR', current))
    payload.router.push({name: 'ShowCar', params: { id: payload.car.id }})

    commit('ERROR_CREATE_CAR', [])
  },

  showCar ({ commit }, id) {
    apiCar.findCar(id, (car) => commit('SHOW_CAR', car))
  },

  editCar ({commit}, payload) {
    payload.car.id = payload.id
    const errors = validator(payload.car)

    if (errors.length > 0) {
      return commit('ERROR_EDIT_CAR', errors)
    }

    apiCar.updateCar(payload.car, (current) => commit('UPDATE_CAR', current))
    commit('SHOW_CAR', payload.car)
  },

  setFilter ({ commit }, filter) {
    commit('SET_FILTER', filter)
  },

  resetFilters ({ commit }) {
    commit('RESET_FILTERS')
  },

  deleteCar ({ commit }, carId) {
    apiCar.deleteCar(carId, () => commit('DELETE_CAR', carId))
  },

  massDeleteCars ({ commit }, carIds) {
    apiCar.massDeleteCars(carIds, () => commit('MASS_DELETE_CARS', carIds))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

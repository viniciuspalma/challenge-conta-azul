import uuid from 'uuid/v4'
import apiCar from 'api/cars'
import validator from 'validators/cars'

export const getCars = ({ commit }) => {
  apiCar.getCars(cars => {
    commit('RECEIVE_CARS', cars)
  })
}

export const createCar = ({ commit }, payload) => {
  payload.car.id = uuid()

  const errors = validator(payload.car)

  if (errors.length > 0) {
    return commit('ERROR_CREATE_CAR', errors)
  }

  apiCar.saveCar(payload.car, () => commit('CREATE_CAR', payload.car))
  apiCar.findCar(payload.car.id, (current) => commit('SHOW_CAR', current))
  payload.router.push({name: 'ShowCar', params: { id: payload.car.id }})

  commit('ERROR_CREATE_CAR', [])
}

export const showCar = ({ commit }, id) => {
  apiCar.findCar(id, (car) => commit('SHOW_CAR', car))
}

export const editCar = ({commit}, payload) => {
  payload.car.id = payload.id
  const errors = validator(payload.car)

  if (errors.length > 0) {
    return commit('ERROR_EDIT_CAR', errors)
  }

  apiCar.updateCar(payload.car, (current) => commit('UPDATE_CAR', current))
  commit('SHOW_CAR', payload.car)
}

import apiCar from 'api/cars'
import validator from 'validators/cars'

export const getCars = ({ commit }) => {
  apiCar.getCars(cars => {
    commit('RECEIVE_CARS', cars)
  })
}

export const createCar = ({ commit }, car) => {
  const errors = validator(car)

  if (errors.length > 0) {
    return commit('ERROR_CREATE_CAR', errors)
  }

  apiCar.saveCar(car, () => commit('CREATE_CAR', car))

  commit('ERROR_CREATE_CAR', [])
}

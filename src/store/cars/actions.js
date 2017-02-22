import apiCar from 'api/cars'

export const getCars = ({ commit }) => {
  apiCar.getCars(cars => {
    commit('RECEIVE_CARS', cars)
  })
}

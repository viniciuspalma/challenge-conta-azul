const state = {
  all: []
}

const mutations = {
  RECEIVE_CARS (state, cars) {
    state.all = cars
  }
}

export default {
  state,
  mutations
}

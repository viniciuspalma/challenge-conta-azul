import _ from 'lodash'

const state = {
  tables: {}
}

const mutations = {
  CREATE_TABLE (state, payload) {
    state.tables = {
      ...state.tables,
      [payload.tableName]: {
        rowsIdentities: payload.rowsIdentities,
        rowsSelected: []
      }
    }
  },

  SELECT_ROW (state, payload) {
    state
      .tables[payload.tableName]
      .rowsSelected
      .push(payload.rowIdentity)
  },

  DESELECT_ROW (state, payload) {
    state
      .tables[payload.tableName]
      .rowsSelected = _.reject(
        state.tables[payload.tableName].rowsSelected,
        row => row === payload.rowIdentity
      )
  },

  SELECT_ALL_ROWS (state, tableName) {
    state
      .tables[tableName]
      .rowsSelected = state.tables[tableName].rowsIdentities
  },

  DESELECT_ALL_ROWS (state, tableName) {
    state
      .tables[tableName]
      .rowsSelected = []
  }
}

const actions = {
  createTable ({ commit }, payload) {
    commit('CREATE_TABLE', payload)
  },

  selectRow ({ commit }, payload) {
    commit('SELECT_ROW', payload)
  },

  deselectRow ({ commit }, payload) {
    commit('DESELECT_ROW', payload)
  },

  selectAllRows ({ commit }, tableName) {
    commit('SELECT_ALL_ROWS', tableName)
  },

  deselectAllRows ({ commit }, tableName) {
    commit('DESELECT_ALL_ROWS', tableName)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

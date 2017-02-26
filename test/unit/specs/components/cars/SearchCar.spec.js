import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import SearchCar from 'components/cars/SearchCar'
import store, { options } from 'store'
import router from 'router'

describe('SearchCar.vue', () => {
  let testOptions

  beforeEach(() => {
    testOptions = _.cloneDeep(options)
  })

  context('first render with initial states', () => {
    const vm = new Vue({
      template: '<div><search-car /></div>',
      components: { SearchCar },
      store,
      router
    }).$mount()

    it('has input to search', () => {
      expect(vm.$el.querySelectorAll('.input').length).to.equal(1)
    })

    it('has icon on input', () => {
      expect(vm.$el.querySelectorAll('.icon').length).to.equal(1)
    })

    it('selected filters area are invisible', () => {
      expect(vm.$el.querySelectorAll('.selected-filters').length).to.equal(0)
    })

    it('hints area are invisible', () => {
      expect(vm.$el.querySelectorAll('.hints').length).to.equal(0)
    })
  })
})

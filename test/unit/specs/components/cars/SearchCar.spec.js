import Vue from 'vue'
import SearchCar from 'components/cars/SearchCar'
import store from 'store'
import router from 'router'

describe('SearchCar.vue', () => {
  context('first render with initial states', () => {
    const vm = new Vue({
      template: '<div><search-car :hints="{}"/></div>',
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

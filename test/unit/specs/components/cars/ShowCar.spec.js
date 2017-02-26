import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import ShowCar from 'components/cars/ShowCar'
import store, { options } from 'store'
import router from 'router'

describe('ShowCar.vue', () => {
  let testOptions

  beforeEach(() => {
    testOptions = _.cloneDeep(options)
  })

  context('when has a setted show car in store', () => {
    it('has a correct title', () => {
      sinon.stub(testOptions.modules.cars.actions, 'showCar', ({ commit }) => {
        commit('SHOW_CAR', {
          id: '1',
          modelo: 'foo',
          marca: 'bar',
          placa: 'ABC-1234',
          valor: '12345',
          combustivel: 'baz',
          imagem: ''
        })
      })

      const stubbedStore = new Vuex.Store(testOptions)

      const vm = new Vue({
        template: '<div><show-car /></div>',
        components: { ShowCar },
        store: stubbedStore,
        router
      }).$mount()

      expect(vm.$el.querySelector('.title').textContent).to.equal('bar - foo')
    })

    it('has a form to edit cars', () => {
      sinon.stub(testOptions.modules.cars.actions, 'showCar', ({ commit }) => {
        commit('SHOW_CAR', {
          id: '1',
          modelo: 'foo',
          marca: 'bar',
          placa: 'ABC-1234',
          valor: '12345',
          combustivel: 'baz',
          imagem: ''
        })
      })

      const stubbedStore = new Vuex.Store(testOptions)

      const vm = new Vue({
        template: '<div><show-car /></div>',
        components: { ShowCar },
        store: stubbedStore,
        router
      }).$mount()

      expect(vm.$el.querySelectorAll('form').length).to.equal(1)
    })
  })
})

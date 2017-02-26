import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import CarNavigation from 'components/cars/CarNavigation'
import store, { options } from 'store'
import router from 'router'

describe('CarNavigation.vue', () => {
  let testOptions

  beforeEach(() => {
    testOptions = _.cloneDeep(options)
  })

  context('first render with initial states', () => {
    const Component = Vue.extend({ ...CarNavigation, store })
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Component),
      router
    })

    it('has link to new cars page', () => {
      expect(vm.$el.querySelector('.button-box a').href).to.contains('#/cars/new')
    })

    it('has only one link to new cars page', () => {
      expect(vm.$el.querySelectorAll('.button-box a').length).to.equal(1)
    })

    it('has link to new cars page with correct text', () => {
      expect(vm.$el.querySelector('.button-box a').textContent).to.contains('Novo Carro')
    })

    it('edit action button invisible', () => {
      expect(vm.$el.querySelectorAll('.edit').length).to.equal(0)
    })

    it('delete action button invisible', () => {
      expect(vm.$el.querySelectorAll('.delete').length).to.equal(0)
    })
  })

  context('state updates and DOM changes', (done) => {
    it('has button actions', () => {
      testOptions.modules.table.state = {
        tables: {
          cars: {
            rowsIdentities: ['1'],
            rowsSelected: ['1']
          }
        }
      }

      const stubbedStore = new Vuex.Store(testOptions)
      const Component = Vue.extend({ ...CarNavigation, store: stubbedStore })
      const vm = new Vue({
        el: document.createElement('div'),
        render: h => h(Component),
        router
      })

      Vue.nextTick(() => {
        expect(vm.$el.querySelectorAll('.edit').length).to.equal(1)
        expect(vm.$el.querySelectorAll('.delete').length).to.equal(1)
        done()
      })
    })
  })
})

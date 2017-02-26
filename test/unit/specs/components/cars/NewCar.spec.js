import Vue from 'vue'
import NewCar from 'components/cars/NewCar'
import store from 'store'
import router from 'router'

describe('NewCar.vue', () => {
  const vm = new Vue({
    template: '<div><new-car /></div>',
    components: { NewCar },
    store,
    router
  }).$mount()

  it('has a correct title', () => {
    expect(vm.$el.querySelector('.title').textContent).to.equal('Novo Carro')
  })

  it('has a form to create cars', () => {
    expect(vm.$el.querySelectorAll('form').length).to.equal(1)
  })
})

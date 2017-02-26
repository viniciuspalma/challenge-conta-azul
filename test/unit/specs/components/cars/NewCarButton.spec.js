import Vue from 'vue'
import NewCarButton from 'components/cars/NewCarButton'

describe('NewCarButton.vue', () => {
  const vm = new Vue({
    template: '<div><new-car-button /></div>',
    components: { NewCarButton }
  }).$mount()

  it('has a correct label for button', () => {
    expect(vm.$el.querySelector('button').textContent).to.contains('Novo Carro')
  })

  it('has only one button', () => {
    expect(vm.$el.querySelectorAll('button').length).to.equal(1)
  })
})

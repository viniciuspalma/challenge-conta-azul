import Vue from 'vue'
import HeaderContaAzul from 'components/shared/HeaderContaAzul'
import store from 'store'
import router from 'router'

describe('HeaderContaAzul.vue', () => {
  const vm = new Vue({
    template: '<div><header-conta-azul /></div>',
    components: { HeaderContaAzul },
    store,
    router
  }).$mount()

  it('has a link to home', () => {
    expect(vm.$el.querySelector('a').href).to.contains('#/')
  })
})

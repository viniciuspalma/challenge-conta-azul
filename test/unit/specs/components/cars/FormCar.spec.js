import Vue from 'vue'
import FormCar from 'components/cars/FormCar'
import store from 'store'
import router from 'router'

describe('FormCar.vue', () => {
  context('when values are passed as empty fields', () => {
    const vm = new Vue({
      template: '<div><form-car :values="values"/></div>',
      components: { FormCar },
      data () {
        return {
          values: {
            modelo: '',
            marca: '',
            placa: '',
            valor: '',
            combustivel: '',
            imagem: ''
          }
        }
      },
      store,
      router
    }).$mount()

    it('has model input', () => {
      expect(vm.$el.querySelectorAll('.input[name="modelo"]').length).to.equal(1)
    })

    it('has brand input', () => {
      expect(vm.$el.querySelectorAll('.input[name="marca"]').length).to.equal(1)
    })

    it('has plate input', () => {
      expect(vm.$el.querySelectorAll('.input[name="placa"]').length).to.equal(1)
    })

    it('has value input', () => {
      expect(vm.$el.querySelectorAll('.input[name="valor"]').length).to.equal(1)
    })

    it('has fuel input', () => {
      expect(vm.$el.querySelectorAll('.input[name="combustivel"]').length).to.equal(1)
    })

    it('has imagem input', () => {
      expect(vm.$el.querySelectorAll('.input[name="imagem"]').length).to.equal(1)
    })

    it('has a submit button', () => {
      expect(vm.$el.querySelectorAll('[name="submit"]').length).to.equal(1)
    })

    it('has a back button', () => {
      expect(vm.$el.querySelectorAll('.back').length).to.equal(1)
    })

    it('has empty fields', () => {
      expect(vm.$el.querySelector('.input[name="modelo"]').value).to.equal('')
      expect(vm.$el.querySelector('.input[name="marca"]').value).to.equal('')
      expect(vm.$el.querySelector('.input[name="placa"]').value).to.equal('')
      expect(vm.$el.querySelector('.input[name="combustivel"]').value).to.equal('')
      expect(vm.$el.querySelector('.input[name="valor"]').value).to.equal('')
      expect(vm.$el.querySelector('.input[name="imagem"]').value).to.equal('')
    })
  })

  context('when values are passed as valued fields', () => {
    const vm = new Vue({
      template: '<div><form-car :values="values"/></div>',
      components: { FormCar },
      data () {
        return {
          values: {
            modelo: 'foo',
            marca: 'bar',
            placa: 'baz',
            valor: 'barfoo',
            combustivel: 'barbaz',
            imagem: 'bazfoo'
          }
        }
      },
      store,
      router
    }).$mount()

    it('has valued fields', () => {
      expect(vm.$el.querySelector('.input[name="modelo"]').value).to.equal('foo')
      expect(vm.$el.querySelector('.input[name="marca"]').value).to.equal('bar')
      expect(vm.$el.querySelector('.input[name="placa"]').value).to.equal('baz')
      expect(vm.$el.querySelector('.input[name="valor"]').value).to.equal('barfoo')
      expect(vm.$el.querySelector('.input[name="combustivel"]').value).to.equal('barbaz')
      expect(vm.$el.querySelector('.input[name="imagem"]').value).to.equal('bazfoo')
    })
  })
})

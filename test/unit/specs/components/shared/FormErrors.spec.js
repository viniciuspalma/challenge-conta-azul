import Vue from 'vue'
import FormErrors from 'components/shared/FormErrors'

describe('FormErrors.vue', () => {
  context('when errors passed are empty', () => {
    const vm = new Vue({
      template: '<div><form-errors :errors="errors"/></div>',
      components: { FormErrors },
      data () {
        return {
          errors: []
        }
      }
    }).$mount()

    it('form errors is invisible', () => {
      expect(vm.$el.querySelectorAll('.form-errors').length).to.equal(0)
    })

    it('form errors items are invisible', () => {
      expect(vm.$el.querySelectorAll('.error').length).to.equal(0)
    })
  })

  context('when errors passed are empty', () => {
    const vm = new Vue({
      template: '<div><form-errors :errors="errors"/></div>',
      components: { FormErrors },
      data () {
        return {
          errors: ['foo', 'bar', 'baz']
        }
      }
    }).$mount()

    it('form errors is visible', () => {
      expect(vm.$el.querySelectorAll('.form-errors').length).to.equal(1)
    })

    it('form errors items are visible', () => {
      expect(vm.$el.querySelectorAll('.error').length).to.equal(3)
    })

    it('correct order and text in the errors', () => {
      expect(vm.$el.querySelectorAll('.error')[0].textContent).to.contains('foo')
      expect(vm.$el.querySelectorAll('.error')[1].textContent).to.contains('bar')
      expect(vm.$el.querySelectorAll('.error')[2].textContent).to.contains('baz')
    })
  })
})

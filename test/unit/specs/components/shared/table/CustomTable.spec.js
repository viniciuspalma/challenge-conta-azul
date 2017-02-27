import Vue from 'vue'
import CustomTable from 'components/shared/table/CustomTable'
import store from 'store'
import router from 'router'

describe('CustomTable.vue', () => {
  const vm = new Vue({
    template: `<div><custom-table :fields="fields" :rows="rows" table-name="test"/></div>`,
    components: { CustomTable },
    data () {
      return {
        rows: [
          { id: 'abc', foo: 'foo1', bar: 'bar1' },
          { id: 'def', foo: 'foo2', bar: 'bar2' },
          { id: 'ghi', foo: 'foo3', bar: 'bar3' }
        ],
        fields: [
          {property: 'foo', label: 'foo'},
          {property: 'bar', label: 'bar'}
        ]
      }
    },
    store,
    router
  }).$mount()

  it('has a correct table heads', () => {
    expect(vm.$el.querySelectorAll('th').length).to.equal(3)
  })

  it('has a correct table rows', () => {
    expect(vm.$el.querySelectorAll('tr').length).to.equal(4)
  })

  it('has a correct first table head text', () => {
    expect(vm.$el.querySelectorAll('th')[1].textContent).to.contains('foo')
  })

  it('has a correct second table head text', () => {
    expect(vm.$el.querySelectorAll('th')[2].textContent).to.contains('bar')
  })
})

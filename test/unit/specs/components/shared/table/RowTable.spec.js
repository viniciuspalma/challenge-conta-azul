import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'
import RowTable from 'components/shared/table/RowTable'
import { options } from 'store'
import router from 'router'

describe('RowTable.vue', () => {
  let testOptions

  beforeEach(() => {
    testOptions = _.cloneDeep(options)
  })

  it('has correct columns and tuples', () => {
    testOptions.modules.table.state = {
      tables: {
        test: {
          rowsIdentities: ['abc123', 'def456'],
          rowsSelected: ['abc123']
        }
      }
    }

    const stubbedStore = new Vuex.Store(testOptions)

    const vm = new Vue({
      template: `<div><row-table
        :table-name="tableName"
        :row="row"
        :fields="fields" /></div>`,
      components: { RowTable },
      data () {
        return {
          tableName: 'test',
          row: {
            id: 'abc123',
            foo: 'Foo',
            bar: 'Bar'
          },
          fields: [
            {property: 'foo', label: 'Foo'},
            {property: 'bar', label: 'Bar'}
          ]
        }
      },
      store: stubbedStore,
      router
    }).$mount()

    expect(vm.$el.querySelectorAll('td').length).to.equal(3)
    expect(vm.$el.querySelector('.checkbox').children[0].type)
      .to.equal('checkbox')
    expect(vm.$el.querySelectorAll('td')[1].textContent).to.contains('Foo')
    expect(vm.$el.querySelectorAll('td')[2].textContent).to.contains('Bar')
  })
})

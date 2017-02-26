import Vue from 'vue'
import Paginator from 'components/shared/Paginator'
import store from 'store'
import router from 'router'

describe('Paginator.vue', () => {
  const vm = new Vue({
    template: `<div><paginator :page="page"
      :numberOfItems="numberOfItems"
      :pathName="pathName"
      :itemsPerPage="itemsPerPage"/></div>`,
    components: { Paginator },
    data () {
      return {
        page: 3,
        numberOfItems: 50,
        pathName: 'Home',
        itemsPerPage: 5
      }
    },
    store,
    router
  }).$mount()

  it('has the correct number of items', () => {
    expect(vm.$el.querySelectorAll('.item').length).to.equal(12)
  })

  it('has first item with a link to first page', () => {
    expect(vm.$el.querySelectorAll('.item')[0].children[0].href)
      .to.contains('#/?page=1')
  })

  it('has last item with a link to last page', () => {
    expect(vm.$el.querySelectorAll('.item')[11].children[0].href)
      .to.contains('#/?page=10')
  })

  it('has only one active item', () => {
    expect(vm.$el.querySelectorAll('.item.active').length).to.equal(1)
  })

  it('has active item with correct number of page', () => {
    expect(vm.$el.querySelector('.item.active').textContent).to.contains(3)
  })
})

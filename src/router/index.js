import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/Home'
import NewCar from 'components/cars/NewCar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/cars/new',
      name: 'NewCar',
      component: NewCar
    }
  ]
})

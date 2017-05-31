import Vue from 'vue'
import Router from 'vue-router'
import Basics from './pages/basics'
import Vux from './pages/vux'
import Iview from './pages/iview'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Basics },
    { path: '/vux', component: Vux },
    { path: '/view', component: Iview }
  ]
})

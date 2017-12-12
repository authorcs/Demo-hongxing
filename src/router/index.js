import Vue from 'vue'
import Router from 'vue-router'
import mContent from 'components/m-content'
import About from 'base/about'
import News from 'base/news'
import Brand from 'base/brand'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: mContent
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/brand',
      component: Brand
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

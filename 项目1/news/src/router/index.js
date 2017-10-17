import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Baijiu from '@/components/baijiu'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
    path: "/home",
    component:Home

    },
    {
    path: "/baijiu",
    component:Baijiu

    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutUs from '@/components/AboutUs'
import MonsterRollodex from '@/components/MonsterRollodex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/aboutus',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/monsterrollodex',
      name: 'MonsterRollodex',
      component: MonsterRollodex
    }

  ]
})

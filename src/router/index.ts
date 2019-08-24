import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello.vue'
import HelloTS from '@/components/HelloTs.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/HelloTS',
      name: 'HelloTS',
      component: HelloTS
    }
  ]
})

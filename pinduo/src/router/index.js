import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import Recommended from '@/views/recommended/recommended'
import Search from '@/views/search/search'
import Chat from '@/views/chat/chat'
import My from '@/views/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path: '/',
          redirect:'/home/hot'
        },
        {
          path: 'hot',
          component: ()=> import('@/views/home/pages/hot')
        },{
          path: 'clothing',
          component: ()=> import('@/views/home/pages/clothing')
        }
      ]
    },{
      path: '/recommended',
      name: 'Recommended',
      component: Recommended
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/chat',
      name: 'Chat',
      component: Chat
    },{
      path: '/my',
      name: 'My',
      component: My
    }
  ]
})

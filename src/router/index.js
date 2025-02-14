import { createRouter, createWebHistory } from 'vue-router'
import AllGamesWidgets from '../Views/AllGamesWidgets.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllGamesWidgets
    },
    {
      path: '/achivments/:gameClass',
      name: 'achievments',
      component: () => import('../Views/Achievments.vue'),
      props: route => ({ gameClass: route.params.gameClass })
    },
    {
      path: '/timeline/',
      name: 'timeline',
      component:  () => import('../Views/timeLine.vue')
    },
    {
      path: '/quiz/',
      name: 'quiz',
      component:  () => import('../Views/Quiz.vue')
    }
  ],
})

export default router
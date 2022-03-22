import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/Home/Home.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { title: 'Home' },
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to?.meta?.title as string) || document.title
  next();
})

export default router;



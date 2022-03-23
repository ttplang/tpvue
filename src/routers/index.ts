import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/Home/Home.vue');
const Found = () => import('../views/Home/Found.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    meta: { title: '网易云音乐' },
    component: Home,
    children: [
      {
        path: '',
        component: Found,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = (to?.meta?.title as string) || document.title;
  // if(to?.fullPath !== from?.fullPath) 
    next();
  
})

export default router;



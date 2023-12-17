import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPostView from "@/views/AddPostView.vue";
import SignupView from "@/views/SignupView.vue";
import LogIn from "@/views/LogIn.vue"
import APost from "@/views/APost.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPostView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LogIn
  },
  {
    path: '/apost',
    name: 'apost',
    component: APost
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

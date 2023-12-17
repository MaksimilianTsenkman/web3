import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPostView from "@/views/AddPostView.vue";
import SignupView from "@/views/SignupView.vue";
import LogIn from "@/views/LogIn.vue"
import APost from "@/views/APost.vue"
import auth from "../auth";
import contactUs from "@/views/contactUs.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: '/addPost',
    name: 'addPost',
    component: AddPostView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
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
    path: '/apost/:id',
    name: 'apost',
    component: APost,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
        next('/login')
      } else {
        next();
      }
    }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: contactUs
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

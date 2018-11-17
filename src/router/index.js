import Vue from 'vue'
import Router from 'vue-router'
import landing from '../components/landing_page'
import buat from '../components/buat'
import login from '../components/login'
import agenda from '../components/agenda'
import admin from '../components/admin'
import utama from '@/components/utama'
import firebase from 'firebase'

Vue.use(Router)
export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'landing',
      component: landing
    },
    {
      path: '/buat',
      name: 'buat',
      component: buat
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/agenda',
      name: 'agenda',
      component: agenda
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/utama',
      name: 'utama',
      component: utama
    }

  ]
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next()
  else next()
})
export default router
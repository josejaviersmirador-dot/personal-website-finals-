import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Gallery from './Gallery.vue'
import Profile from './Profile.vue'
import Resources from './Resources.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/gallery.html', component: Gallery },
  { path: '/profile.html', component: Profile },
  { path: '/Resources.html', component: Resources }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
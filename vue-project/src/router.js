import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home.vue'
import Gallery from './Gallery.vue'
import Profile from './Profile.vue'
import Resources from './Resources.vue'
import Music from './Music.vue' // <-- Added the Music import

const routes = [
  { path: '/', component: Home },
  { path: '/gallery', component: Gallery },
  { path: '/profile', component: Profile },
  { path: '/resources', component: Resources },
  { path: '/music', component: Music } // <-- Added the Music route
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
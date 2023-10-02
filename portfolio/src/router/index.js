import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import SkillsView from '../views/SkillsView.vue'
import ProjectView from '../views/ProjectView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView
    },
    {
      path: '/',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/',
      name: 'projects',
      component: ProjectView
    },
    {
      path: '/',
      name: 'contact',
      component: ContactView
    }
  ]
})

export default router

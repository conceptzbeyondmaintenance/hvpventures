<script setup>
import { ref, computed, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import FloatingBrochure from './components/FloatingBrochure.vue'
import HomePage from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import GradePage from './pages/GradePage.vue'
import AboutPage from './pages/AboutPage.vue'
import FaqPage from './pages/FaqPage.vue'
import ContactPage from './pages/ContactPage.vue'
import { pageNames } from './data/content.js'

const getPage = () => {
  const hash = location.hash.slice(1)
  return hash in pageNames ? hash : 'home'
}

const page = ref(getPage())
const route = () => { page.value = getPage(); window.scrollTo(0, 0) }

onMounted(() => {
  addEventListener('hashchange', route)
  addEventListener('popstate', route)
})
onBeforeUnmount(() => {
  removeEventListener('hashchange', route)
  removeEventListener('popstate', route)
})

watchEffect(() => { document.title = `${pageNames[page.value]} | HVP Ventures` })

const pages = { home: HomePage, products: ProductsPage, about: AboutPage, faq: FaqPage, contact: ContactPage }
const current = computed(() => pages[page.value] || GradePage)
</script>

<template>
  <SiteHeader :page="page" />
  <main :data-page="pageNames[page]">
    <component :is="current" :id="current === GradePage ? page : undefined" :key="page" />
  </main>
  <FloatingBrochure :page="page" />
  <SiteFooter />
</template>

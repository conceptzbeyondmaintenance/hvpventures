<script setup>
import AppLink from './AppLink.vue'
import BrandMark from './BrandMark.vue'
import { pageNames } from '../data/content.js'

defineProps({ page: { type: String, required: true } })
const navItems = ['products', 'about', 'faq', 'contact']
</script>

<template>
  <header class="header">
    <div class="shell header__inner">
      <AppLink to="home" class="wordmark"><BrandMark /> <span>HVP Ventures</span></AppLink>
      <nav aria-label="Main navigation">
        <AppLink v-for="item in navItems" :key="item" :to="item" :class="page === item ? 'active' : ''">{{ pageNames[item] }}</AppLink>
      </nav>
    </div>
  </header>
</template>

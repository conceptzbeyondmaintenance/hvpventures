<script setup>
import { ref, watch } from 'vue'
import AppLink from './AppLink.vue'
import BrandMark from './BrandMark.vue'
import BrochureAction from './BrochureAction.vue'
import Icon from './Icon.vue'
import { pageNames, products, CONTACT } from '../data/content.js'

const props = defineProps({ page: { type: String, required: true } })
const open = ref(false)
watch(() => props.page, () => { open.value = false })

const isProduct = (page) => page === 'products' || products.some((p) => p.page === page)
</script>

<template>
  <div class="topbar">
    <div class="container topbar__inner">
      <div class="topbar__group">
        <AppLink :to="CONTACT.whatsappUrl" target="_blank"><Icon name="phone" />WhatsApp {{ CONTACT.whatsapp }}</AppLink>
        <AppLink :to="`mailto:${CONTACT.email}`"><Icon name="mail" />{{ CONTACT.email }}</AppLink>
      </div>
      <div class="topbar__group topbar__group--secondary">
        <span>Agar agar E406 · GS600 to GS1000</span>
        <BrochureAction><Icon name="download" />E-brochure 2026</BrochureAction>
      </div>
    </div>
  </div>
  <header class="header">
    <div class="container header__inner">
      <AppLink to="home" class="wordmark">
        <BrandMark />
        <span class="wordmark__text"><strong>HVP Ventures</strong><small>Agar agar exporter</small></span>
      </AppLink>
      <button class="nav-toggle" type="button" :aria-expanded="open" aria-controls="main-nav" aria-label="Toggle navigation" @click="open = !open"><span /></button>
      <nav id="main-nav" :class="['nav', { open }]" aria-label="Main navigation">
        <AppLink to="home" :class="['nav__link', { active: page === 'home' }]">Home</AppLink>
        <div class="nav__item">
          <AppLink to="products" :class="['nav__link', { active: isProduct(page) }]">Products <i class="nav__caret" /></AppLink>
          <div class="nav__menu">
            <AppLink v-for="p in products" :key="p.page" :to="p.page">{{ p.title }}</AppLink>
          </div>
        </div>
        <AppLink v-for="item in ['about', 'faq']" :key="item" :to="item" :class="['nav__link', { active: page === item }]">{{ pageNames[item] }}</AppLink>
        <AppLink to="contact" class="button button--small nav__cta">Request a quote</AppLink>
      </nav>
    </div>
  </header>
</template>

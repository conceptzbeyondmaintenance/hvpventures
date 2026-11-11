<script setup>
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import { faqs } from '../data/content.js'
</script>

<template>
  <PageHero>Agar Agar FAQ: Gel Strength, Certification and Ordering</PageHero>
  <div class="faq-list">
    <section v-for="([q, a], i) in faqs" :key="i">
      <span class="faq-number">{{ String(i + 1).padStart(2, '0') }}</span>
      <div><h2>{{ q }}</h2><p><RichText :segments="a" /></p></div>
    </section>
  </div>
  <BrochureGateway />
</template>

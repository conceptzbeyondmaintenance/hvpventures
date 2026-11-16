<script setup>
import SectionLabel from './SectionLabel.vue'
import { supplyChain } from '../data/content.js'

defineProps({ tint: { type: Boolean, default: false } })
</script>

<template>
  <section :class="['section', { 'section--tint': tint }]">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>Supply chain</SectionLabel>
        <h2>From seaweed to shipment</h2>
      </div>
      <div class="chain">
        <figure v-for="step in supplyChain" :key="step.title">
          <img :src="step.image" :alt="step.alt" width="800" height="600" loading="lazy" decoding="async" />
          <figcaption><strong>{{ step.title }}</strong><span>{{ step.copy }}</span></figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

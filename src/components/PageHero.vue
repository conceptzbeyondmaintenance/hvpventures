<script setup>
import BrandMark from './BrandMark.vue'

defineProps({
  lead: { type: String, default: '' },
  label: { type: String, default: 'Essential ingredients worldwide' },
})
</script>

<template>
  <section class="hero">
    <div class="hero__copy">
      <div class="eyebrow">{{ label }}</div>
      <h1><slot /></h1>
      <p v-if="lead" class="lead">{{ lead }}</p>
    </div>
    <div class="hero__art"><BrandMark large /><span>HVP · AGAR AGAR</span></div>
  </section>
</template>

<script setup>
import SeaArt from './SeaArt.vue'
import WaveDivider from './WaveDivider.vue'

defineProps({
  lead: { type: String, default: '' },
  label: { type: String, default: 'Essential ingredients worldwide' },
  wave: { type: String, default: '#fff' },
})
</script>

<template>
  <section class="page-hero">
    <SeaArt />
    <div class="container">
      <div class="page-hero__inner">
        <slot name="crumbs" />
        <div class="eyebrow">{{ label }}</div>
        <h1><slot /></h1>
        <p v-if="lead" class="page-hero__lead">{{ lead }}</p>
      </div>
    </div>
    <WaveDivider :color="wave" />
  </section>
</template>

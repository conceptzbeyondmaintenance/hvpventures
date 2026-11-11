<script setup>
import AppLink from './AppLink.vue'

defineProps({
  title: { type: String, required: true },
  actionLabel: { type: String, required: true },
})
</script>

<template>
  <section class="about-closing quotation-band">
    <div>
      <div class="about-closing__title">{{ title }}</div>
      <p><slot /></p>
    </div>
    <AppLink to="contact" class="button quotation-band__button">{{ actionLabel }}<span aria-hidden="true">↗</span></AppLink>
  </section>
</template>

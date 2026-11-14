<script setup>
import AppLink from './AppLink.vue'
import Icon from './Icon.vue'
import SeaArt from './SeaArt.vue'

defineProps({
  title: { type: String, required: true },
  actionLabel: { type: String, required: true },
})
</script>

<template>
  <section class="cta-band">
    <SeaArt />
    <div class="container cta-band__inner">
      <div>
        <h2>{{ title }}</h2>
        <p><slot /></p>
      </div>
      <AppLink to="contact" class="button button--light">{{ actionLabel }}<Icon name="arrow" /></AppLink>
    </div>
  </section>
</template>

<script setup>
// Renders an array of segments: plain strings, or { to, text } links.
import AppLink from './AppLink.vue'
defineProps({ segments: { type: Array, required: true } })
</script>

<template>
  <template v-for="(seg, i) in segments" :key="i">
    <AppLink v-if="typeof seg === 'object'" :to="seg.to">{{ seg.text }}</AppLink>
    <template v-else>{{ seg }}</template>
  </template>
</template>

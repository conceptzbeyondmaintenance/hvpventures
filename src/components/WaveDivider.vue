<script setup>
defineProps({ color: { type: String, default: '#fff' } })
</script>

<template>
  <svg class="hero__wave" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true">
    <path :fill="color" d="M0 38c180 34 360 34 540 6s360-40 540-12 270 30 360 20v18H0z" />
  </svg>
</template>

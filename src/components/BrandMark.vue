<script setup>
defineProps({ large: { type: Boolean, default: false } })
</script>

<template>
  <svg :class="['mark', { 'mark--large': large }]" viewBox="0 0 48 48" aria-hidden="true">
    <rect width="48" height="48" rx="12" fill="#0a2f3c" />
    <path d="M24 40V20M24 30c-6-1-9-5-9-11M24 26c6-1 9-5 9-11M24 20c-2-4-1-8 0-11" fill="none" stroke="#6fd3c4" stroke-width="2.6" stroke-linecap="round" />
    <path d="M9 38c3-2.5 6-2.5 9 0s6 2.5 9 0 6-2.5 9 0" fill="none" stroke="#c2553f" stroke-width="2.6" stroke-linecap="round" />
  </svg>
</template>

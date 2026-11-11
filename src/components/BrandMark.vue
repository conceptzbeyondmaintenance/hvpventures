<script setup>
defineProps({ large: { type: Boolean, default: false } })
</script>

<template>
  <span :class="['mark', { 'mark--large': large }]" aria-hidden="true"><i /><i /><i /><i /></span>
</template>

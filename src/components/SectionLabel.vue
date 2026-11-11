<script setup>
defineProps({ number: { type: String, required: true } })
</script>

<template>
  <div class="eyebrow"><span>{{ number }}</span><slot /></div>
</template>

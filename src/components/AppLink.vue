<script setup>
import { computed } from 'vue'

const props = defineProps({
  to: { type: String, required: true },
  target: { type: String, default: undefined },
})

const href = computed(() =>
  /^(http|\/|mailto:)/.test(props.to) ? props.to : `#${props.to}`,
)
</script>

<template>
  <a :href="href" :target="target" :rel="target === '_blank' ? 'noopener noreferrer' : undefined"><slot /></a>
</template>

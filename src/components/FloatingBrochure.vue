<script setup>
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import BrochureAction from './BrochureAction.vue'

// Re-observe the page's brochure section whenever the route changes.
const props = defineProps({ page: { type: String, required: true } })
const merged = ref(false)
let observer

function observe() {
  observer?.disconnect()
  const section = document.getElementById('brochure-download')
  if (!section) { merged.value = false; return }
  observer = new IntersectionObserver(([entry]) => { merged.value = entry.isIntersecting }, { threshold: 0.2 })
  observer.observe(section)
}

onMounted(observe)
watch(() => props.page, () => nextTick(observe))
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <BrochureAction :class="['floating-brochure', { 'floating-brochure--merged': merged }]">
    <span>Download brochure</span><span aria-hidden="true">↓</span>
  </BrochureAction>
</template>

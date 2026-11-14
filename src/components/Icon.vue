<script setup>
defineProps({ name: { type: String, required: true } })

const paths = {
  food: 'M4 11a8 8 0 0 1 16 0H4zM3 11h18M6 15h12l-1.5 5h-9L6 15z',
  lab: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3M7.5 15h9',
  drop: 'M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z',
  pill: 'M10.5 20.5a5 5 0 0 1-7-7l7-7a5 5 0 0 1 7 7l-7 7zM8.5 8.5l7 7',
  factory: 'M3 21V10l6 4v-4l6 4V4h6v17H3zM7 17h2M12 17h2M17 17h1',
  doc: 'M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01',
  ship: 'M3 17l1.5 4h15L21 17M5 17V9h14v8M9 9V5h6v4M12 13v4',
  globe: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail: 'M3 6h18v12H3V6zM3 7l9 7 9-7',
  pin: 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  download: 'M12 4v11M7 11l5 5 5-5M5 20h14',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  box: 'M3 8l9-5 9 5v8l-9 5-9-5V8zM3 8l9 5 9-5M12 13v8',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  shield: 'M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3zM8.5 12l2.5 2.5 4.5-5',
}
</script>

<template>
  <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="paths[name]" />
  </svg>
</template>

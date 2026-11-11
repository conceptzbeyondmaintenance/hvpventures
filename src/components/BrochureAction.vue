<script setup>
import { BROCHURE_URL, BROCHURE_FILENAME } from '../data/content.js'
</script>

<template>
  <a :href="BROCHURE_URL" :download="BROCHURE_FILENAME"><slot /></a>
</template>

<script setup>
import AppLink from './AppLink.vue'
import Icon from './Icon.vue'
import SectionLabel from './SectionLabel.vue'
import { BROCHURE_URL, BROCHURE_FILENAME } from '../data/content.js'

defineProps({ tint: { type: Boolean, default: false } })
</script>

<template>
  <section id="brochure-download" :class="['section', { 'section--tint': tint }]">
    <div class="container">
      <div class="brochure">
        <div class="brochure__cover" aria-label="HVP Ventures agar agar e-brochure cover">
          <span>HVP VENTURES</span>
          <strong>Agar agar,<br />sourced with diligence.</strong>
          <small>E-brochure · 2026</small>
        </div>
        <div>
          <SectionLabel>Trade reference · PDF</SectionLabel>
          <h2>HVP Ventures agar agar e-brochure 2026</h2>
          <p>Download the product and trade reference brochure as a PDF.</p>
          <div class="brochure__actions">
            <a class="button" :href="BROCHURE_URL" :download="BROCHURE_FILENAME"><Icon name="download" />Download PDF <small>207 KB</small></a>
            <AppLink to="contact" class="button button--ghost">Request a sample</AppLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

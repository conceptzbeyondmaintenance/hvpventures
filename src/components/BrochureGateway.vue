<script setup>
import AppLink from './AppLink.vue'
import BrandMark from './BrandMark.vue'
import SectionLabel from './SectionLabel.vue'
import { BROCHURE_URL, BROCHURE_FILENAME } from '../data/content.js'
</script>

<template>
  <section id="brochure-download" class="brochure-gateway">
    <div class="brochure-cover" aria-label="HVP Ventures agar agar e-brochure cover">
      <BrandMark large /><span>HVP VENTURES</span><strong>Agar agar,<br />sourced with diligence.</strong><small>E-brochure · 2026</small>
    </div>
    <div>
      <SectionLabel number="E-brochure · PDF">Trade reference</SectionLabel>
      <h2>HVP Ventures agar agar e-brochure 2026</h2>
      <p>Download the product and trade reference brochure as a PDF.</p>
      <div class="gateway-actions">
        <a class="button" :href="BROCHURE_URL" :download="BROCHURE_FILENAME">Download PDF <span>207 KB</span></a>
        <AppLink to="contact">Request a sample</AppLink>
      </div>
    </div>
  </section>
</template>

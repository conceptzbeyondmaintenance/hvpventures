<script setup>
import AppLink from './AppLink.vue'
import BrandMark from './BrandMark.vue'
import BrochureAction from './BrochureAction.vue'
import { CONTACT } from '../data/content.js'
</script>

<template>
  <footer class="footer">
    <div class="shell footer__grid">
      <div class="footer__brand"><BrandMark /><span>HVP Ventures</span></div>
      <div>
        <p>Agar agar supplier and exporter of food grade, bacteriological and technical agar agar (E406), GS600 to GS1000.</p>
        <p>Founder — Harshvardhan, WhatsApp <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink>, email <AppLink :to="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</AppLink>.</p>
        <p>{{ CONTACT.address }}.</p>
        <BrochureAction class="footer-brochure">Download the HVP Ventures agar agar e-brochure 2026</BrochureAction>
      </div>
    </div>
  </footer>
</template>

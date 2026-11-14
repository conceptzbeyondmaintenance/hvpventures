<script setup>
import AppLink from './AppLink.vue'
import BrandMark from './BrandMark.vue'
import BrochureAction from './BrochureAction.vue'
import Icon from './Icon.vue'
import { CONTACT, products } from '../data/content.js'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__grid">
      <div>
        <AppLink to="home" class="wordmark">
          <BrandMark />
          <span class="wordmark__text"><strong>HVP Ventures</strong><small>Agar agar exporter</small></span>
        </AppLink>
        <p class="footer__about">Agar agar supplier and exporter of food grade, bacteriological and technical agar agar (E406), GS600 to GS1000.</p>
      </div>
      <div>
        <h4>Products</h4>
        <ul>
          <li v-for="p in products" :key="p.page"><AppLink :to="p.page">{{ p.title }}</AppLink></li>
          <li><AppLink to="products">Full agar range</AppLink></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><AppLink to="about">About us</AppLink></li>
          <li><AppLink to="faq">FAQ</AppLink></li>
          <li><AppLink to="contact">Contact</AppLink></li>
          <li><BrochureAction>E-brochure 2026 (PDF)</BrochureAction></li>
        </ul>
      </div>
      <div>
        <h4>Trade desk</h4>
        <ul class="footer__contact">
          <li><Icon name="user" /><span>Harshvardhan, Founder</span></li>
          <li><Icon name="phone" /><AppLink :to="CONTACT.whatsappUrl" target="_blank">WhatsApp {{ CONTACT.whatsapp }}</AppLink></li>
          <li><Icon name="mail" /><AppLink :to="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</AppLink></li>
          <li><Icon name="pin" /><span>{{ CONTACT.address }}</span></li>
        </ul>
      </div>
    </div>
    <div class="container footer__bottom">
      <span>© {{ year }} HVP Ventures. All rights reserved.</span>
      <span>HS code 1302.31 · Food additive E406</span>
    </div>
  </footer>
</template>

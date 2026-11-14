<script setup>
import PageHero from '../components/PageHero.vue'
import RichText from '../components/RichText.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { faqs } from '../data/content.js'
</script>

<template>
  <PageHero label="Frequently asked questions">Agar Agar FAQ: Gel Strength, Certification and Ordering</PageHero>
  <section class="section">
    <div class="container">
      <div class="faq">
        <details v-for="([q, a], i) in faqs" :key="i" :open="i === 0">
          <summary>{{ q }}</summary>
          <p><RichText :segments="a" /></p>
        </details>
      </div>
    </div>
  </section>
  <BrochureGateway tint />
  <QuotationBand title="Still have a question?" action-label="Contact our trade desk">
    Send your grade, quantity and destination and we will reply with a written quotation.
  </QuotationBand>
</template>

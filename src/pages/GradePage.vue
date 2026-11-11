<script setup>
import { computed } from 'vue'
import AppLink from '../components/AppLink.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { gradeData, CONTACT } from '../data/content.js'

const props = defineProps({ id: { type: String, required: true } })
const data = computed(() => gradeData[props.id])
const strengths = ['GS600', 'GS900', 'GS1000']
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <AppLink to="home">Home</AppLink><span>/</span><AppLink to="products">Products</AppLink><span>/</span><span>{{ data.name }}</span>
  </nav>

  <PageHero :lead="data.lead" label="Grade specification">{{ data.title }}</PageHero>

  <div class="detail-grid">
    <section>
      <SectionLabel number="01">Strength</SectionLabel>
      <h2>Gel strength grades</h2>
      <ul class="ruled-list">
        <li v-for="x in strengths" :key="x"><span class="spec">{{ x }}</span><span>supplied in 25 kg bags</span></li>
      </ul>
    </section>
    <section>
      <SectionLabel number="02">Best for</SectionLabel>
      <h2>Typical applications</h2>
      <ul class="ruled-list">
        <li v-for="x in data.applications" :key="x"><span>{{ x }}</span></li>
      </ul>
    </section>
  </div>

  <BrochureGateway />

  <QuotationBand title="Request this grade" action-label="Request a quotation or sample">
    Send your required gel strength grade, quantity and destination to our trade desk. Each quotation states the certificate of analysis for the lot offered. WhatsApp <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink>.
  </QuotationBand>
</template>

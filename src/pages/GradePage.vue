<script setup>
import { computed } from 'vue'
import AppLink from '../components/AppLink.vue'
import BrochureAction from '../components/BrochureAction.vue'
import Icon from '../components/Icon.vue'
import PageHero from '../components/PageHero.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { gradeData, tradeFacts, CONTACT } from '../data/content.js'

const props = defineProps({ id: { type: String, required: true } })
const data = computed(() => gradeData[props.id])
const strengths = ['GS600', 'GS900', 'GS1000']
</script>

<template>
  <PageHero :lead="data.lead" label="Grade specification">
    <template #crumbs>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <AppLink to="home">Home</AppLink><span>/</span><AppLink to="products">Products</AppLink><span>/</span><span>{{ data.name }}</span>
      </nav>
    </template>
    {{ data.title }}
  </PageHero>

  <section class="section">
    <div class="container detail">
      <div>
        <div class="detail__block">
          <h2>Gel strength grades</h2>
          <div class="table-wrap">
            <table class="table">
              <thead><tr><th>Grade</th><th>Packaging</th></tr></thead>
              <tbody>
                <tr v-for="x in strengths" :key="x"><th scope="row" class="spec">{{ x }}</th><td>Supplied in 25 kg bags</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="detail__block">
          <h2>Typical applications</h2>
          <ul class="tile-list">
            <li v-for="x in data.applications" :key="x"><Icon name="check" />{{ x }}</li>
          </ul>
        </div>
      </div>
      <aside class="sidebar-card">
        <h3>Trade details</h3>
        <dl>
          <div v-for="[k, v] in tradeFacts" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></div>
        </dl>
        <AppLink to="contact" class="button">Request a quotation<Icon name="arrow" /></AppLink>
        <BrochureAction class="button button--ghost"><Icon name="download" />Download brochure</BrochureAction>
      </aside>
    </div>
  </section>

  <BrochureGateway tint />

  <QuotationBand title="Request this grade" action-label="Request a quotation or sample">
    Send your required gel strength grade, quantity and destination to our trade desk. Each quotation states the certificate of analysis for the lot offered. WhatsApp <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink>.
  </QuotationBand>
</template>

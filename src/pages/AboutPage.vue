<script setup>
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { CONTACT } from '../data/content.js'

const facts = [
  ['3', 'Grades', 'Food, bacteriological, technical'],
  ['2+', 'Standard gel strengths', 'Plus custom to order'],
  ['4', 'Certifications', 'FSSC 22000, HACCP, Halal, Kosher'],
  ['2', 'Export regions', 'Europe, USA'],
]
const specs = [
  ['HS code', '1302.31 (13023100)'],
  ['Food additive', 'E406'],
  ['Halal certificate', '[number, issuing body, expiry]'],
  ['Kosher certificate', '[number, issuing body, expiry]'],
]
</script>

<template>
  <PageHero label="About HVP Ventures" lead="HVP Ventures is an India-based agar agar trading company. We source E406 food additive grades across Asia — Indonesia, Japan and India — and supply them in bulk to buyers in Europe and the USA. [City] is our registered base.">
    Who we are and how we source.
  </PageHero>

  <section class="stats">
    <div class="container">
      <div class="stats__grid">
        <div v-for="[value, label, note] in facts" :key="label" class="stat"><strong>{{ value }}</strong><span>{{ label }}</span><small>{{ note }}</small></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="grid grid--3">
        <article class="feature">
          <span class="feature__num">01 · THE FIRM</span>
          <h3>Who we are.</h3>
          <p>We are a young trading house and we buy with the discipline of an established one. We start from the buyer’s specification, not from a price list.</p>
        </article>
        <article class="feature">
          <span class="feature__num">02 · SOURCING AND EXPORT</span>
          <h3>Asian sourcing and export markets.</h3>
          <p>Our agar agar is sourced from Gracilaria red seaweed through established manufacturers in Indonesia, Japan and India. We select suppliers against the required grade, gel strength, application and documentation.</p>
          <div class="chips"><span class="chip">Europe</span><span class="chip">USA</span></div>
          <p style="margin-top: 14px">We supply buyers across Europe and the USA.</p>
        </article>
        <article class="feature">
          <span class="feature__num">03 · CERTIFICATES</span>
          <h3>Specification and certificates.</h3>
          <dl>
            <div v-for="[label, value] in specs" :key="label"><dt>{{ label }}</dt><dd>{{ value }}</dd></div>
          </dl>
          <p>Halal and kosher status is backed by a current certificate, provided on request.</p>
        </article>
      </div>

      <div class="founder" style="margin-top: 32px">
        <div class="founder__mark" aria-hidden="true">HP</div>
        <div>
          <SectionLabel>Founder</SectionLabel>
          <h3>Harshvardhan Pandey</h3>
          <p>WhatsApp {{ CONTACT.whatsapp }} · {{ CONTACT.email }}</p>
        </div>
      </div>
    </div>
  </section>

  <BrochureGateway tint />

  <QuotationBand title="Begin with a specification." action-label="Request a quotation">
    We will place samples in your lab, with no obligation.
  </QuotationBand>
</template>

<script setup>
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'

const facts = [
  ['3', 'Grades (food, bacteriological, technical)'],
  ['2+', 'standard gel strengths, plus custom'],
  ['4', 'certifications (FSSC 22000, HACCP, Halal, Kosher)'],
  ['2', 'export regions (Europe, USA)'],
]
const specs = [
  ['HS code', '1302.31 (13023100)'],
  ['Food additive', 'E406'],
  ['Halal certificate', '[number, issuing body, expiry]'],
  ['Kosher certificate', '[number, issuing body, expiry]'],
]
</script>

<template>
  <section class="about-credentials">
    <header class="about-section-header">
      <div class="about-eyebrow">ABOUT HVP VENTURES</div>
      <h2>Who we are and how we source.</h2>
      <p class="about-lead">HVP Ventures is an India-based agar agar trading company. We source E406 food additive grades across Asia — Indonesia, Japan and India — and supply them in bulk to buyers in Europe and the USA. [City] is our registered base.</p>
    </header>

    <section class="founder-block">
      <div class="founder-mark" aria-hidden="true">HP</div>
      <div>
        <h3>Harshvardhan Pandey · Founder</h3>
        <p>WhatsApp +91 9899665331 · red.venutres26@gmail.com</p>
      </div>
    </section>

    <div class="fact-strip">
      <div v-for="[value, label] in facts" :key="label" class="fact-stat"><strong>{{ value }}</strong><span>{{ label }}</span></div>
    </div>

    <div class="credential-grid">
      <article class="credential-card">
        <span class="credential-card__number">01</span>
        <h3>The firm</h3>
        <h4>Who we are.</h4>
        <p>We are a young trading house and we buy with the discipline of an established one. We start from the buyer’s specification, not from a price list.</p>
      </article>
      <article class="credential-card">
        <span class="credential-card__number">02</span>
        <h3>Sourcing and export</h3>
        <h4>Asian sourcing and export markets.</h4>
        <p>Our agar agar is sourced from Gracilaria red seaweed through established manufacturers in Indonesia, Japan and India. We select suppliers against the required grade, gel strength, application and documentation.</p>
        <div class="market-chips"><span class="market-chip">Europe</span><span class="market-chip">USA</span></div>
        <p>We supply buyers across Europe and the USA.</p>
      </article>
      <article class="credential-card credential-card--spec">
        <span class="credential-card__number">03</span>
        <h3>Certificates</h3>
        <h4>Specification and certificates.</h4>
        <dl>
          <div v-for="[label, value] in specs" :key="label" class="about-spec-row"><dt>{{ label }}</dt><dd>{{ value }}</dd></div>
        </dl>
        <p>Halal and kosher status is backed by a current certificate, provided on request.</p>
      </article>
    </div>

    <BrochureGateway />

    <QuotationBand title="Begin with a specification." action-label="Request a quotation">
      We will place samples in your lab, with no obligation.
    </QuotationBand>
  </section>
</template>

<script setup>
import AppLink from '../components/AppLink.vue'
import BrochureAction from '../components/BrochureAction.vue'
import Icon from '../components/Icon.vue'
import SeaArt from '../components/SeaArt.vue'
import WaveDivider from '../components/WaveDivider.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { products, stats, applications, certifications, processSteps, CONTACT } from '../data/content.js'

const principles = [
  ['target', 'Specification first', 'We start from your target — grade, gel strength and application — not from a price list.'],
  ['lab', 'Samples before commitment', 'Samples go to your lab. Test them against your own method, with no obligation.'],
  ['doc', 'Documented, every lot', 'A full certificate pack and a batch COA travel with every shipment.'],
]
const heroFacts = [
  ['Grades', 'Food · Bacteriological · Technical'],
  ['Gel strength', 'GS600 to GS1000 g/cm²'],
  ['Packaging', '25 kg bags'],
  ['Trade terms', 'FOB or CIF'],
  ['Sourced from', 'Indonesia · Japan · India'],
]
</script>

<template>
  <section class="hero">
    <SeaArt />
    <div class="container hero__inner">
      <div>
        <div class="eyebrow">Essential ingredients worldwide</div>
        <h1>Agar agar supplier and exporter, <em>sourced at origin in Asia</em></h1>
        <p class="hero__lead">HVP Ventures is an agar agar trading company from India. We source food grade, bacteriological and technical agar agar (E406) from Asia and supply bulk orders to food manufacturers, laboratories and industrial buyers worldwide.</p>
        <div class="hero__actions">
          <AppLink to="contact" class="button button--light">Request a quotation<Icon name="arrow" /></AppLink>
          <AppLink to="products" class="button button--outline-light">View products</AppLink>
        </div>
        <ul class="hero__chips">
          <li><Icon name="check" />Samples to your lab</li>
          <li><Icon name="check" />Batch COA with every lot</li>
          <li><Icon name="check" />From Gracilaria red seaweed</li>
        </ul>
      </div>
      <aside class="spec-card" aria-label="Supply at a glance">
        <div class="spec-card__title">Supply at a glance <span>E406</span></div>
        <dl>
          <div v-for="[k, v] in heroFacts" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></div>
        </dl>
        <BrochureAction class="button button--outline-light"><Icon name="download" />Download e-brochure</BrochureAction>
      </aside>
    </div>
    <WaveDivider />
  </section>

  <section class="stats">
    <div class="container">
      <div class="stats__grid">
        <div v-for="[value, label, note] in stats" :key="label" class="stat">
          <strong>{{ value }}</strong><span>{{ label }}</span><small>{{ note }}</small>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>Our products</SectionLabel>
        <h2>Agar agar for food, bacteriological and technical use</h2>
        <p>Three product lines, each available from GS600 to GS1000 gel strength.</p>
      </div>
      <div class="grid grid--3">
        <article v-for="product in products" :key="product.title" class="card">
          <div :class="['product-card__visual', product.tone]"><Icon :name="product.icon" /><span>{{ product.tag }}</span></div>
          <div class="card__body">
            <h3>{{ product.title }}</h3>
            <p>{{ product.description }}</p>
            <AppLink :to="product.page" class="card__link">{{ product.link }}<Icon name="arrow" /></AppLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section--tint">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>Applications</SectionLabel>
        <h2>Where our agar agar is used</h2>
      </div>
      <div class="grid grid--4">
        <AppLink v-for="app in applications" :key="app.title" :to="app.page" class="feature">
          <span class="icon-badge"><Icon :name="app.icon" /></span>
          <h3>{{ app.title }}</h3>
          <p>{{ app.copy }}</p>
        </AppLink>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container split">
      <div>
        <SectionLabel>Why HVP Ventures</SectionLabel>
        <h2>Young house. Older discipline.</h2>
        <p class="lead" style="margin-top: 14px">We are a young trading house, and we buy like a careful one: the specification comes first, samples come before commitment, and every lot arrives with its paperwork.</p>
        <ul class="check-list">
          <li v-for="[, title] in principles" :key="title"><Icon name="check" />{{ title }}</li>
        </ul>
      </div>
      <div class="grid">
        <article v-for="[icon, title, copy] in principles" :key="title" class="feature" style="display: flex; gap: 18px">
          <span class="icon-badge"><Icon :name="icon" /></span>
          <div><h3 style="margin: 2px 0 6px">{{ title }}</h3><p>{{ copy }}</p></div>
        </article>
      </div>
    </div>
  </section>

  <section class="section section--aqua">
    <div class="container split">
      <div class="origin-panel">
        <h3>Bulk agar agar on FOB and CIF terms</h3>
        <p>Pricing depends on grade, volume and destination.</p>
        <dl>
          <div><dt>Raw material</dt><dd>Gracilaria red seaweed</dd></div>
          <div><dt>Origins</dt><dd>Indonesia, Japan, India</dd></div>
          <div><dt>Packaging</dt><dd>25 kg bags</dd></div>
          <div><dt>Trade terms</dt><dd>FOB or CIF</dd></div>
          <div><dt>Export markets</dt><dd>Europe, USA</dd></div>
        </dl>
      </div>
      <div>
        <SectionLabel>At origin</SectionLabel>
        <h2>Asian agar agar sourced at origin</h2>
        <p style="margin-top: 14px">Our agar agar is sourced from Gracilaria red seaweed across established Asian supply markets. We work with experienced agar agar manufacturers in Asia and supply buyers in Europe and the USA.</p>
        <p>Each lot is supplied with a certificate of analysis that states its gel strength, moisture and ash. Agar agar is sold in 25 kg bags on FOB or CIF terms, so please <AppLink to="contact">request a quotation</AppLink> for current terms.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>Quality and documentation</SectionLabel>
        <h2>Certificates supplied with your order</h2>
      </div>
      <div class="certs">
        <div v-for="c in certifications" :key="c" class="cert">
          <span class="cert__seal"><Icon name="shield" /></span>
          <div><strong>{{ c }}</strong><small>Certificate on request</small></div>
        </div>
      </div>
      <p class="note" style="text-align: center">Halal and kosher status is confirmed per product by a current certificate. See the <AppLink to="about">About page</AppLink> for certificate details.</p>
    </div>
  </section>

  <section class="section section--tint">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>How ordering works</SectionLabel>
        <h2>Begin with a specification</h2>
      </div>
      <ol class="steps">
        <li v-for="[number, title, copy] in processSteps" :key="number" class="step">
          <div class="step__num">{{ number }}</div>
          <h3>{{ title }}</h3>
          <p>{{ copy }}</p>
        </li>
      </ol>
    </div>
  </section>

  <BrochureGateway />

  <QuotationBand title="Request a quotation or sample" action-label="Request an agar agar quotation">
    Send your grade, quantity and destination port to our trade desk, or reach Harshvardhan Pandey on WhatsApp at <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink>.
  </QuotationBand>
</template>

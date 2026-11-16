<script setup>
import AppLink from '../components/AppLink.vue'
import BrochureAction from '../components/BrochureAction.vue'
import Icon from '../components/Icon.vue'
import SeaArt from '../components/SeaArt.vue'
import WaveDivider from '../components/WaveDivider.vue'
import SectionLabel from '../components/SectionLabel.vue'
import SupplyChain from '../components/SupplyChain.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { products, stats, applications, certifications, principles, processSteps, catalogNote, CONTACT } from '../data/content.js'

const heroFacts = [
  ['Agar powder', 'GS600 to GS1000'],
  ['Carrageenan', 'Refined · Semi-refined · Blends'],
  ['Seaweed', 'Semi-processed ATC · ATS'],
  ['Packaging', '25 kg bags'],
  ['Trade terms', 'FOB or CIF'],
]
</script>

<template>
  <section class="hero">
    <SeaArt />
    <div class="container hero__inner">
      <div>
        <div class="eyebrow">Essential ingredients worldwide</div>
        <h1>Agar agar supplier and exporter, <em>sourced at origin in Asia</em></h1>
        <p class="hero__lead">HVP Ventures is an Indian trading company. We source food grade, bacteriological and technical agar agar (E406) from Asia and supply bulk orders to food manufacturers, laboratories and industrial buyers worldwide.</p>
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
        <div class="spec-card__title">Supply at a glance <span>E406 · E407</span></div>
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
        <h2>Product catalogue</h2>
        <p>{{ catalogNote }}</p>
      </div>
      <div class="grid grid--4">
        <article v-for="product in products" :key="product.title" class="card">
          <div :class="['product-card__visual', 'product-card__visual--photo', product.tone]" :style="{ backgroundImage: `url(${product.image})` }"><Icon :name="product.icon" /><span>{{ product.tag }}</span></div>
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
          <img class="feature__img" :src="app.image" :alt="app.alt" width="800" height="600" loading="lazy" decoding="async" />
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
        <p class="lead" style="margin-top: 14px">HVP Ventures is an India-based hydrocolloids trading company. We are a young trading house, and we buy like a careful one: the specification comes first, samples come before commitment, and every lot arrives with its paperwork.</p>
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
        <h3>Bulk hydrocolloids on FOB and CIF terms</h3>
        <p>Products are sold as per the specifications.</p>
        <dl>
          <div><dt>Products</dt><dd>Agar, carrageenan, raw seaweed</dd></div>
          <div><dt>Sourcing</dt><dd>Established Asian supply markets</dd></div>
          <div><dt>Documents</dt><dd>COA with every lot</dd></div>
          <div><dt>Trade terms</dt><dd>FOB or CIF</dd></div>
          <div><dt>Buyers</dt><dd>Worldwide</dd></div>
        </dl>
      </div>
      <div>
        <SectionLabel>At origin</SectionLabel>
        <h2>Asian agar, carrageenan and raw seaweed sourced at origin</h2>
        <p style="margin-top: 14px">Our hydrocolloids are sourced across established Asian supply markets. We work with experienced manufacturers in Asia and supply buyers all over the world.</p>
        <p>Each lot is supplied with a certificate of analysis that states its specifications and details like gel strength, moisture and ash. Products are sold on FOB or CIF terms as per the specifications, so please <AppLink to="contact">request a quotation</AppLink> for current terms.</p>
      </div>
    </div>
  </section>

  <SupplyChain />

  <section class="section section--tint">
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
      <p class="note" style="text-align: center">Halal and kosher status is confirmed per product by a current certificate.</p>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>How ordering works</SectionLabel>
        <h2>From brief to shipment</h2>
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

  <BrochureGateway tint />

  <QuotationBand title="Begin with a specification." action-label="Request a quotation">
    We will place samples in your lab, with no obligation. Founder Harshvardhan Pandey · WhatsApp <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink> · <AppLink :to="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</AppLink>
  </QuotationBand>
</template>

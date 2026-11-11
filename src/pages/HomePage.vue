<script setup>
import AppLink from '../components/AppLink.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { products, CONTACT } from '../data/content.js'

const principles = [
  ['01', 'Specification first', 'We start from your target — grade, gel strength and application — not from a price list.'],
  ['02', 'Samples before commitment', 'Samples go to your lab. Test them against your own method, with no obligation.'],
  ['03', 'Documented, every lot', 'A full certificate pack and a batch COA travel with every shipment.'],
]
</script>

<template>
  <div class="home-page">
    <PageHero lead="HVP Ventures is an agar agar supplier and exporter, operating as an agar agar trading company from India. We source food grade, bacteriological and technical agar agar (E406) from Asia and supply bulk orders in 25 kg bags on FOB and CIF terms to food manufacturers, laboratories and industrial buyers worldwide. Every grade ranges from GS600 to GS1000 gel strength.">
      HVP Ventures: Agar Agar Supplier and Exporter from Asia
    </PageHero>

    <section class="home-products">
      <div class="home-section-heading">
        <SectionLabel number="01">The range</SectionLabel>
        <h2>Agar agar for food, bacteriological and technical use</h2>
      </div>
      <div class="cards">
        <article v-for="(product, index) in products" :key="product.title" class="card">
          <span class="card__number">0{{ index + 1 }}</span>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
          <AppLink :to="product.page">{{ product.link }} <span aria-hidden="true">→</span></AppLink>
        </article>
      </div>
    </section>

    <section class="home-proof">
      <div class="home-proof__intro">
        <SectionLabel number="02">Why HVP Ventures</SectionLabel>
        <h2>Young house. Older discipline.</h2>
        <p class="lead">We are a young trading house, and we buy like a careful one: the specification comes first, samples come before commitment, and every lot arrives with its paperwork.</p>
      </div>
      <div class="principles">
        <article v-for="[num, title, copy] in principles" :key="num">
          <span>{{ num }}</span>
          <div><h3>{{ title }}</h3><p>{{ copy }}</p></div>
        </article>
      </div>
    </section>

    <section class="home-trade">
      <article>
        <SectionLabel number="03">At origin</SectionLabel>
        <h2>Asian agar agar sourced at origin</h2>
        <p>Our agar agar is sourced from Gracilaria red seaweed across established Asian supply markets. We work with experienced agar agar manufacturers in Asia and supply buyers in Europe and the USA. Each lot is supplied with a certificate of analysis that states its gel strength, moisture and ash.</p>
      </article>
      <article>
        <SectionLabel number="04">Trade terms</SectionLabel>
        <h2>Bulk agar agar on FOB and CIF terms</h2>
        <p>Agar agar is sold in 25 kg bags on FOB or CIF terms. Pricing depends on grade, volume and destination, so please <AppLink to="contact">request a quotation</AppLink> for current terms.</p>
      </article>
    </section>

    <BrochureGateway />

    <QuotationBand title="Request a quotation or sample" action-label="Request an agar agar quotation">
      Send your grade, quantity and destination port to our trade desk, or reach Harshvardhan Pandey on WhatsApp at <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink>.
    </QuotationBand>
  </div>
</template>

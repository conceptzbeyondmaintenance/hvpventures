<script setup>
import AppLink from '../components/AppLink.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { CONTACT, ABOUT_IMAGE, principles, certifications } from '../data/content.js'
</script>

<template>
  <PageHero label="About HVP Ventures" lead="HVP Ventures is an India-based hydrocolloids trading company. We are a young trading house, and we buy like a careful one: the specification comes first, samples come before commitment, and every lot arrives with its paperwork.">
    Young house. Older discipline.
  </PageHero>

  <section class="section">
    <div class="container">
      <div class="grid grid--3">
        <article v-for="([, title, copy], i) in principles" :key="title" class="feature">
          <span class="feature__num">0{{ i + 1 }}</span>
          <h3>{{ title }}</h3>
          <p>{{ copy }}</p>
          <template v-if="i === 2">
            <div class="chips"><span v-for="c in certifications" :key="c" class="chip">{{ c }}</span></div>
            <p style="margin-top: 14px">Halal and kosher status is confirmed per product by a current certificate.</p>
          </template>
        </article>
      </div>

      <div class="split" style="margin-top: 56px">
        <img class="photo" :src="ABOUT_IMAGE" alt="Seaweed farmer carrying the harvest at sunset" width="1200" height="800" loading="lazy" decoding="async" />
        <div>
        <SectionLabel>At origin</SectionLabel>
        <h2 style="margin-bottom: 14px">Asian agar, carrageenan and raw seaweed sourced at origin.</h2>
        <p>Our hydrocolloids are sourced across established Asian supply markets. We work with experienced manufacturers in Asia and supply buyers all over the world.</p>
        <p>Each lot is supplied with a certificate of analysis that states its specifications and details like gel strength, moisture and ash. Products are sold on FOB or CIF terms as per the specifications, so please <AppLink to="contact">request a quotation</AppLink> for current terms.</p>
        </div>
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

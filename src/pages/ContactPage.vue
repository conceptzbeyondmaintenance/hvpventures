<script setup>
import { ref } from 'vue'
import AppLink from '../components/AppLink.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import { CONTACT, processSteps } from '../data/content.js'

const sent = ref(false)
const submit = () => { sent.value = true }
</script>

<template>
  <PageHero lead="HVP Ventures is an agar agar supplier in India, with product sourced at origin in Asia and supplied worldwide. Use the form below to request an agar agar quotation or an agar agar sample. Include your grade, quantity and destination port.">
    Agar Agar Supplier in India: Request a Quotation or Sample
  </PageHero>

  <section class="contact-overview">
    <div class="contact-overview__heading">
      <SectionLabel number="01">Trade desk</SectionLabel>
      <h2>Direct contact</h2>
    </div>
    <div class="contact-methods">
      <article><span>FOUNDER</span><strong>Harshvardhan</strong></article>
      <article><span>WHATSAPP</span><AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink></article>
      <article><span>EMAIL</span><AppLink :to="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</AppLink></article>
      <article><span>OFFICE</span><p>{{ CONTACT.address }}</p></article>
    </div>
  </section>

  <section class="process">
    <div class="process__heading">
      <SectionLabel number="02">How ordering works</SectionLabel>
      <h2>Begin with a specification.</h2>
    </div>
    <ol class="process__steps">
      <li v-for="[number, title, copy] in processSteps" :key="number">
        <div class="process__marker">{{ number }}</div>
        <div class="process__copy"><h3>{{ title }}</h3><p>{{ copy }}</p></div>
      </li>
    </ol>
  </section>

  <BrochureGateway />

  <section class="quotation-section">
    <div class="quotation-section__intro">
      <SectionLabel number="03">Your brief</SectionLabel>
      <h2>Request an agar agar quotation or sample</h2>
      <p>Include your grade, specification, quantity and destination country.</p>
    </div>
    <div class="quotation-section__form">
      <form @submit.prevent="submit">
        <div class="form-grid">
          <label><span>Full name</span><input required /></label>
          <label><span>Company name</span><input required /></label>
          <label><span>Corporate email</span><input type="email" /></label>
          <label><span>Destination country</span><input required /></label>
          <label><span>Request type</span><select><option>Quotation</option><option>Sample</option></select></label>
          <label><span>Agar grade</span><select><option>Food grade</option><option>Bacteriological grade</option><option>Technical grade</option></select></label>
        </div>
        <label><span>Estimated quantity (25 kg bags or MT)</span><input /></label>
        <label><span>Specification wanted</span><input required /></label>
        <label><span>Message</span><textarea rows="4" /></label>
        <button class="button" type="submit">Request a quotation <span aria-hidden="true">↗</span></button>
        <p v-if="sent" class="form-status" role="status">Preview only: connect a form endpoint to send this request.</p>
      </form>
    </div>
  </section>
</template>

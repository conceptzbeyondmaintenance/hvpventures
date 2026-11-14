<script setup>
import { ref } from 'vue'
import AppLink from '../components/AppLink.vue'
import Icon from '../components/Icon.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import { CONTACT, processSteps } from '../data/content.js'

const sent = ref(false)
const submit = () => { sent.value = true }
</script>

<template>
  <PageHero label="Contact" lead="HVP Ventures is an agar agar supplier in India, with product sourced at origin in Asia and supplied worldwide. Use the form below to request an agar agar quotation or an agar agar sample. Include your grade, quantity and destination port.">
    Agar Agar Supplier in India: Request a Quotation or Sample
  </PageHero>

  <section class="section">
    <div class="container contact">
      <div>
        <SectionLabel>Trade desk</SectionLabel>
        <h2 style="margin-bottom: 22px">Direct contact</h2>
        <div class="contact-cards">
          <article class="contact-card"><span class="icon-badge"><Icon name="user" /></span><div><span>FOUNDER</span><strong>Harshvardhan</strong></div></article>
          <article class="contact-card"><span class="icon-badge"><Icon name="phone" /></span><div><span>WHATSAPP</span><AppLink :to="CONTACT.whatsappUrl" target="_blank">{{ CONTACT.whatsapp }}</AppLink></div></article>
          <article class="contact-card"><span class="icon-badge"><Icon name="mail" /></span><div><span>EMAIL</span><AppLink :to="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</AppLink></div></article>
          <article class="contact-card"><span class="icon-badge"><Icon name="pin" /></span><div><span>OFFICE</span><p>{{ CONTACT.address }}</p></div></article>
        </div>
      </div>
      <div class="form-card">
        <SectionLabel>Your brief</SectionLabel>
        <h2>Request an agar agar quotation or sample</h2>
        <p>Include your grade, specification, quantity and destination country.</p>
        <form @submit.prevent="submit">
          <div class="form-grid">
            <label><span>Full name</span><input required autocomplete="name" /></label>
            <label><span>Company name</span><input required autocomplete="organization" /></label>
            <label><span>Corporate email</span><input type="email" autocomplete="email" /></label>
            <label><span>Destination country</span><input required autocomplete="country-name" /></label>
            <label><span>Request type</span><select><option>Quotation</option><option>Sample</option></select></label>
            <label><span>Agar grade</span><select><option>Food grade</option><option>Bacteriological grade</option><option>Technical grade</option></select></label>
          </div>
          <label><span>Estimated quantity (25 kg bags or MT)</span><input /></label>
          <label><span>Specification wanted</span><input required /></label>
          <label><span>Message</span><textarea rows="4" /></label>
          <button class="button" type="submit">Request a quotation<Icon name="arrow" /></button>
          <p v-if="sent" class="form-status" role="status">Preview only: connect a form endpoint to send this request.</p>
        </form>
      </div>
    </div>
  </section>

  <section class="section section--tint">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>How ordering works</SectionLabel>
        <h2>Begin with a specification.</h2>
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
</template>

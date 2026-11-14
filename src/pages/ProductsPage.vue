<script setup>
import AppLink from '../components/AppLink.vue'
import Icon from '../components/Icon.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { products, gradeData, rangeRows, specRows } from '../data/content.js'
</script>

<template>
  <PageHero label="Products" lead="HVP Ventures supplies agar agar powder in three product lines. Each product line is listed below with the gel strength grades we offer, from GS600 to GS1000.">
    Agar Agar Powder Supplier: Food, Bacteriological and Technical Grades
  </PageHero>

  <section class="section">
    <div class="container">
      <article v-for="product in products" :key="product.title" class="product-row">
        <div :class="['product-card__visual', product.tone]"><Icon :name="product.icon" /><span>{{ product.tag }}</span></div>
        <div class="product-row__body">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="chips"><span v-for="a in gradeData[product.page].applications" :key="a" class="chip">{{ a }}</span></div>
          <AppLink :to="product.page" class="button button--ghost button--small">{{ product.link }}<Icon name="arrow" /></AppLink>
        </div>
      </article>
    </div>
  </section>

  <section class="section section--tint">
    <div class="container split" style="align-items: start">
      <div>
        <SectionLabel>Available grades</SectionLabel>
        <h2>Agar range</h2>
        <p class="lead" style="margin: 12px 0 24px">Gel strength 600–1000 g/cm²</p>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>Grade</th><th>Gel strength (g/cm²)</th><th>HS code</th></tr></thead>
            <tbody>
              <tr v-for="[grade, strength, code] in rangeRows" :key="grade">
                <th scope="row">{{ grade }}</th><td class="spec">{{ strength }}</td><td class="spec">{{ code }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h3 style="margin-top: 32px">Other blends</h3>
        <div class="chips"><span class="chip">Carrageenan and blends</span><span class="chip">Custom blends by application</span></div>
      </div>
      <div>
        <SectionLabel>Food grade reference</SectionLabel>
        <h2>Specification, at a glance</h2>
        <p style="margin: 12px 0 24px">Reference limits for food-grade agar (EU E406). The batch COA states the actual result for every lot. This specification is for reference; other specifications are available to order.</p>
        <div class="table-wrap">
          <table class="table">
            <thead><tr><th>Parameter</th><th>Limit</th></tr></thead>
            <tbody>
              <tr v-for="[parameter, limit] in specRows" :key="parameter"><th scope="row">{{ parameter }}</th><td class="spec">{{ limit }}</td></tr>
            </tbody>
          </table>
        </div>
        <p class="note">Grade-specific specification sheets are available on request.</p>
      </div>
    </div>
  </section>

  <BrochureGateway />

  <QuotationBand title="Need a specific grade?" action-label="Request a quotation">
    Send your grade, gel strength, quantity and destination to our trade desk.
  </QuotationBand>
</template>

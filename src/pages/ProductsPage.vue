<script setup>
import AppLink from '../components/AppLink.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import { products, rangeRows, specRows } from '../data/content.js'
</script>

<template>
  <PageHero lead="HVP Ventures supplies agar agar powder in three product lines. Each product line is listed below with the gel strength grades we offer, from GS600 to GS1000.">
    Agar Agar Powder Supplier: Food, Bacteriological and Technical Grades
  </PageHero>

  <div class="product-list">
    <section v-for="(product, i) in products" :key="product.title" class="product-row">
      <div>
        <span class="big-number">0{{ i + 1 }}</span>
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <AppLink :to="product.page">{{ product.link }} →</AppLink>
      </div>
    </section>
  </div>

  <section class="agar-range">
    <SectionLabel number="01">Available grades</SectionLabel>
    <h2>Agar range</h2>
    <p class="lead">Gel strength 600–1000 g/cm²</p>
    <div class="range-table">
      <div class="range-table__header"><span>Grade</span><span>Gel strength (g/cm²)</span><span>HS code</span></div>
      <div v-for="[grade, strength, code] in rangeRows" :key="grade">
        <strong>{{ grade }}</strong><span class="spec">{{ strength }}</span><span class="spec">{{ code }}</span>
      </div>
    </div>
    <div class="other-blends">
      <h3>Other blends</h3>
      <ul><li>Carrageenan and blends</li><li>Custom blends by application</li></ul>
    </div>
  </section>

  <BrochureGateway />

  <section class="specification-section">
    <SectionLabel number="02">Food grade reference</SectionLabel>
    <h2>Specification, at a glance</h2>
    <p>Reference limits for food-grade agar (EU E406). The batch COA states the actual result for every lot. This specification is for reference; other specifications are available to order.</p>
    <div class="spec-table">
      <div v-for="[parameter, limit] in specRows" :key="parameter"><span>{{ parameter }}</span><span class="spec">{{ limit }}</span></div>
    </div>
    <p>Grade-specific specification sheets are available on request.</p>
  </section>
</template>

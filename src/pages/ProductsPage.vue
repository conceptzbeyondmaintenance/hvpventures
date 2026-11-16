<script setup>
import AppLink from '../components/AppLink.vue'
import Icon from '../components/Icon.vue'
import PageHero from '../components/PageHero.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { products, catalogNote } from '../data/content.js'
</script>

<template>
  <PageHero label="Products" :lead="catalogNote">
    Product catalogue
  </PageHero>

  <section class="section">
    <div class="container">
      <article v-for="product in products" :key="product.title" class="product-row">
        <div :class="['product-card__visual', product.tone]"><Icon :name="product.icon" /><span>{{ product.tag }}</span></div>
        <div class="product-row__body">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <div class="chips"><span v-for="c in product.chips" :key="c" class="chip">{{ c }}</span></div>
          <AppLink :to="product.page" class="button button--ghost button--small">{{ product.link }}<Icon name="arrow" /></AppLink>
        </div>
      </article>
    </div>
  </section>

  <BrochureGateway tint />

  <QuotationBand title="Begin with a specification." action-label="Request a quotation">
    We will place samples in your lab, with no obligation.
  </QuotationBand>
</template>

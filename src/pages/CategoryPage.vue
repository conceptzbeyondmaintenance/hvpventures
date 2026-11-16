<script setup>
import { computed } from 'vue'
import AppLink from '../components/AppLink.vue'
import BrochureAction from '../components/BrochureAction.vue'
import Icon from '../components/Icon.vue'
import PageHero from '../components/PageHero.vue'
import SectionLabel from '../components/SectionLabel.vue'
import BrochureGateway from '../components/BrochureGateway.vue'
import QuotationBand from '../components/QuotationBand.vue'
import { categories, applications, tradeFacts, catalogNote, CONTACT } from '../data/content.js'

const props = defineProps({ id: { type: String, required: true } })
const data = computed(() => categories[props.id])
</script>

<template>
  <PageHero :lead="data.lead" label="Product catalogue">
    <template #crumbs>
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <AppLink to="home">Home</AppLink><span>/</span><AppLink to="products">Products</AppLink><span>/</span><span>{{ data.name }}</span>
      </nav>
    </template>
    {{ data.title }}
  </PageHero>

  <section class="section">
    <div class="container">
      <div v-if="data.body" class="prose">
        <p v-for="p in data.body" :key="p">{{ p }}</p>
      </div>

      <div v-if="data.table" class="detail__block">
        <h2>{{ data.tableTitle }}</h2>
        <div class="table-wrap">
          <table class="table table--compact">
            <thead><tr><th v-for="h in data.table.head" :key="h">{{ h }}</th></tr></thead>
            <tbody>
              <tr v-for="[label, ...cells] in data.table.rows" :key="label">
                <th scope="row">{{ label }}</th>
                <td v-for="(cell, i) in cells" :key="i" class="spec">{{ cell || '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div v-if="data.highlight" class="detail__block">
        <article class="entry">
          <h3>{{ data.highlight.title }}</h3>
          <p>{{ data.highlight.copy }}</p>
          <div class="chips"><span v-for="a in data.highlight.advantages" :key="a" class="chip">{{ a }}</span></div>
          <dl class="spec-grid">
            <div v-for="[k, v] in data.highlight.facts" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></div>
          </dl>
        </article>
      </div>

      <div v-if="data.items" class="detail__block entries">
        <article v-for="item in data.items" :key="item.name" class="entry">
          <span class="entry__tag">{{ item.subtitle }}</span>
          <h3>{{ item.name }}</h3>
          <p v-if="item.application" class="entry__application"><strong>Application:</strong> {{ item.application }}</p>
          <p>{{ item.copy }}</p>
          <div v-if="item.advantages" class="chips"><span v-for="a in item.advantages" :key="a" class="chip">{{ a }}</span></div>
          <dl v-if="item.spec" class="spec-grid">
            <div v-for="[k, v] in item.spec" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></div>
          </dl>
          <dl v-else-if="item.hs" class="spec-grid">
            <div><dt>HS code</dt><dd>{{ item.hs }}</dd></div>
          </dl>
          <p v-if="item.characteristic" class="note"><strong>Characteristic:</strong> {{ item.characteristic }}</p>
        </article>
      </div>
    </div>
  </section>

  <section v-if="data.showUses" class="section section--tint">
    <div class="container">
      <div class="section-head section-head--center">
        <SectionLabel>Applications</SectionLabel>
        <h2>Where our agar agar is used</h2>
      </div>
      <div class="grid grid--4">
        <article v-for="app in applications" :key="app.title" class="feature">
          <span class="icon-badge"><Icon :name="app.icon" /></span>
          <h3>{{ app.title }}</h3>
          <p>{{ app.copy }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="trade-strip">
        <div>
          <h3>Trade details</h3>
          <p class="note">{{ catalogNote }}</p>
          <dl class="spec-grid">
            <div v-for="[k, v] in tradeFacts" :key="k"><dt>{{ k }}</dt><dd>{{ v }}</dd></div>
          </dl>
        </div>
        <div class="trade-strip__actions">
          <AppLink to="contact" class="button">Request a quotation<Icon name="arrow" /></AppLink>
          <BrochureAction class="button button--ghost"><Icon name="download" />Download brochure</BrochureAction>
        </div>
      </div>
    </div>
  </section>

  <BrochureGateway tint />

  <QuotationBand title="Begin with a specification." action-label="Request a quotation">
    We will place samples in your lab, with no obligation. WhatsApp <AppLink :to="CONTACT.whatsappUrl">{{ CONTACT.whatsapp }}</AppLink>.
  </QuotationBand>
</template>

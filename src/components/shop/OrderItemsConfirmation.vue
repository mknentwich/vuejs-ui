<template>
  <div class="text-body-1">
    <v-row
      v-for="orderItem in orderConfirmation.orderedItems" 
      v-bind:key="orderItem.id" 
      dense
    >
      <v-col cols="2">
        {{ orderItem.quantity }} x
      </v-col>
      <v-col cols="6">
        {{ orderItem.title }} ({{ orderItem.instrumentation }})
      </v-col>
      <v-col cols="4" class="text-right">
        je {{ (orderItem.price/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row class="primary--text text-body-1">
      <v-col cols="8" class="font-weight-black">
        Gesamtbetrag inkl. Lieferkosten
      </v-col>
      <v-col cols="4" class="text-right font-weight-black">
        {{ (orderConfirmation.total/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'OrderConfirmation',
    data: () => ({
      
    }),
    computed: {
      ...mapState(['orderConfirmation'])
    }
  }
</script>


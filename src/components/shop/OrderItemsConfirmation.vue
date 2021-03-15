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
      <v-col cols="7">
        {{ orderItem.title }} ({{ orderItem.groupType }})
      </v-col>
      <v-col cols="3" class="text-right">
        je {{ (orderItem.price/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
      </v-col>
    </v-row>
    <v-row class="primary--text text-body-1 primaryAccent mt-2">
      <v-divider></v-divider>
      <v-col cols="8" >
        <v-icon class="mr-2">mdi-truck</v-icon>
        <span class="font-weight-black mr-2">Liefergebühr</span>
        <span class="text-caption">{{ orderConfirmation.identity.address.state.name }}</span>
      </v-col>
      <v-col cols="4" class="text-right font-weight-black">
        {{ (orderConfirmation.shippingCosts/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
      </v-col>
      <v-divider></v-divider>
    </v-row>
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
    computed: {
      ...mapState(['orderConfirmation'])
    }
  }
</script>


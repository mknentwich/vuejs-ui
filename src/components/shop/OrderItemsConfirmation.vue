<template>
  <div class="text-body-1">
    <v-row
      v-if="orderConfirmation?.orderedItems"
      v-for="orderItem in orderConfirmation.orderedItems"
      :key="orderItem.id"
      dense
    >
      <v-col cols="2">
        {{ orderItem.quantity }} x
      </v-col>
      <v-col cols="7">
        {{ orderItem.title }} ({{ orderItem.groupType }})
      </v-col>
      <v-col cols="3" class="text-end">
        je {{ (orderItem.price / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 }) }} €
      </v-col>
    </v-row>
    <v-row class="primary--text text-body-1 primaryAccent mt-2">
      <v-divider></v-divider>
      <v-col cols="8">
        <v-icon class="me-2">mdi-truck</v-icon>
        <span class="font-weight-bold me-2">Liefergebühr</span>
        <span class="text-caption">
          {{ orderConfirmation.deliveryAddress ? orderConfirmation.deliveryAddress.state.name : orderConfirmation.identity.address.state.name }}
        </span>
      </v-col>
      <v-col cols="4" class="text-end font-weight-bold">
        {{ (orderConfirmation.shippingCosts / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 }) }} €
      </v-col>
      <v-divider></v-divider>
    </v-row>
    <v-row class="primary--text text-body-1">
      <v-col cols="8" class="font-weight-bold">
        Gesamtbetrag inkl. Lieferkosten
      </v-col>
      <v-col cols="4" class="text-end font-weight-bold">
        {{ (orderConfirmation.total / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 }) }} €
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'OrderConfirmation',
  setup() {
    const store = useStore();
    const orderConfirmation = computed(() => store.state.orderConfirmation || {});

    return { orderConfirmation };
  },
};
</script>


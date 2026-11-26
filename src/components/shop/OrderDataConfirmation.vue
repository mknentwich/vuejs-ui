<template>
  <div class="text-body-1">
    <!-- invoice address -->
    <v-row v-if="orderConfirmation?.identity?.address" no-gutters>
      <v-col cols="12" class="text-overline primary--text font-weight-bold">
        Rechnungsadresse
      </v-col>
      <v-col cols="12" class="ms-4">
        <div>{{ orderConfirmation.identity.salutation }}</div>
        <div>
          {{ orderConfirmation.identity.firstName }}
          {{ orderConfirmation.identity.lastName }}
          <span v-if="orderConfirmation.identity.company">
            ({{ orderConfirmation.identity.company }})
          </span>
        </div>
        <div>
          {{ orderConfirmation.identity.address.street }}
          {{ orderConfirmation.identity.address.streetNumber }}
        </div>
        <div>
          {{ orderConfirmation.identity.address.postCode }}
          {{ orderConfirmation.identity.address.city }}
        </div>
        <div class="text-uppercase">
          {{ orderConfirmation.identity.address.state.name }}
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-2"></v-divider>

    <!-- delivery address -->
    <v-row v-if="orderConfirmation?.deliveryAddress" no-gutters>
      <v-col cols="12" class="text-overline primary--text font-weight-bold">
        Lieferadresse
      </v-col>
      <v-col cols="12" class="ms-4">
        <div>{{ orderConfirmation.identity.salutation }}</div>
        <div>
          {{ orderConfirmation.identity.firstName }}
          {{ orderConfirmation.identity.lastName }}
          <span v-if="orderConfirmation.identity.company">
            ({{ orderConfirmation.identity.company }})
          </span>
        </div>
        <div>
          {{ orderConfirmation.deliveryAddress.street }}
          {{ orderConfirmation.deliveryAddress.streetNumber }}
        </div>
        <div>
          {{ orderConfirmation.deliveryAddress.postCode }}
          {{ orderConfirmation.deliveryAddress.city }}
        </div>
        <div class="text-uppercase">
          {{ orderConfirmation.deliveryAddress.state.name }}
        </div>
      </v-col>
    </v-row>
    <v-row v-else no-gutters>
      <v-col class="font-weight-bold ms-4">
        <v-icon>mdi-checkbox-marked</v-icon> Lieferadresse identisch
      </v-col>
    </v-row>
    <v-divider class="my-2"></v-divider>

    <!-- contact details -->
    <v-row no-gutters>
      <v-col cols="12" class="text-overline primary--text font-weight-bold">
        Kontaktdetails
      </v-col>
    </v-row>
    <v-row no-gutters class="ms-4">
      <v-col cols="auto" class="me-2 font-weight-bold">
        E-Mail
      </v-col>
      <v-col cols="auto">
        {{ orderConfirmation.identity.email }}
      </v-col>
    </v-row>
    <v-row no-gutters v-if="orderConfirmation.identity.telephone" class="ms-4">
      <v-col cols="auto" class="me-2 font-weight-bold">
        Telefonnummer
      </v-col>
      <v-col cols="auto">
        {{ orderConfirmation.identity.telephone }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'OrderDataConfirmation',
  setup() {
    const store = useStore();
    const orderConfirmation = computed(() => store.state.orderConfirmation || {});

    return { orderConfirmation };
  },
};
</script>


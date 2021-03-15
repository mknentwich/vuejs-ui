<template>
  <div class="text-body-1">
    <!-- invoice address -->
    <v-row no-gutters>
      <v-col cols="12" class="text-overline primary--text font-weight-bold">
        Rechnungsadresse
      </v-col>
      <v-col cols="12" class="ml-4">
        <div>
          {{ orderConfirmation.identity.salutation }}
        </div>
        <div>
          {{ orderConfirmation.identity.firstName }} 
          {{ orderConfirmation.identity.lastName }} 
          <span v-if="orderConfirmation.identity.company">
            ({{ orderConfirmation.identity.company}})
          </span>
        </div>
        <div>
          {{ orderConfirmation.identity.address.street }} {{ orderConfirmation.identity.address.streetNumber }}
        </div>
        <div>
          {{ orderConfirmation.identity.address.postCode }} {{ orderConfirmation.identity.address.city }}
        </div>
        <div class="text-uppercase">
          {{ orderConfirmation.identity.address.state.name }}
        </div>
      </v-col>
    </v-row>
    <v-divider class="my-2"></v-divider>

    <!-- delivery address -->
    <v-row no-gutters>
      <v-col cols="12" class="text-overline primary--text font-weight-bold">
        Lieferadresse
      </v-col>
    </v-row>
    <v-row no-gutters v-if="orderConfirmation.deliveryAddress">
      <v-col cols="12" class="ml-4">
        <div>
          {{ orderConfirmation.identity.salutation }}
        </div>
        <div>
          {{ orderConfirmation.identity.firstName }} 
          {{ orderConfirmation.identity.lastName }} 
          ({{ orderConfirmation.identity.company}})
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
      <v-col class="font-weight-bold ml-4">
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
    <v-row no-gutters class="ml-4">
      <v-col cols="auto" class="mr-2 font-weight-bold">
        E-Mail
      </v-col>
      <v-col cols="auto">
        {{ orderConfirmation.identity.email }}
      </v-col>
    </v-row>
    <v-row no-gutters v-if="orderConfirmation.identity.telephone" class="ml-4">
      <v-col cols="auto" class="mr-2 font-weight-bold">
        Telefonnummer
      </v-col>
      <v-col cols="auto">
        {{ orderConfirmation.identity.telephone }}
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'OrderDataConfirmation',
    computed: {
      ...mapState(['orderConfirmation'])
    }
  }
</script>


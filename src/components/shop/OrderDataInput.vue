<template>
  <div class="px-4">
    <v-row dense>
      <!-- NAME -->
      <v-col cols="12">
        <div class="py-0 overline font-weight-bold primary--text">
          Name
        </div>
        <v-row dense>
          <v-col cols="5">
            <v-text-field
              v-model="orderObject.identity.salutation"
              dense
              outlined
              hide-details
              label="Anrede"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="5">
            <v-text-field
              v-model="orderObject.identity.firstName"
              dense
              hide-details
              outlined
              label="Vorname"
            ></v-text-field>
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="orderObject.identity.lastName"
              dense
              hide-details
              outlined
              label="Nachname"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <!-- COMPANY, ORGANISATION -->
      <v-col cols="12">
        <div class="py-0 overline font-weight-bold primary--text">
          Firma / Verein
        </div>
        <v-row dense>
          <v-col cols="5">
            <v-text-field
              v-model="orderObject.identity.company"
              dense
              outlined
              hide-details
              label="Firma / Verein"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <!-- CONTACT DETAILS -->
      <v-col cols="12">
        <div class="py-0 overline font-weight-bold primary--text">
          Kontaktdetails
        </div>
        <v-row dense>
          <v-col cols="10">
            <v-text-field
              v-model="orderObject.identity.email"
              dense
              outlined
              hide-details
              label="E-Mail"
              prepend-inner-icon="mdi-email"
            ></v-text-field>
          </v-col>
          <v-col cols="10">
            <v-text-field
              v-model="orderObject.identity.telephone"
              dense
              outlined
              hide-details
              label="Telefonnummer"
              prepend-inner-icon="mdi-phone"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <!-- INVOICE ADDRESS -->
      <v-col cols="12">
        <div class="py-0 overline font-weight-bold primary--text">
          Rechnungsadresse
        </div>
        <v-row dense>
          <v-col cols="7">
            <v-text-field
              v-model="orderObject.identity.address.street"
              dense
              outlined
              hide-details
              label="Straße"
            ></v-text-field>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-model="orderObject.identity.address.streetNumber"
              dense
              outlined
              hide-details
              label="Hausnummer"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <v-text-field
              v-model="orderObject.identity.address.postCode"
              dense
              outlined
              hide-details
              label="PLZ"
            ></v-text-field>
          </v-col>
          <v-col cols="7">
            <v-text-field
              v-model="orderObject.identity.address.city"
              dense
              outlined
              hide-details
              label="Ort"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">
            <v-select
              dense
              outlined
              v-model="orderObject.identity.address.stateId"
              :items="states"
              item-text="name"
              item-value="id"
              label="Land"
            ></v-select>
          </v-col>
        </v-row>
      </v-col>
      <!-- DELIVERY ADDRESS (optional) -->
      <v-col cols="12">
        <div class="py-0 overline font-weight-bold primary--text">
          Lieferadresse
        </div>
        <v-checkbox  
          inset 
          v-model="deliveryAddressDifferentThanInvoiceAddress" 
          label="gleich wie Rechnungsadresse"
          class="ml-2 mb-2"
          hide-details
        >
        </v-checkbox>
        <div v-if="!deliveryAddressDifferentThanInvoiceAddress">
          <v-row dense>
            <v-col cols="7">
              <v-text-field
                v-model="deliveryAddress.street"
                dense
                outlined
                hide-details
                label="Straße"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="deliveryAddress.streetNumber"
                dense
                outlined
                hide-details
                label="Hausnummer"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3">
              <v-text-field
                v-model="deliveryAddress.postCode"
                dense
                outlined
                hide-details
                label="PLZ"
              ></v-text-field>
            </v-col>
            <v-col cols="7">
              <v-text-field
                v-model="deliveryAddress.city"
                dense
                outlined
                hide-details
                label="Ort"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3">
              <v-select
                dense
                outlined
                v-model="deliveryAddress.stateId"
                :items="states"
                item-text="name"
                item-value="id"
                label="Land"
              ></v-select>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mt-6"></v-divider>
    <v-row dense class="my-3">
      <v-col cols="12" md="6">
        <v-checkbox  
          inset 
          v-model="termsOfServiceChecked" 
          label="Ich habe die AGB gelesen und bin einverstanden."
          class="ml-2 font-weight-bold"
          hide-details
        ></v-checkbox>
      </v-col>
      <v-col cols="12" md="6">
        <v-btn rounded class="primary font-weight-black" @click="placeOrder()">
          <v-icon class="mr-1">mdi-arrow-right</v-icon>
          Kostenpflichtig bestellen
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
  export default {
    name: 'OrderDataInput',
    data: () => ({
      deliveryAddressDifferentThanInvoiceAddress: true,
      termsOfServiceChecked: false,
      states: [],
      orderObject: {
        identity: {
          salutation: '',
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          telephone: '',
          address: {
            city: '',
            postCode: '',
            street: '',
            streetNumber: '',
            stateId: ''
          }
        }
      },
      deliveryAddress: {
        city: '',
        postCode: '',
        street: '',
        streetNumber: '',
        stateId: ''
      }
    }),
    computed: {
      ...mapState(['cartItems']),
    },
    methods: {
      ...mapGetters(['getCartItemsIdAndQuantity']),
      fetchStates: function() {
        var that = this
        fetch('/api/v1/meta/states/')
        .then(response => response.json())
        .then(json => {
          that.states = json
        })
      },
      placeOrder: function() {
        var that = this
        if (that.deliveryAddressDifferentThanInvoiceAddress) {
          that.orderObject.deliveryAddress = that.deliveryAddress
        }

        if (that.cartItems.length) {
          that.orderObject.items = that.getCartItemsIdAndQuantity()
        } else {
          console.log('no items in cart')
        }
        
        console.log('orderObject', that.orderObject)

        fetch('/api/v1/orders/', {
          method: 'POST',
          body: JSON.stringify(that.orderObject)
        })
        .then(response => response.json())
        .then(json => {
          console.log(json)
        })
      }
    },
    beforeMount() {
      this.fetchStates()
    },
  }
</script>

<style scoped>
.v-input--selection-controls {
  margin-top: 0px;
}
</style>

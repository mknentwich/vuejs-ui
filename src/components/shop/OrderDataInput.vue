<template>
  <div class="px-4">
    
    <v-form
      ref="form"
      v-model="orderDetailsAreValid"
      :update="updateOrderDetails()"
    >
      <v-row dense>
        <!-- NAME -->
        <v-col cols="12">
          <div class="py-0 overline font-weight-bold primary--text">
            Name
          </div>
          <v-row dense>
            <v-col cols="5">
              <v-text-field
                v-model="orderDetails.identity.salutation"
                :rules="requiredRule"
                dense
                outlined
                hide-details
                label="Anrede (*)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="5">
              <v-text-field
                v-model="orderDetails.identity.firstName"
                :rules="requiredRule"
                dense
                hide-details
                outlined
                label="Vorname (*)"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="orderDetails.identity.lastName"
                :rules="requiredRule"
                dense
                hide-details
                outlined
                label="Nachname (*)"
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
                v-model="orderDetails.identity.company"
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
                v-model="orderDetails.identity.email"
                :rules="emailRules"
                dense
                outlined
                label="E-Mail (*)"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-text-field
                v-model="orderDetails.identity.telephone"
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
                v-model="orderDetails.identity.address.street"
                :rules="requiredRule"
                dense
                outlined
                hide-details
                label="Straße (*)"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="orderDetails.identity.address.streetNumber"
                :rules="requiredRule"
                dense
                outlined
                hide-details
                label="Hausnummer (*)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="3">
              <v-text-field
                v-model="orderDetails.identity.address.postCode"
                :rules="requiredRule"
                dense
                outlined
                hide-details
                label="PLZ (*)"
              ></v-text-field>
            </v-col>
            <v-col cols="7">
              <v-text-field
                v-model="orderDetails.identity.address.city"
                :rules="requiredRule"
                dense
                outlined
                hide-details
                label="Ort (*)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="7">
              <v-select
                dense
                outlined
                v-model="orderDetails.identity.address.stateId"
                :rules="requiredRule"
                :items="states"
                item-text="name"
                item-value="id"
                label="Land (*)"
                hide-details=""
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
            v-model="deliveryAddressSameAsInvoiceAddress" 
            label="gleich wie Rechnungsadresse"
            class="ml-2 mb-2"
            hide-details
          >
          </v-checkbox>
          <div v-if="!deliveryAddressSameAsInvoiceAddress">
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
    </v-form>
    
    <v-divider class="mt-3"></v-divider>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
  export default {
    name: 'OrderDataInput',
    data: () => ({
      deliveryAddressSameAsInvoiceAddress: true,
      termsOfServiceChecked: false,
      states: [],
      orderDetailsAreValid: true,
      orderDetails: {
        identity: {
          salutation: '',
          firstName: 'Max',
          lastName: 'Mustermannn',
          company: 'MV Entenhausen',
          email: 'max@mail.com',
          telephone: '036658236',
          address: {
            city: 'Entenhausen',
            postCode: '7777',
            street: 'Straße',
            streetNumber: '11',
            stateId: 2
          }
        }
      },
      deliveryAddress: {
        city: '',
        postCode: '',
        street: '',
        streetNumber: '',
        stateId: ''
      },
      emailRules: [
        v => !!v || 'Pflichtfeld',
        v => /.+@.+\..+/.test(v) || 'Bitte gültige E-Mail Adresse eingeben.',
      ],
      requiredRule: [
        v => !!v || 'Pflichtfeld',
      ],
    }),
    methods: {
      ...mapGetters(['getCartItemsIdAndQuantity']),
      ...mapMutations(['setOrderDetails', 'setOptionalDeliveryAddress', 'setOrderDetailsAreValid']),

      fetchStates: function() {
        var that = this
        fetch(process.env.VUE_APP_API_URL + '/meta/states/')
        .then(response => response.json())
        .then(json => {
          that.states = json
        })
      },
      updateOrderDetails: function() {
        this.setOrderDetailsAreValid(this.orderDetailsAreValid)
        this.setOrderDetails(this.orderDetails)
        if (this.deliveryAddressSameAsInvoiceAddress) {
          this.setOptionalDeliveryAddress()
        } else {
          this.setOptionalDeliveryAddress(this.deliveryAddress)
        }
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

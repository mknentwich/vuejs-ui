<template>
  <div class="px-4">
    <v-form
      ref="form"
      v-model="orderDetailsAreValid"
      validate-on="blur"
      @update:modelValue="onFormValidityChange"
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
                lazy-rules
                density="compact"
                variant="outlined"
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
                lazy-rules
                density="compact"
                hide-details
                variant="outlined"
                label="Vorname (*)"
              ></v-text-field>
            </v-col>
            <v-col cols="5">
              <v-text-field
                v-model="orderDetails.identity.lastName"
                :rules="requiredRule"
                lazy-rules
                density="compact"
                hide-details
                variant="outlined"
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
                density="compact"
                variant="outlined"
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
                density="compact"
                variant="outlined"
                label="E-Mail (*)"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
            <v-col cols="10">
              <v-text-field
                v-model="orderDetails.identity.telephone"
                density="compact"
                variant="outlined"
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
                density="compact"
                variant="outlined"
                hide-details
                label="Straße (*)"
              ></v-text-field>
            </v-col>
            <v-col cols="3">
              <v-text-field
                v-model="orderDetails.identity.address.streetNumber"
                :rules="requiredRule"
                density="compact"
                variant="outlined"
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
                density="compact"
                variant="outlined"
                hide-details
                label="PLZ (*)"
              ></v-text-field>
            </v-col>
            <v-col cols="7">
              <v-text-field
                v-model="orderDetails.identity.address.city"
                :rules="requiredRule"
                density="compact"
                variant="outlined"
                hide-details
                label="Ort (*)"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="7">
              <v-select
                density="compact"
                variant="outlined"
                v-model="orderDetails.identity.address.stateId"
                :rules="requiredRule"
                :items="states"
                item-title="name"
                item-value="id"
                label="Land (*)"
                hide-details
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
                  lazy-rules
                  density="compact"
                  variant="outlined"
                  hide-details
                  label="Straße"
                ></v-text-field>
              </v-col>
              <v-col cols="3">
                <v-text-field
                  v-model="deliveryAddress.streetNumber"
                  lazy-rules
                  density="compact"
                  variant="outlined"
                  hide-details
                  label="Hausnummer"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="3">
                <v-text-field
                  v-model="deliveryAddress.postCode"
                  density="compact"
                  variant="outlined"
                  hide-details
                  label="PLZ"
                ></v-text-field>
              </v-col>
              <v-col cols="7">
                <v-text-field
                  v-model="deliveryAddress.city"
                  density="compact"
                  variant="outlined"
                  hide-details
                  label="Ort"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row dense>
              <v-col cols="3">
                <v-select
                  density="compact"
                  variant="outlined"
                  v-model="deliveryAddress.stateId"
                  :items="states"
                  item-title="name"
                  item-value="id"
                  label="Land"
                ></v-select>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import { ref, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'OrderDataInput',
  setup() {
    const store = useStore();
    const form = ref(null);
    const deliveryAddressSameAsInvoiceAddress = ref(true);
    const termsOfServiceChecked = ref(false);
    const states = ref([]);
    const orderDetailsAreValid = ref(false);
    const orderDetails = ref({
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
          stateId: null
        }
      }
    });
    const deliveryAddress = ref({
      city: '',
      postCode: '',
      street: '',
      streetNumber: '',
      stateId: ''
    });
    const emailRules = [
      v => !!v || 'Pflichtfeld',
      v => /.+@.+\..+/.test(v) || 'Bitte gültige E-Mail Adresse eingeben.',
    ];
    const requiredRule = [
      v => !!v || 'Pflichtfeld',
    ];

    const fetchStates = async () => {
      const response = await fetch(process.env.VUE_APP_API_URL + '/meta/states/');
      const json = await response.json();
      const statesTop = [];
      const statesRest = json.filter((value, index) => {
        if (value.name === 'Deutschland') {
          statesTop[0] = value;
          return false;
        }
        if (value.name === 'Österreich') {
          statesTop[1] = value;
          return false;
        }
        return true;
      });
      statesRest.sort((a, b) => a.name.localeCompare(b.name));
      states.value = [...statesTop, ...statesRest];
    };

    const validateForm = async () => {
      const { valid } = await form.value.validate();
      if (valid) {
        submitForm();
      }
    };

    const onFormValidityChange = (isValid) => {
      if (isValid) {
        submitForm();
      }
    };

    const submitForm = () => {
      store.commit('setOrderDetailsAreValid', true);
      store.commit('setOrderDetails', orderDetails.value);
      if (deliveryAddressSameAsInvoiceAddress.value) {
        store.commit('setOptionalDeliveryAddress');
      } else {
        store.commit('setOptionalDeliveryAddress', deliveryAddress.value);
      }
      console.log('Form submitted successfully');
    };

    onBeforeMount(fetchStates);

    return {
      form,
      deliveryAddressSameAsInvoiceAddress,
      termsOfServiceChecked,
      states,
      orderDetailsAreValid,
      orderDetails,
      deliveryAddress,
      emailRules,
      requiredRule,
      validateForm,
      onFormValidityChange
    };
  }
};
</script>

<style scoped>
.v-input--selection-controls {
  margin-top: 0px;
}
</style>

<template>
  <v-container>
    
    <v-btn text rounded class="font-weight-bold primary--text" to="/shop">
      <v-icon small class="mr-1">mdi-arrow-left</v-icon>
      zur Übersicht
    </v-btn>
    <v-row>
      <v-col cols="12" md="5">
        <!-- show info message if cart is empty -->
        <v-card rounded="lg" class="caution mx-6 my-2" elevation="6" v-if="!cartItems.length">
          <v-card-title class="cautionContrast--text font-weight-bold py-2">
            <v-icon color="cautionContrast" class="mr-2">mdi-information</v-icon> Ihr Warenkorb ist leer
          </v-card-title>
        </v-card>
        <!-- show content of cart -->
        <v-card outlined rounded="lg" class="box-shadow primaryAccentLight">
          <v-card-title class="primary--text font-weight-bold">
            Meine Bestellung
          </v-card-title>
          <CartItems></CartItems>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <!-- order data input -->
        <v-card outlined rounded="lg" class="box-shadow secondaryAccentLight">
          <v-card-title class="primary--text font-weight-bold pb-0">
            <span>
              <v-icon class="mr-2">mdi-account</v-icon>
              Meine Daten
            </span>
            <v-spacer></v-spacer>
            <span class="text-right primary--text text-subtitle-2 font-weight-bold">
              (*) Pflichtfeld 
            </span>
          </v-card-title>
          <OrderDataInput></OrderDataInput>
          <v-row no-gutters class="mb-4">
            <v-col cols="12" md="12">
              <v-checkbox  
                inset 
                v-model="termsOfServiceChecked" 
                label="Ich habe die AGB gelesen und bin einverstanden."
                class="ml-6 font-weight-bold primary--text"
                hide-details
              ></v-checkbox>
            </v-col>
          </v-row>
          <v-card-actions>
            <!-- place order button with tooltip -->
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <div class="fill-width" v-on="!readyToPlaceOrder ? on : null">
                  <v-btn 
                    block 
                    x-large 
                    class="primary font-weight-black" 
                    @click="placeOrder()" 
                    :disabled="!readyToPlaceOrder"
                    v-bind="attrs"
                  >
                    <v-icon class="mr-1">mdi-arrow-right</v-icon>
                    Bestellung überprüfen
                  </v-btn>
                </div>
              </template>
              <span>{{ whyImNotReadyToPlaceOrder }}</span>
            </v-tooltip>
            <!-- loading dialog popup -->
            <v-dialog
              v-model="dialog"
              persistent
              width="300"
            >
              <v-card
                color="secondaryAccent"
                dark
                rounded="lg"
              >
                <v-card-title class="primary--text justify-center">
                  <v-img
                  :src="require('@/assets/nentwichVerlag_logos_color_noFill.svg')"
                  height="100"
                  width="250"
                  contain
                ></v-img>
                  {{ dialogMsg }}
                </v-card-title>
                <v-card-text>
                  <v-progress-linear
                    indeterminate
                    color="primary"
                    class="mb-0"
                  ></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import CartItems from '@/components/shop/CartItems.vue'
  import OrderDataInput from '@/components/shop/OrderDataInput.vue'
  import {
    mapMutations,
    mapState,
    mapGetters
  } from 'vuex'

  export default {
    name: 'Checkout',
    components: { CartItems, OrderDataInput },
    data: () => ({
      termsOfServiceChecked: false,
      dialog: false,
      dialogMsg: ''
    }),
    computed: {
      ...mapState(['cartItems', 'getCartTotal', 'orderDetailsAreValid']),
      readyToPlaceOrder: function() {
        if (this.cartItems.length && this.orderDetailsAreValid && this.termsOfServiceChecked) {
          return true
        } else {
          return false
        }
      },
      whyImNotReadyToPlaceOrder: function() {
        if (!this.cartItems.length) {
          return 'Ihr Warenkorb ist leer!'
        } else if (!this.orderDetailsAreValid) {
          return 'Bitte füllen Sie alle Pflichtfelder aus!'
        } else if (!this.termsOfServiceChecked) {
          return 'Bitte akzeptieren Sie die AGBs!'
        } else {
          return null
        }
      }
    },
    methods: {
      ...mapMutations(['addToCart', 'setOrderConfirmation']),
      ...mapGetters(['getOrderDetails']),
      getScoreById: function(id) {
        return this.$store.getters.getScoreById(id)
      },
      showDialog: function(msg) {
        this.dialogMsg = msg
        this.dialog = true
      },
      placeOrder: async function() {
        var that = this
        that.showDialog('Bestellung wird geprüft...')
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(this.getOrderDetails())
        
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        fetch(process.env.VUE_APP_API_URL + '/orders', requestOptions)
        .then(response => response.json())
        .then(result => {
          that.setOrderConfirmation(result)
          console.log(result)
          that.placeOrderInProgress = false
          that.$router.push('/shop/confirmOrder')
        })
        .catch(error => {
          this.showDialog('Bei der Prüfung ist ein Fehler aufgetreten. Bitte aktualisieren Sie die Seite und starten Sie erneut!')
          console.log(error)
          });
      },
    }
  }
</script>
<style scoped>
.fill-width {
  width: 100%;
}
</style>
<template>
  <v-container>
    <v-btn text rounded class="font-weight-bold primary--text" to="/shop/checkout">
      <v-icon small class="mr-1">mdi-arrow-left</v-icon>
      Bestellung bearbeiten
    </v-btn>
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
    <!-- show error messsage in case no order confirmation is present -->
    <v-row v-if="!Object.keys(orderConfirmation).length">
      <v-col cols="12">
        <v-card flat color="primaryAccentLightAlt">
          <v-card-text>
            <v-row>
              <v-col cols="2" class="text-right">
                <v-icon size="60" color="secondary">mdi-information</v-icon>
              </v-col>
              <v-col cols="10">
                <div class="text-h5 font-weight-bold primary--text">
                  Keine Bestellbestätigung vorhanden. 
                </div>
                <div class="text-subtitle-1">
                  Bitte starten Sie Ihre Bestellung erneut!
                </div>
              </v-col>
            </v-row>
            
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- show order confirmation -->
    <v-row v-if="Object.keys(orderConfirmation).length">
      <v-col cols="12" md="5">
        <v-card outlined rounded="lg" class="box-shadow primaryAccentLight">
          <v-card-title class="primary--text font-weight-bold">
            Meine Bestellung
          </v-card-title>
          <v-card-text>
            <OrderItemsConfirmation />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
        <v-card outlined rounded="lg" class="box-shadow secondaryAccentLight">
          <v-card-title class="primary--text font-weight-bold pb-0">
            <v-icon class="mr-2">mdi-account</v-icon>
            Meine Daten
          </v-card-title>
          <v-card-text>
            <OrderDataConfirmation />
          </v-card-text>
          <v-card-actions>
            <v-btn block x-large class="primary font-weight-black" @click="confirmOrder()">
              <v-icon class="mr-1">mdi-check</v-icon>
              Kostenpflichtig Bestellen
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import OrderItemsConfirmation from '@/components/shop/OrderItemsConfirmation.vue'
  import OrderDataConfirmation from '@/components/shop/OrderDataConfirmation.vue'


  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    name: 'ConfirmOrder',
    components: { OrderItemsConfirmation, OrderDataConfirmation },
    data: () => ({
      dialog: false,
      dialogMsg: ''
    }),
    computed: {
      ...mapState(['orderConfirmation'])
    },
    methods: {
      ...mapMutations(['resetCartAndOrderConfirmation']),
      showDialog: function(msg) {
        this.dialogMsg = msg
        this.dialog = true
      },
      confirmOrder: function() {
        var that = this
        that.showDialog('Ihre Bestellung wird übermittelt...')
        var requestOptions = {
          method: 'PUT',
          redirect: 'follow'
        };
        fetch(`${process.env.VUE_APP_API_URL}/orders/confirmations/${that.orderConfirmation.id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          that.resetCartAndOrderConfirmation()
          that.$router.push('/shop/thanks')
          })
        .catch(error => {
          this.showDialog('Bei der Übermittlung ist ein Fehler aufgetreten. Bitte aktualisieren Sie die Seite und starten Sie erneut!')
          console.log(error)
          });
      },
    }
  }
</script>

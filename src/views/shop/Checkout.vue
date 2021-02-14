<template>
  <v-container>
    <v-btn text rounded class="font-weight-bold primary--text" to="/shop">
      <v-icon small class="mr-1">mdi-arrow-left</v-icon>
      zur Übersicht
    </v-btn>
    <v-row>
      <v-col cols="12" md="5">
        <v-card outlined rounded="lg" class="box-shadow primaryAccentLight">
          <v-card-title class="primary--text font-weight-bold">
            Meine Bestellung
          </v-card-title>
          <CartItems></CartItems>
        </v-card>
      </v-col>
      <v-col cols="12" md="7">
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
          <v-card-actions>
            <v-btn block x-large class="primary font-weight-black" @click="placeOrder()">
              <v-icon class="mr-1">mdi-arrow-right</v-icon>
              Bestellung überprüfen
            </v-btn>
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
      
    }),
    computed: {
      ...mapState(['cartItems', 'getCartTotal'])
    },
    methods: {
      ...mapMutations(['addToCart', 'setOrderConfirmation']),
      ...mapGetters(['getOrderDetails']),
      getScoreById: function(id) {
        return this.$store.getters.getScoreById(id)
      },
      placeOrder: function() {
        var that = this
        console.log(this.getOrderDetails())
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(this.getOrderDetails())

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };
        fetch('/api/v1/orders', requestOptions)
        .then(response => response.json())
        .then(result => {
          that.setOrderConfirmation(result)
          console.log(result)
          that.$router.push('/shop/confirmOrder')
        })
        .catch(error => console.log('error', error));

      },
    }
  }
</script>

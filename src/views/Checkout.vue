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
            <v-icon class="mr-2">mdi-account</v-icon>
            Meine Daten
          </v-card-title>
          <OrderDataInput></OrderDataInput>
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
    mapState
  } from 'vuex'

  export default {
    name: 'Cart',
    components: { CartItems, OrderDataInput },
    data: () => ({
      
    }),
    computed: {
      ...mapState(['cartItems', 'getCartTotal'])
    },
    methods: {
      ...mapMutations(['addToCart']),
      getScoreById: function(id) {
        return this.$store.getters.getScoreById(id)
      }
    }
  }
</script>

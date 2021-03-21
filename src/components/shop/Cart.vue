<template>
  <v-col cols="auto" v-if="cartItems.length">
    <v-expansion-panels flat>
      <v-expansion-panel class="border">
        <v-expansion-panel-header color="primaryAccent">
          <v-row no-gutters align="center">
            <v-col cols="12" sm="auto" class="text-center">
              <v-badge
                left
                inline
                color="primary"
                :content="numberOfItemsInCart"
                class="mr-2"
                transition="scroll-y"
              >
                <v-icon>mdi-cart</v-icon>
              </v-badge>
              <span class="font-weight-bold text-subtitle-1 primary--text">Mein Warenkorb</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="auto" :class="$vuetify.breakpoint.xsOnly ? 'mt-3 text-center' : 'mr-3'">
              <v-btn color="primary" depressed rounded to="/shop/checkout">
                <v-icon left>mdi-arrow-right</v-icon>
                zur Kasse
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content style="padding: 0px !important;">
          <CartItems></CartItems>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>
  </v-col>
</template>

<script>
  import CartItems from '@/components/shop/CartItems.vue'
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'Cart',
    components: { CartItems },
    data: () => ({
      
    }),
    computed: {
      ...mapState(['cartItems', 'getCartTotal']),
      numberOfItemsInCart: function() {
        let result = 0
        this.cartItems.forEach(item =>
          result += item.quantity
        )
        return result
      }
    },
    methods: {
      ...mapMutations(['addToCart']),
      getScoreById: function(id) {
        return this.$store.getters.getScoreById(id)
      }
    }
  }
</script>

<style>
.border {
  border: 0.5px solid #d6d8d2;
}
.v-expansion-panel-content__wrap {
	padding: 0px !important;
}
</style>

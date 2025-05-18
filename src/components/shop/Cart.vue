<template>
  <v-col cols="auto" v-if="cartItems.length">
    <v-expansion-panels flat>
      <v-expansion-panel class="border pa-0">
        <v-expansion-panel-title color="primaryAccent">
          <v-row no-gutters>
            <v-col cols="12" sm="auto" class="text-center">
              <v-badge
                left
                inline
                color="primary"
                :content="numberOfItemsInCart"
                class="me-2"
                transition="scroll-y"
              >
                <v-icon>mdi-cart</v-icon>
              </v-badge>
              <span class="font-weight-bold text-subtitle-1 primary--text">Mein Warenkorb</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              cols="12"
              sm="auto"
              :class="isXsOnly ? 'mt-3 text-center' : 'me-3'"
            >
              <v-btn color="primary" depressed rounded to="/shop/checkout">
                <v-icon left>mdi-arrow-right</v-icon>
                zur Kasse
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text class="pa-0">
          <CartItems></CartItems>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-col>
</template>

<script>
import CartItems from '@/components/shop/CartItems.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';

export default {
  name: 'Cart',
  components: { CartItems },
  setup() {
    const store = useStore();
    const display = useDisplay(); // Access useDisplay directly
    const isXsOnly = display.xsOnly; // Use xsOnly directly from display

    const cartItems = computed(() => store.state.cartItems);
    const numberOfItemsInCart = computed(() =>
      cartItems.value.reduce((total, item) => total + item.quantity, 0)
    );

    return {
      cartItems,
      numberOfItemsInCart,
      isXsOnly,
    };
  },
};
</script>

<style>
.border {
  border: 0.5px solid #d6d8d2;
}
.v-expansion-panel-content__wrap {
  padding: 0px !important;
}
</style>

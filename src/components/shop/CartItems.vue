<template>
  <v-list class="pa-0" v-if="cartItems?.length">
    <v-list-item
      v-for="(cartItem, index) in cartItems"
      :key="cartItem.id"
      :value="cartItem"
      :class="index % 2 ? 'primaryAccentLightAlt' : 'primaryAccentLight'"
      variant="flat"
    >
      <template v-slot:prepend>
        <v-icon>mdi-book-music</v-icon>
      </template>
      <template v-slot:title>
        <v-row no-gutters>
          <v-col cols="auto" class="text-body-1 text-black">
            {{ `${cartItem.title} (${cartItem.groupType})` }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="text-body-1 font-weight-bold">
            je {{ (cartItem.price / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 }) }} €
          </v-col>
        </v-row>
      </template>
      <template v-slot:subtitle>
        <span class="font-weight-bold">Menge:</span>
        <v-btn variant="icon" size="small" color="primary" @click="decrementQuantityOrRemoveCartItem(cartItem.id)">
          <v-icon>mdi-minus-circle</v-icon>
        </v-btn>
        {{ cartItem.quantity }}
        <v-btn variant="icon" size="small" color="primary" @click="incrementQuantityOfCartItem(cartItem.id)">
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template>
    </v-list-item>
    <v-list-item class="bg-primaryAccent">
      <template v-slot:prepend>
        <v-icon>mdi-sigma</v-icon>
      </template>
      <template v-slot:title>
        <v-row no-gutters>
          <v-col cols="auto" class="font-weight-bold">
            Gesamtbetrag exkl. Lieferkosten
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto" class="font-weight-bold">
            {{ (getCartTotal / 100).toLocaleString('de-DE', { minimumFractionDigits: 2 }) }} €
          </v-col>
        </v-row>
      </template>
    </v-list-item>
  </v-list>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CartItems',
  setup() {
    const store = useStore();
    const cartItems = computed(() => store.state.cartItems || []);
    const getCartTotal = computed(() => store.getters.getCartTotal);

    const incrementQuantityOfCartItem = (id) => store.commit('incrementQuantityOfCartItem', id);
    const decrementQuantityOrRemoveCartItem = (id) => store.commit('decrementQuantityOrRemoveCartItem', id);

    return {
      cartItems,
      getCartTotal,
      incrementQuantityOfCartItem,
      decrementQuantityOrRemoveCartItem,
    };
  },
};
</script>

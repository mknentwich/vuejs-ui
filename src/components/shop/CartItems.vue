<template>
  <v-list class="pa-0">
    <!-- list all items in cart -->
    <v-list-item
      v-for="(cartItem, index) in cartItems" 
      v-bind:key="cartItem.id"
      :class="index % 2 ? 'primaryAccentLightAlt' : 'primaryAccentLight'"
    >
      <v-list-item-avatar>
        <v-icon>mdi-book-music</v-icon>
      </v-list-item-avatar>

      <v-list-item-content class="py-1">
        <v-list-item-title>
          <v-row no-gutters>
            <v-col cols="auto" class="text-body-1">
              {{ `${cartItem.title} (${cartItem.groupType})` }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="mr-5">
              
            </v-col>
            <v-col cols="auto" class="text-body-1 font-weight-bold">
              je {{ (cartItem.price/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
            </v-col>
          </v-row>
        </v-list-item-title>
        <v-list-item-subtitle>
          <span class="font-weight-bold">
            Menge:
          </span>
          <v-btn icon small color="secondary" @click="decrementQuantityOrRemoveCartItem(cartItem.id)">
            <v-icon>mdi-minus-circle</v-icon>
          </v-btn>
          {{ cartItem.quantity }}
          <v-btn icon small color="secondary" @click="incrementQuantityOfCartItem(cartItem.id)">
            <v-icon>mdi-plus-circle</v-icon>
          </v-btn>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <!-- show total -->
    <v-list-item
      class="primaryAccent"
    >
      <v-list-item-avatar>
        <v-icon>mdi-sigma</v-icon>
      </v-list-item-avatar>

      <v-list-item-content class="py-0">
        <v-list-item-title>
          <v-row no-gutters>
            <v-col cols="auto" class="font-weight-bold">
              Gesamtbetrag exkl. Lieferkosten
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="font-weight-bold">
              {{ (getCartTotal()/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
            </v-col>
          </v-row>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>


<script>
  import {
    mapState,
    mapMutations,
    mapGetters
  } from 'vuex'

  export default {
    name: 'CartItems',
    data: () => ({
      
    }),
    computed: {
      ...mapState(['cartItems']),
      
    },
    methods: {
      ...mapMutations(['incrementQuantityOfCartItem', 'decrementQuantityOrRemoveCartItem']),
      ...mapGetters(['getCartTotal'])
    }
  }
</script>

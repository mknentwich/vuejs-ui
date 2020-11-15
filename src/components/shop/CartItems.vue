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
            <v-col cols="auto">
              {{ `${getScoreById(cartItem.id).title} (${getScoreById(cartItem.id).instrumentation})` }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              {{ getScoreById(cartItem.id).price }},00 €
            </v-col>
          </v-row>
        </v-list-item-title>
        <v-list-item-subtitle>
          quantitiy: {{ cartItem.quantity }},
          ID: {{ cartItem.id }}
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
              Gesamtbetrag
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto" class="font-weight-bold">
                {{ $store.getters.getCartTotal }},00  €
            </v-col>
          </v-row>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>


<script>
  import {
    mapState
  } from 'vuex'

  export default {
    name: 'CartItems',
    data: () => ({
      
    }),
    computed: {
      ...mapState(['cartItems', 'getCartTotal'])
    },
    methods: {
      getScoreById: function(id) {
        return this.$store.getters.getScoreById(id)
      }
    }
  }
</script>

<template>
  <v-col cols="auto" v-if="cartItems.length">
    <v-expansion-panels flat>
      <v-expansion-panel class="border">
        <v-expansion-panel-header color="secondaryAccent">
          <v-row no-gutters align="center">
            <v-col>
              <v-badge
                left
                inline
                color="primary"
                :content="cartItems.length"
                class="mr-2"
              >
                <v-icon>mdi-cart</v-icon>
              </v-badge>
              <span class="font-weight-bold text-subtitle-1 primary--text">Mein Warenkorb</span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn color="primary" depressed class="mr-4">
                <v-icon left>mdi-arrow-right</v-icon>
                zur Kasse
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-header>
        <v-expansion-panel-content style="padding: 0px !important;">
          <v-list class="pa-0">
            <v-list-item
              v-for="(cartItem, index) in cartItems" 
              v-bind:key="cartItem.id"
              :class="index % 2 ? 'grey lighten-4' : 'grey lighten-5'"
            >
              <v-list-item-avatar>
                <v-icon>mdi-book-music</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>
                  <v-row>
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
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>

          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
  </v-expansion-panels>
  </v-col>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'Cart',
    data: () => ({
      
    }),
    computed: {
      ...mapState(['testScores', 'cartItems'])
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

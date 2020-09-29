<template>
  <v-col cols="auto">
    <v-divider></v-divider>
    <v-sheet rounded="lg" class="pa-2">
      <v-row class="align-center justify-center flex-wrap">
        <!-- show list of scores -->
        <v-col cols="12" md="6" v-for="score in testScores" v-bind:key="score.id">
          <v-card color="secondaryAccent" elevation="5" height="100%">
            <v-card-title class="font-weight-bold primary--text pb-1">
              <v-icon class="mr-1 primary--text">mdi-book-music</v-icon>
              {{ score.title }}
              <v-spacer></v-spacer>
              <v-chip outlined color="primary primary--text font-weight-bold px-6">{{ score.category }}</v-chip>
            </v-card-title>

            <v-card-text class="mt-4">
              <div class="mb-3">
                {{ score.description }}
              </div>
              <v-chip color="white" class="ma-1 font-weight-bold"> für {{ score.instrumentation }} </v-chip>
              <v-chip color="white" class="ma-1 font-weight-bold">
                <span class="mr-3"> Schwierigkeit </span>
                <span v-for="n in 5" v-bind:key="n">
                  <v-icon :color="n <= score.difficulty ? 'primary' : 'grey lighten-2'">mdi-checkbox-blank-circle</v-icon>
                </span>
              </v-chip>
            </v-card-text>

            <v-card-actions class="mt-0 primaryAccent">
              <span class="ml-2 text-h6 primary--text">
                {{ score.price }},00 €
              </span>
              <v-spacer></v-spacer>
              <v-btn rounded small depressed color="primaryAccent font-weight-bold">
                Details
              </v-btn>
              <v-btn depressed color="primary" @click="addToCart(score.id)">
                <v-icon left>mdi-cart-plus</v-icon>
                zum Warenkorb
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </v-col>
</template>

<script>
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'Overview',
    data: () => ({
      
    }),
    computed: {
      ...mapState(['testScores']),
    },
    methods: {
      ...mapMutations(['addToCart'])
    }
  }
</script>

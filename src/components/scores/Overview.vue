<template>
  <v-row>
    <!-- show list of scores -->
    <v-col class="d-flex align-stretch" cols="12" md="6" v-for="score in testScores" v-bind:key="score.id">
      <v-card rounded="lg" flat color="secondaryAccent" class="align-stretch">
        <v-card-title class="font-weight-bold primary--text pb-1">
          <v-icon class="mr-1 primary--text">mdi-book-music</v-icon>
          {{ score.title }}
          <v-spacer></v-spacer>
          <v-chip small outlined color="primary primary--text font-weight-bold px-6">{{ score.category }}</v-chip>
        </v-card-title>

        <v-card-text class="mt-4">
          <div class="mb-3">
            {{ score.description }}
          </div>
          <v-chip color="primaryAccent" class="ma-1 font-weight-bold"> für {{ score.instrumentation }} </v-chip>
          <v-chip color="primaryAccent" class="ma-1 font-weight-bold">
            <span class="mr-3"> Schwierigkeit </span>
            <span v-for="n in 5" v-bind:key="n">
              <v-icon :color="n <= score.difficulty ? 'primary' : 'white'">mdi-checkbox-blank-circle</v-icon>
            </span>
          </v-chip>
        </v-card-text>

        <v-card-actions class="mt-0 primaryAccent">
          <v-row class="mx-auto no-gutters">
            <v-col cols="12" md="auto" class="mx-auto">
              <span class="ml-2 text-h6 primary--text">
                {{ score.price }},00 €
              </span>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <v-btn rounded small depressed color="primaryAccent font-weight-bold mr-2">
                Details
              </v-btn>
              <v-btn depressed color="primary" @click="addToCart(score.id)">
                <v-icon left>mdi-cart-plus</v-icon>
                zum Warenkorb
              </v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
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

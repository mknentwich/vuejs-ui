<template>
  <v-row>
    <v-col cols="12">
      <v-sheet rounded="lg" color="secondaryAccent" class="pa-4">
        <v-row class="align-center justify-center" dense>
          <v-col cols="auto">
            <v-img
              :src="require('@/assets/nentwichVerlag_logos_color.svg')"
              height="100"
              width="250"
              contain
            ></v-img>
          </v-col>
          <v-col cols="auto">
            <h1 class="text-h4 font-weight-bold primary--text mb-4">
              Noten bestellen
            </h1>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
    <!-- show list of scores -->
    <v-col class="d-flex align-stretch" cols="12" md="6" v-for="score in testScores" v-bind:key="score.id">
      <v-card rounded="lg" outlined color="" class="align-stretch box-shadow">
        <v-card-title class="primaryAccentLight font-weight-bold primary--text">
          <router-link :to="`score/${score.id}`" class="no-underline">
            {{ score.title }}
          </router-link>
          <v-spacer></v-spacer>
          <v-chip small outlined color="primary primary--text font-weight-bold px-6">{{ score.category }}</v-chip>
        </v-card-title>
        <v-divider></v-divider>

        <v-card-text>
          <div class="mb-3">
            {{ score.description }}
          </div>
          <v-chip small color="secondaryAccent" class="ma-1 font-weight-bold"> für {{ score.instrumentation }} </v-chip>
          <v-chip small color="secondaryAccent" class="ma-1 font-weight-bold">
            <span class="mr-3"> Schwierigkeit </span>
            <span v-for="n in 5" v-bind:key="n">
              <v-icon small :color="n <= score.difficulty ? 'primary' : 'primaryAccent'">mdi-checkbox-blank-circle</v-icon>
            </span>
          </v-chip>
        </v-card-text>

        <v-card-actions class="mt-0 secondaryAccentLight">
          <v-row class="mx-auto no-gutters">
            <v-col cols="12" md="auto" class="mt-1 ml-1">
              <v-btn rounded small depressed color="primaryAccent font-weight-bold mr-2" :to="`score/${score.id}`">
                <v-icon left>mdi-information-variant</v-icon>
                Details
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col cols="auto">
              <span class="mr-2 text-h6 primary--text font-weight-black">
                {{ score.price }},00 €
              </span>

              <AddToCartBtn :scoreId="score.id"></AddToCartBtn>

            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import AddToCartBtn from '@/components/shop/AddToCartBtn.vue'
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'Overview',
    components: { AddToCartBtn },
    data: () => ({
      
    }),
    computed: {
      ...mapState(['testScores']),
    },
    methods: {
      ...mapMutations(['addToCart']),
    },
    created() {
      fetch('http://localhost:2812/api/v1/catalogue/')
        .then(response => response.json())
        .then(json => {
          console.log(json)
        })
    }
  }
</script>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
.no-underline {
  text-decoration: none !important;
}
</style>
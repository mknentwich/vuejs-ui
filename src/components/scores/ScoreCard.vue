<template>
  <v-card rounded="lg" outlined color="" class="align-stretch box-shadow" width="100%">
    <v-card-title class="secondaryAccent font-weight-bold primary--text py-3">
      <router-link :to="`score/${score.id}`" class="no-underline">
        {{ score.title }}
      </router-link>
      <v-spacer></v-spacer>
      <v-chip small outlined color="primary primary--text font-weight-bold px-6">{{ categoryName }}</v-chip>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text>
      <div class="mb-3">
        {{ score.description }}
      </div>
      <v-chip small color="secondaryAccent" class="ma-1 font-weight-bold"> für {{ score.groupType }} </v-chip>
      <v-chip small color="secondaryAccent" class="ma-1 font-weight-bold">
        <span class="mr-3"> Schwierigkeit </span>
        <span v-for="n in 5" v-bind:key="n">
          <v-icon small :color="n <= score.difficulty ? 'primary' : 'primaryAccent'">mdi-checkbox-blank-circle</v-icon>
        </span>
      </v-chip>
    </v-card-text>

    <v-card-actions class="mt-0 secondaryAccentLight">
      <v-row no-gutters class="align-center">
        <v-col cols="12" md="auto" class="mx-auto">
          <span class="px-2 text-h6 primary--text font-weight-black">
            {{ (score.price/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
          </span>
        </v-col>
        <v-col cols="auto" class="mx-auto">
          <AddToCartBtn :scoreId="score.id"></AddToCartBtn>
        </v-col>
        <v-col cols="12" md="auto">
          <v-btn rounded x-small depressed color="primaryAccent font-weight-bold" :to="`score/${score.id}`">
            <v-icon left small>mdi-information-variant</v-icon>
            Details
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
  import AddToCartBtn from '@/components/shop/AddToCartBtn.vue'
  import {
    mapMutations,
  } from 'vuex'

  export default {
    name: 'ScoreCard',
    components: { AddToCartBtn },
    props: {
      score: Object,
      categoryName: String
    },
    data: () => ({
      cartItemsMetadata: []
    }),
    computed: {
    },
    methods: {
      ...mapMutations(['addToCart']),
      updateCartMetadata: function() {
        this.cartItemsMetadata = []
        this.cartItems.forEach(item => {
          fetch(`${process.env.VUE_APP_API_URL}/catalogue/scores/${item.id}`)
            .then(response => response.json())
            .then(json => {
              console.log(json)
              json.quantity = item.quantity
              this.cartItemsMetadata.push(json)
            })
        });
        console.log('metadata', this.cartItemsMetadata)
      },
    },
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
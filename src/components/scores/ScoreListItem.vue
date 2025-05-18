<template>
  <v-card rounded="lg" outlined class="d-flex flex-column box-shadow" width="100%" height="100%">
    <v-card-title class="secondaryAccent primary--text py-1 text-left">
      <v-row no-gutters>
        <v-col class="mt-1">
          <router-link :to="`score/${score.id}/${score.title.replace(/\s+/g, '-').toLowerCase()}`" class="no-underline primary--text text-h5 font-weight-bold"> {{ score.title }} </router-link>
        </v-col>
        <v-col>
          <v-chip size="small" color="primary" class="ma-1 font-weight-bold"> für {{ score.groupType }} </v-chip>
      <v-chip size="small" color="primary" class="ma-1 font-weight-bold">
        <span class="mr-3"> Schwierigkeit </span>
        <span v-for="n in 5" v-bind:key="n">
          <v-icon small :color="n <= score.difficulty ? 'primary' : 'primaryAccent'">mdi-checkbox-blank-circle</v-icon>
        </span>
      </v-chip>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto">
          <v-chip size="small" variant="outlined" color="primary primary--text font-weight-bold px-6">{{ categoryName }}</v-chip>
        </v-col>
      </v-row>
    </v-card-title>
    <v-divider></v-divider>

    <v-card-text class="pb-0">
        {{ score.summary }}
    </v-card-text>
    
    <v-card-actions class="ma-0 secondaryAccentLight">
      <v-row class="align-center">
        <v-spacer></v-spacer>
        <v-col cols="12" md="auto" class="mx-auto">
          <span class="px-2 text-h6 primary--text font-weight-black">
            {{ (score.price/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €
          </span>
        </v-col>
        <v-col cols="auto" class="mx-auto">
          <AddToCartBtn :scoreId="score.id"></AddToCartBtn>
        </v-col>
        <v-col cols="12" md="auto" class="py-1 mx-auto">
          <v-btn rounded size="small" variant="flat" color="primaryAccent" class="font-weight-bold primary--text" :to="`score/${score.id}/${score.title.replace(/\s+/g, '-').toLowerCase()}`">
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
      }
    },
  }
</script>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  border: 1px #d5d5d5 solid;
}
.no-underline {
  text-decoration: none !important;
}
.primary--text {
  color: #2E5346 !important;
}
</style>
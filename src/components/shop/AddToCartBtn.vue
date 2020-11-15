<template>
  <span>
    <v-btn v-if="!buttonClicked" depressed color="primary" @click="addToCartAndShowMsg()">
      <v-icon left>mdi-cart-plus</v-icon>
      zum Warenkorb
    </v-btn>
    <v-btn disabled v-else depressed color="secondaryAccentLight" class="primary--text font-weight-bold">
        <v-icon left>mdi-check</v-icon>
        gute Wahl!
    </v-btn>
  </span>
</template>
<script>
  import {
    mapMutations,
  } from 'vuex'

  export default {
    name: 'AddToCartBtn',
    props: {
      scoreId: Number,
    },
    data: () => ({
      buttonClicked: false
    }),
    computed: {
    },
    methods: {
      ...mapMutations(['addToCart']),
      addToCartAndShowMsg: function () {
        this.addToCart(this.scoreId)
        this.buttonClicked = true

        setTimeout( () => {
          this.buttonClicked = false
        },3000);
      }
    }
  }
</script>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
</style>
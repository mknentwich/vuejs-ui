<template>
  <v-row class="no-gutters flex-wrap">
    <v-col cols="12">
      <Cart/>
    </v-col>
    <v-col cols="12">
      <Overview/>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Overview from '@/components/scores/Overview.vue'
import Cart from '@/components/shop/Cart.vue'

export default {
  name: 'Home',
  components: {
    Overview,
    Cart
  }
}
</script>

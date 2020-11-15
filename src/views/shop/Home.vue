<template>
  <v-row class="no-gutters flex-wrap">
    <v-col cols="12">
      <Overview/>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Overview from '@/components/scores/Overview.vue'

export default {
  name: 'ShopHome',
  components: {
    Overview
  }
}
</script>

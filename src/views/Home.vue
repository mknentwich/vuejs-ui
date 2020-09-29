<template>
  <v-row class="no-gutters flex-wrap flex-column">
    <v-col cols="auto">
      <Introduction/>
    </v-col>
  </v-row>
</template>

<script>
// @ is an alias to /src
import Introduction from '@/components/Introduction.vue'

export default {
  name: 'Home',
  components: {
    Introduction
  }
}
</script>

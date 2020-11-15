<template>
  <v-sheet rounded="lg" outlined class="pa-4 box-shadow secondaryAccentLight">
    <!-- decoration dividers to symbolize stave -->
    <v-divider v-for="n in 5" v-bind:key="n" class="mb-2"></v-divider>
    
    <h1 class="text-h3 mt-n12 primary--text">{{ title }}</h1>
    <v-row class="mt-4 align-center justify-center" no-gutters>
      <v-col cols="12" sm="auto" class="text-h6 primary--text mr-4">
        <v-icon class="secondary--text mr-4"> mdi-bullseye-arrow </v-icon>
        für {{ instrumentation }}
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="auto" class="font-weight-bold text-h5 primary--text">
        € {{ price }},00
      </v-col>
      <v-col cols="12" sm="auto" class="ml-3">
        <AddToCartBtn :scoreId="scoreId"></AddToCartBtn>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
  import AddToCartBtn from '@/components/shop/AddToCartBtn.vue'

  export default {
    name: 'Header',
    components: { AddToCartBtn },
    data: () => ({
      
    }),
    computed: {
    },
    methods: {
    },
    props: {
      scoreId: {
        type: Number
      },
      title: {
        type: String,
        default: 'Titel'
      },
      instrumentation: {
        type: String,
        default: 'Besetzung'
      },
      price: {
        type: Number,
        default: 0
      },
    },
  }
</script>

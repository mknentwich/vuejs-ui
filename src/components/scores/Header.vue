<template>
  <v-sheet rounded="lg" outlined class="pa-4 box-shadow secondaryAccentLight">
    <!-- decoration dividers to symbolize stave -->
    <v-divider v-for="n in 5" v-bind:key="n" class="mb-2"></v-divider>
    
    <div class="mt-n12 primary--text">
      <h1 :class="{'text-h3 font-weight-bold': $vuetify.breakpoint.mdAndUp, 'text-h5 font-weight-bold': $vuetify.breakpoint.smAndDown}" >
        {{ title }}
      </h1>
    </div>
    <v-row class="mt-4 align-center justify-center" no-gutters>
      <v-col cols="auto" class="text-h6 primary--text pr-2">
        <v-icon class="secondary--text"> mdi-bullseye-arrow </v-icon>
      </v-col>
      <v-col cols="auto" class="text-h6 primary--text">
        für {{ groupType }}
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="auto" class="font-weight-bold text-h5 primary--text d-flex">
        <span class="ml-auto">{{ (price/100).toLocaleString('de-DE', {minimumFractionDigits: 2}) }} €</span>
      </v-col>
      <v-col cols="12" sm="auto" class="ml-3 d-flex">
        <span class="ml-auto">
          <AddToCartBtn :scoreId="scoreId"></AddToCartBtn>
        </span>
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
    props: {
      scoreId: {
        type: Number
      },
      title: {
        type: String,
        default: 'Titel'
      },
      groupType: {
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

<template>
  <v-row class="no-gutters flex-wrap">
    <v-col cols="12">
      <v-sheet rounded="lg" class="pa-2">
        <v-row class="align-center justify-center" dense>
          <v-col cols="auto">
            <v-img
              :src="require('@/assets/nentwichVerlag_logos_color.svg')"
              class="hidden-xs-only"
              height="90"
              width="200"
              contain
            ></v-img>
          </v-col>
          <v-col cols="auto">
            <div class="primary--text">
              <h1 :class="{'text-h4 font-weight-bold mb-3': $vuetify.breakpoint.mdAndUp, 'text-h5 font-weight-bold': $vuetify.breakpoint.smAndDown}">
                Noten bestellen
              </h1>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-col>
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

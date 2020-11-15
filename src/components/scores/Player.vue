<template>
  <v-card outlined rounded="lg" class="box-shadow">
    <v-card-title class="primary--text font-weight-bold pb-0">
      Hörprobe
    </v-card-title>
    <v-card-text>
    <v-row class="align-center px-2">

      <v-col cols="12" sm="12" class="d-flex">
        <vuetify-audio class="flex-grow-1" :file="file" color="primary" :ended="audioFinish" flat></vuetify-audio>
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: 'Player',
    components: {
        VuetifyAudio: () => import('vuetify-audio'),
    },
    data: () => ({
        file: 'http://www.hochmuth.com/mp3/Boccherini_Concerto_478-1.mp3',
    }),
    computed: {
    },
    methods: {
    }
  }
</script>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
</style>

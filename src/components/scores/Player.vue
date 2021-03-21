<template>
  <v-card outlined rounded="lg" class="box-shadow">
    <v-card-title class="primary--text font-weight-bold pb-0">
      Hörprobe
    </v-card-title>
    <v-card-text>
    <v-row class="align-center px-2">

      <v-col cols="12" sm="12" class="d-flex">
         <audio controls>
            <source :src="file" type="audio/mp3">
            Ihr Browser unterstützt die Wiedergabe der Hörprobe leider nicht.
          </audio> 
      </v-col>
    </v-row>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: 'Player',
    props: {
      scoreId: Number
    },
    computed: {
      file: function() {
        return `${process.env.VUE_APP_API_URL}/assets/scores/${this.scoreId}/audio` 
      }
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

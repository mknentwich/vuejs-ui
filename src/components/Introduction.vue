<template>
  <v-col cols="auto">
    <v-sheet rounded="lg" color="secondaryAccent">
      <v-row class="align-center justify-center">
        <v-col cols="12" md="5" class="primary--text pl-12">
          <div class="text-h6 font-weight-bold pb-4">
            Ich heiße Sie herzlich auf meiner Website willkommen!
          </div>
          <div class="text-subtitle-1 pb-4">
            Hier sehen Sie meine aktuellen Kompositionen und Arrangements.
          </div>
          <div class="text-subtitle-1 pb-4">
            Auch können Sie mich für Workshops, Unterricht, Auftragswerke o.a. kontaktieren.
          </div>
          <div class="text-subtitle-1 pb-4">
            Mit musikalischen Grüßen, <br>
            Markus Nentwich
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" md="5" justify="center" class="pa-4">
          <v-avatar :size="300" class="d-flex">
            <v-img
              :src="require('@/assets/nentwich_portrait.webp')"
              alt="Image of Markus Nentwich"
              round
              position="top"
            ></v-img>
          </v-avatar>
          <v-img
            justify="center"
            class="mt-n8"
            :src="require('@/assets/nentwich_name.svg')"
            aspect-ratio="1.7"
            :height="this.$vuetify.breakpoint.width / 10"
            contain
          ></v-img>
        </v-col>
      </v-row>
    </v-sheet>
  </v-col>
</template>

<script>
  export default {
    name: 'Introduction',

    data: () => ({
      
    }),
  }
</script>

<template>
  <v-sheet rounded="lg" color="secondaryAccent" class="pa-4">
    <v-row class="align-center">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="3" justify="center" class="d-flex">
        <v-avatar :size="avatarSize" class="mx-auto">
          <v-img
            :src="require('@/assets/nentwich_portrait.webp')"
            alt="Image of Markus Nentwich"
            position="top"
          ></v-img>
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="8" class="primary--text">
        <div class="text-h6 font-weight-bold pb-4">
          Grias di, ich bin
        </div>
        <v-img
          justify="left"
          :src="require('@/assets/markusNentwich_komma.svg')"
          height="150"
          width="250"
          class="mt-n6 ml-n3"
          contain
        ></v-img>
        <div class="text-h6 pb-4">
          Posaunist, Musiker und Vollblut-Musikant <br> aus Leopolsdorf im Marchfeld.  
        </div>
      </v-col>
      
    </v-row>
    <Quicklinks/>
  </v-sheet>
</template>

<script>
import Quicklinks from '@/components/Quicklinks.vue'

  export default {
    name: 'Introduction',
    components: {
      Quicklinks
    },
    computed: {
      avatarSize: function () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 250
        }
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 200
        }
        if (this.$vuetify.breakpoint.smAndUp) {
          return '20vw'
        }
        return '60vw'
      },
    },
    data: () => ({
      
    }),
  }
</script>

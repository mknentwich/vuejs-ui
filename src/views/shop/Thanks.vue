<template>
  <v-sheet rounded="lg" color="secondaryAccent" class="py-6">
    <v-row class="align-center">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="3" justify="center" class="d-flex">
        <v-avatar :size="avatarSize" class="mx-auto hidden-xs-only">
          <v-img
            :src="require('@/assets/nentwich_portrait.webp')"
            alt="Image of Markus Nentwich"
            position="top"
          ></v-img>
        </v-avatar>
      </v-col>

      <v-col cols="12" sm="8" class="primary--text pl-6">
        <div class="text-h6 font-weight-bold pb-4">
          Ihre Bestellung ist eingegangen.
        </div>
        <v-img
          justify="left"
          :src="require('@/assets/nentwichVerlag_logos_thanks_green_green.svg')"
          height="150"
          width="300"
          class="mt-n5 ml-n8"
          contain
        ></v-img>
        <div class="text-h6 pb-4">
          Rechnung und weitere Informationen erhalten Sie per E-Mail. <br> Bei weiteren Fragen stehe ich jederzeit gerne zur Verfügung.  
        </div>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-btn 
          outlined 
          rounded 
          large 
          class="primary--text"
          to="/">
          <v-icon class="mr-2"> mdi-home </v-icon>
          zurück zur Startseite
        </v-btn>
      </v-col>
    </v-row>

  </v-sheet>
</template>

<script>
  export default {
    name: 'Thanks',
    data: () => ({
    }),
    computed: {
      avatarSize: function () {
        if (this.$vuetify.breakpoint.lgAndUp) {
          return 250
        }
        if (this.$vuetify.breakpoint.mdAndUp) {
          return 150
        }
        if (this.$vuetify.breakpoint.smAndUp) {
          return '20vw'
        }
        return '50vw'
      },
    }
  }
</script>

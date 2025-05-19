<template>
  <div class="about">
    <v-sheet rounded="lg" color="secondaryAccent" class="pa-4">
      <v-row class="align-center">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="3" justify="center" class="d-flex">
          <v-avatar :size="avatarSize" class="mx-auto">
            <v-img
              :src="require('@/assets/nentwich_portrait.jpg')"
              alt="Image of Markus Nentwich"
              position="top"
            ></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="12" sm="8" class="primary--text">
          <div class="text-h4 font-weight-bold">
            Mag. Markus Nentwich, BA
          </div>
          <!-- address -->
          <v-row class="text-body-1">
            <v-col cols="1" class="text-right">
              <v-icon>mdi-map-marker</v-icon>
            </v-col>
            <v-col cols="10">
              Vereinsgasse 25/14 <br />
              A-1020 Wien
            </v-col>
          </v-row>
          <!-- phone -->
          <v-row class="text-body-1">
            <v-col cols="1" class="text-right">
              <v-icon>mdi-phone</v-icon>
            </v-col>
            <v-col cols="10">
              <a href="tel:+4369910329882" class="text-primary">
                +43 699 10329882
              </a>
            </v-col>
          </v-row>
          <!-- email -->
          <v-row class="text-body-1">
            <v-col cols="1" class="text-right">
              <v-icon>mdi-email</v-icon>
            </v-col>
            <v-col cols="10">
              <a href="mailto:kontakt@markus-nentwich.at" class="text-primary">
                kontakt@markus-nentwich.at
              </a>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>
<script>
import { computed } from 'vue'; // Import computed from Vue
import { useDisplay } from 'vuetify';

export default {
  name: 'Contact',
  setup() {
    const display = useDisplay();

    const avatarSize = computed(() => {
      if (display.lgAndUp) {
        return 250;
      }
      if (display.mdAndUp) {
        return 200;
      }
      if (display.smAndUp) {
        return '20vw';
      }
      return '60vw';
    });

    return {
      avatarSize,
    };
  },
};
</script>
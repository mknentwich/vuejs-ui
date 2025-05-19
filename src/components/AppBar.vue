<template>
  <v-app-bar
    app
    dark
    :class="isMobile ? 'secondaryAccent' : 'app-bar-gradient'"
    elevation="6"
    height="100"
  >
    <v-container>
      <v-row justify="center">
        <v-col cols="1" v-if="isMobile">
          <v-app-bar-nav-icon 
            class="primary--text mr-4" 
            @click="setDrawerValue(true)"
          ></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="11" md="4">
          <router-link to="/" class="d-flex align-start">
            <v-img
              :height="isSmAndDown ? '10vw' : '10vw'"
              max-height="60"
              :src="require('@/assets/nentwichVerlag_logos_name_green_grey.svg')"
              class="mr-5"
            ></v-img>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="pa-4" v-if="!isMobile">
          <v-btn
            rounded
            class="font-weight-bold mx-1 text-white"
            variant="text"
            :to="item.path"
            v-for="item in items"
            :key="item.path"
          >
            {{ item.label }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex';
import { useDisplay } from 'vuetify';

export default {
  name: 'AppBar',
  props: {
    items: Array,
  },
  methods: {
    ...mapMutations(['setDrawerValue']),
  },
  setup() {
    const { mobile, smAndDown, mdAndUp } = useDisplay();

    return {
      isMobile: mobile,
      isSmAndDown: smAndDown,
      isMdAndUp: mdAndUp,
    };
  },
  computed: {
    logoWidth() {
      if (this.isMdAndUp) {
        return '60vw';
      }
      if (!this.isMdAndUp && !this.isSmAndDown) {
        return '40vw';
      }
      return '70vw';
    },
  },
};
</script>

<style>
.app-bar-gradient {
  background: linear-gradient(90deg, #ECE6DD 40%, #2E5346 30%) !important;
}
.secondaryAccent {
  background-color: #ECE6DD !important;
}
.v-toolbar__content, .v-toolbar__extension {
  padding: 0px !important;
}
.container {
  max-width: 1400px;
}
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
</style>

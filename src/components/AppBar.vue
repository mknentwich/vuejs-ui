<template>
  <v-app-bar
    app
    dark
    :class="$vuetify.breakpoint.mobile ? 'secondaryAccent' : 'app-bar-gradient'"
    elevation="6"
    height="100"
  >
  <v-container>
    <v-row no-gutters justify="center" align="center">
      <v-col cols="1" v-if="$vuetify.breakpoint.mobile">
        <v-app-bar-nav-icon 
          class="primary--text mr-4" 
          @click="setDrawerValue(true)"
        ></v-app-bar-nav-icon>
      </v-col>
      <v-col cols="11" md="4">
        <router-link class="justify-center" to="/">
          <v-img
            :height="$vuetify.breakpoint.smAndDown ? '10vw' : '10vw'"
            max-height="60"
            :width="logoWidth"
            :src="require('@/assets/nentwichVerlag_logos_name_green_grey.svg')"
            class="mr-5"
          ></v-img>
        </router-link>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="auto" class="primary pa-4" v-if="!$vuetify.breakpoint.mobile">
        <v-btn rounded class="font-weight-bold mx-1" text :to="item.path" v-for="item in items" v-bind:key="item.path">
        {{ item.label }}
      </v-btn>
      </v-col>
    </v-row>
  </v-container>
  </v-app-bar>
</template>

<script>
import { mapMutations } from 'vuex'
  export default {
    name: 'AppBar',
    props: {
      items: Array
    },
    methods: {
      ...mapMutations(['setDrawerValue'])
    },
    computed: {
      logoWidth: function () {
        if (this.$vuetify.breakpoint.mdAndUp) {
          return '60vw'
        }
        if (this.$vuetify.breakpoint.smAndUp) {
          return '40vw'
        }
        return '70vw'
      },
    },
  }
</script>

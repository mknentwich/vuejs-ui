<template>
  <v-app id="app">
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
      color="primary"
      dark
    >
    <v-row justify="center" no-gutters class="pa-6">
      <v-img
        height="100px"
        width="220px"
        :src="require('@/assets/nentwich_logo_white_wip.svg')"
      ></v-img>
    </v-row>
      <v-divider></v-divider>

      <v-list>
        <v-list-item link v-for="item in navItems" v-bind:key="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      dark
      :class="$vuetify.breakpoint.mobile ? 'secondaryAccent' : 'app-bar-gradient'"
      elevation="6"
      height="100"
    >
    <v-container>
      <v-row no-gutters justify="center" align="center">
        <v-col cols="auto">
          <v-app-bar-nav-icon 
            class="primary--text mr-4" 
            v-if="$vuetify.breakpoint.mobile"
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="auto" md="3" class="secondaryAccent">
          <router-link class="justify-center" to="/">
            <v-img
              height="100px"
              width="210px"
              :src="require('@/assets/nentwich_logo_wip.svg')"
              class="mr-5"
            ></v-img>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="primary pa-4" v-if="!$vuetify.breakpoint.mobile">
          <v-btn class="font-weight-bold" text :to="item.path" v-for="item in navItems" v-bind:key="item.path">
          {{ item.label }}
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-app-bar>

    <v-main>
      <v-container
      >
        <router-view></router-view>
        <!-- <Footer class="align" /> -->
        <v-footer fixed width="100%" color="primary">
          <v-container>
            <v-row>
          <v-col cols="4">
            <div v-for="link in footerLinks" v-bind:key="link.path" >
            <v-btn dark class="font-weight-bold" text :to="link.path">
              {{ link.label }}
            </v-btn>
            </div>
            
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            class="text-center white--text"
            cols="auto"
          >
            <v-img
              height="100px"
              width="220px"
              :src="require('@/assets/nentwich_logo_white_wip.svg')"
            ></v-img>
          </v-col>
            </v-row>
          </v-container>
        </v-footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  /* import Footer from '@/components/Footer.vue' */

  export default {
    components: {  },
    props: {
      source: String,
    },
    data: () => ({
      drawer: false,
      navItems: [
        {
          label: 'Home',
          path: '/',
          icon: 'mdi-home'
        },
        {
          label: 'Notenshop',
          path: '/shop',
          icon: 'mdi-playlist-music-outline'
        },
        {
          label: 'Kontakt',
          path: '/contact',
          icon: 'mdi-email'
        },
        {
          label: 'Biografie',
          path: '/biography',
          icon: 'mdi-card-account-details'
        }
      ],
      footerLinks: [
        {
          label: 'Impressum',
          path: '/imprint',
          icon: 'mdi-playlist-music-outline'
        },
        {
          label: 'AGB',
          path: '/terms',
          icon: 'mdi-email'
        }
      ]
    }),
  }
</script>

<style>
.app-bar-gradient {
  background: linear-gradient(90deg, #ECE6DD 30%, #2E5346 30%);
}
.v-toolbar__content, .v-toolbar__extension {
	padding: 0px !important;
}

</style>


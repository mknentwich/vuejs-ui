<template>
  <v-app id="app">
    <!-- NAVIGATION DRAWER, toDo: outsource to separate component -->
    <v-navigation-drawer
      v-model="drawer"
      app
      disable-resize-watcher
      color="primary"
      dark
    >
    <v-row justify="center" no-gutters class="pa-6">
      <v-img
        height="30px"
        width="80px"
        :src="require('@/assets/nentwichVerlag_logos_name_grey_grey.svg')"
      ></v-img>
    </v-row>
      <v-divider></v-divider>

      <v-list nav>
        <v-list-item link v-for="item in navItems" v-bind:key="item.path" :to="item.path">
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.label }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- APP BAR, toDo: outsource to separate component -->
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
            @click="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-col>
        <v-col cols="11" md="4">
          <router-link class="justify-center" to="/">
            <v-img
              :height="$vuetify.breakpoint.smAndDown ? '10vw' : '10vw'"
              max-height="60"
              :width="$vuetify.breakpoint.smAndDown ? '80vw' : '25vw'"
              :src="require('@/assets/nentwichVerlag_logos_name_green_grey.svg')"
              class="mr-5"
            ></v-img>
          </router-link>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="auto" class="primary pa-4" v-if="!$vuetify.breakpoint.mobile">
          <v-btn rounded class="font-weight-bold mx-1" text :to="item.path" v-for="item in navItems" v-bind:key="item.path">
          {{ item.label }}
        </v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-app-bar>

    <!-- MAIN -->
    <v-main>
      <v-container>
          <v-row no-gutters>
            <v-spacer></v-spacer>
            <v-col :cols="$vuetify.breakpoint.xs ? 12 : 10" v-if="!$route.meta.hideCart === true">
              <v-scale-transition>
              <Cart/>
              </v-scale-transition>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12" class="pt-2">
              <!-- <transition name="component-fade" mode="out-in"> -->
              <router-view></router-view>
              <!-- </transition> -->
            </v-col>
          </v-row>
      </v-container>
    </v-main>
    <Footer :footerLinks="footerLinks" />
  </v-app>
</template>

<script>
  import Footer from '@/components/Footer.vue'
  import Cart from '@/components/shop/Cart.vue'

  export default {
    components: { Cart, Footer },
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
          path: '/contact',
          icon: 'mdi-playlist-music-outline'
        },
        {
          label: 'AGB',
          path: '/terms',
          icon: 'mdi-email'
        }
      ]
    })
  }
</script>

<style>
.app-bar-gradient {
  background: linear-gradient(90deg, #ECE6DD 40%, #2E5346 30%);
}
.v-toolbar__content, .v-toolbar__extension {
	padding: 0px !important;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.container {
  max-width: 1400px;
}
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
</style>


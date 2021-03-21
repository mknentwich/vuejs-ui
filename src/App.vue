<template>
  <v-app id="app">
    <NavigationDrawer :items="navDrawerItems" />
    <AppBar :items="navItems" />

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
            <v-col cols="12" class="">
              <router-view></router-view>
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
  import AppBar from '@/components/AppBar.vue'
  import NavigationDrawer from '@/components/NavigationDrawer.vue'

  export default {
    components: { Cart, Footer, AppBar, NavigationDrawer },
    props: {
      source: String,
    },
    metaInfo() {
        return { 
            title: 'Markus Nentwich',
            meta: [
                { name: 'description', content:  'Markus Nentwich (*28.12.1994) ist Musiker, Komponist und Arrangeur aus Niederösterreich. Auf dieser Homepage können Sie Noten kaufen und Workshops buchen.'},
                { name: 'abstract', content:  'Markus Nentwich (*28.12.1994) ist Musiker, Komponist und Arrangeur aus Niederösterreich. Auf dieser Homepage können Sie Noten kaufen und Workshops buchen.'},
                { name: 'keywords', content:  'Markus Nentwich, Eine letzte Runde, Viera Blech, Polka, Musik, Blasmusik, Noten, Posaune, Webshop, Verlag'},
                { name: 'robots', content: 'index,follow'} 
            ]
        }
    },
    data: () => ({
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
    }),
    computed: {
      navDrawerItems: function() {
        return this.navItems.concat(this.footerLinks)
      }
    },
  }
</script>

<style>
.app-bar-gradient {
  background: linear-gradient(90deg, #ECE6DD 40%, #2E5346 30%);
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


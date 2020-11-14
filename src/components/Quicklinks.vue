<template>
  <v-row dense class="pa-6">
   <v-col cols="12" md="4" class="pa-4" v-for="(link, i) in links" v-bind:key="i">
      <v-hover>
        <template v-slot="{ hover }">
          <v-card @click="goTo(link.to)" flat tile color="secondaryAccentLight" :class="hover ? 'box-shadow-hover' : 'box-shadow'">
            <v-card-text class="d-flex align-center justify-center flex-column fill-height">
              <v-icon 
                v-if="link.icon"
                x-large
                color="primary"
              >
                {{ link.icon }}
              </v-icon>
              <v-img
                v-if="link.img"
                height="80px"
                contain
                width="300px"
                :src="require('@/assets/nentwichVerlag_logos_color.svg')"
                class="mb-n2"
              ></v-img>
              <h2 class="text-h6 primary--text">
                {{ link.text }}
              </h2>
            </v-card-text>
          </v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Quicklinks',

    data: () => ({
      links: [
        {
          icon: 'mdi-card-account-details-outline',
          text: 'Mehr über mich',
          to: '/biography',
        },
        {
          img: '@/assets/nentwichVerlag_logos_color.svg',
          text: 'Noten bestellen',
          to: '/shop'
        },
        {
          icon: 'mdi-message-text-outline',
          text: 'Kontakt aufnehmen',
          to: '/contact'
        }
      ]
      
    }),
    methods: {
      goTo: function (componentName) {
        this.$router.push(componentName)
      }
    },
  }
</script>

<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
.box-shadow-hover {
  box-shadow: 8px 8px 0px #d5d5d5 !important;
  height: 100%;
  cursor: pointer;
}
</style>

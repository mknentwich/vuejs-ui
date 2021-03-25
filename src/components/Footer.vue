<template>
  <v-footer width="100%" color="primary">
    <v-container>
      <v-row no-gutters>
        <v-col cols="12" md="6" class="pt-3">
          <div v-for="link in footerLinks" v-bind:key="link.path" >
          <v-btn dark text rounded class="font-weight-bold" :to="link.path">
            {{ link.label }}
          </v-btn>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          :class="$vuetify.breakpoint.mdAndUp ? 'text-right' : 'text-left'"
          cols="12" 
          md="6"
        >
          <v-img
            height="60px"
            width="270px"
            :class="$vuetify.breakpoint.mdAndUp ? 'ml-auto' : 'mr-auto'"
            :src="require('@/assets/nentwichVerlag_logos_name_grey_grey.svg')"
          ></v-img>
          <div>
            <v-tooltip 
              top 
              v-for="socialMediaLink in socialMediaLinks" 
              v-bind:key="socialMediaLink.link"
              color="secondary"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  link
                  color="transparent"
                  :href="socialMediaLink.link"
                  target="_blank"
                  :alt="socialMediaLink.title"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon color="white">
                    {{ socialMediaLink.icon }}
                  </v-icon>
                </v-chip>
              </template>
              <span class="font-weight-bold primary--text">{{ socialMediaLink.title }}</span>
            </v-tooltip>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: {
    footerLinks: Array,
  },
  data() {
    return {
      socialMediaLinks: [
        {
          title: 'Folge mir auf Facebook!',
          link: 'https://www.facebook.com/markus.nentwich.5',
          icon: 'mdi-facebook'
        },
        {
          title: 'Folge mir bei Instagram!',
          link: 'https://www.instagram.com/markus.nentwich',
          icon: 'mdi-instagram'
        }
      ]
    }
  },
}
</script>
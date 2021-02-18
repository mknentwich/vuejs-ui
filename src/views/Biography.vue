<template>
  <div class="about">
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
            Darf ich mich vorstellen?
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
            mein Name.  
          </div>
        </v-col>
        
      </v-row>
    </v-sheet>
    <v-timeline :dense="$vuetify.breakpoint.xsOnly ? true : false">
      <v-timeline-item
        v-for="(timelineItem) in timelineItems"
        :key="timelineItem.title"
        color="primary"
        fill-dot
      >
        <template v-slot:opposite>
          <span class="font-weight-bold primary--text text-h5">{{ timelineItem.title }}</span>
        </template>
        <v-card class="secondaryAccent" elevation="0">
          <v-card-text>
            {{ timelineItem.text }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>
<script>
  export default {
    data: () => ({
      timelineItems: [
        {
          title: 'Anfänge',
          text: 'Meinen ersten Trompeten- und Posaunenunterricht erhielt ich mit fünf Jahren in der örtlichen Musikschule bei meinem Vater Felix. Nach einigen Jahren bei Mag. Reinhard Stöckl und einem Jahr bei Thomas Zsivkovits begann ich 2010 mit dem Vorbereitungslehrgang an der Universität für Musik und darstellende Kunst Wien bei Prof. Otmar Gaiswinkler.'
        },
        {
          title: 'Schulzeit & danach',
          text: 'Nach der Matura (Abitur) im Musikgymnasium Wien begann der Präsenzdienst bei der Gardemusik Wien, wo sich auch die Powerkryner gründeten, bei denen ich Gründungsmitglied bin.'
        },
        {
          title: 'Studium',
          text: 'Seitdem studiere ich Konzertfach und IGP Posaune bei Prof. Otmar Gaiswinkler, Prof. Dietmar Küblböck und Erik Hainzl und Jazzposaune bei Prof. Leonhard Paul mit vielleicht baldigem Abschluss.'
        },
        {
          title: 'Auftritte',
          text: 'Auftritte (mit Powerkryner, Vienna Sound Club, …​) führten mich nach Österreich, Deutschland, Italien, Frankreich, Schweiz, Japan, Dubai, Hongkong, Singapur, u.v.m.'
        },
        {
          title: 'VIERA BLECH',
          text: 'Seit 2020 bin ich fixes Mitglied beim VIERA BLECH.'
        },
        {
          title: 'Sonstiges',
          text: 'Neben Unterrichtstätigkeit in den Musikschulen Deutsch Wagram und Groß Enzersdorf bin ich vor Allem als Komponist und Arrangeur für verschiedenste Besetzungen gefragt: ORF Allstars Band, da Blechhauf’n, VIERA BLECH, Kaiser Musikanten, Weinviertler Mährische Musikanten, …​'
        },
      ]
    }),
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
  }
</script>
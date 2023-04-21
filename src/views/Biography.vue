<template>
  <div class="about">
    <v-sheet rounded="lg" color="secondaryAccent" class="pa-4">
      <v-row class="align-center" no-gutters>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="3" justify="center" class="d-flex pa-2">
          <v-avatar :size="avatarSize" class="mx-auto">
            <v-img
              :src="require('@/assets/nentwich_portrait_alt.jpg')"
              alt="Image of Markus Nentwich"
              position="top"
            ></v-img>
          </v-avatar>
        </v-col>

        <v-col cols="12" sm="8" class="primary--text">
          <!--<div class="text-h6 font-weight-bold pb-4">
            Darf ich mich vorstellen?
          </div>-->
          <v-img
            justify="left"
            :src="require('@/assets/markusNentwich_komma.svg')"
            height="150"
            width="250"
            class="mt-n2 ml-n3"
            contain
          ></v-img>
          <div class="text-h6">
            der Mann vor dem Notenblatt <br> und hinter der Posaune.
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
        small
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
    <!-- reference to contact -->
    <v-sheet rounded="lg" color="primaryAccent" class="pa-4 mb-4">
      <v-row class="align-center">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" justify="center" :class="{'text-right': $vuetify.breakpoint.mdAndUp, 'text-center': $vuetify.breakpoint.smAndDown}">
          <div class="text-h5 font-weight-bold primary--text">
            Noch Fragen?
          </div>
        </v-col>

        <v-col cols="12" sm="6" :class="{'text-left': $vuetify.breakpoint.mdAndUp, 'text-center': $vuetify.breakpoint.smAndDown}">
          <v-btn to="/contact" depressed rounded x-large class="primary font-weight-bold">
            <v-icon left>mdi-message-text-outline</v-icon>
            Kontakt aufnehmen
          </v-btn>
        </v-col>
        
      </v-row>
    </v-sheet>
  </div>
</template>
<script>
  export default {
    data: () => ({
      timelineItems: [
        {
          title: 'Anfänge',
          text: 'Seinen ersten Trompeten- und Posaunenunterricht erhielt Markus mit fünf Jahren in der örtlichen Musikschule bei seinem Vater Felix. Daraufhin war er einige Jahre im Unterricht bei Reinhard Stöckl und ein Jahr bei Thomas Zsivkovits. 2010 startete er den Vorbereitungslehrgang an der Universität für Musik und darstellende Kunst Wien bei Prof. Otmar Gaiswinkler.'
        },
        {
          title: 'Schulzeit & danach',
          text: 'Nach Absolvierung der Matura (Abitur) im Musikgymnasium Wien trat er den Präsenzdienst bei der Gardemusik Wien an. Dort entstanden auch die Powerkryner, für die Markus zahlreiche Arrangements schrieb.'
        },
        {
          title: 'Studium',
          text: '2013 begann er das Diplomstudium Konzertfach Posaune (Klassik) bei Univ.-Prof. Otmar Gaiswinkler, Univ.-Prof Dietmar Küblböck und Erik Hainzl, ein Jahr später folgte das Studium Instrumental- und Gesangspädagogik (IGP Klassik). Beide Studien schloss er 2020 ab. 2015 kam das Studium Jazzposaune bei Leonhard Paul dazu, das 2021 abgeschlossen wurde.'
        },
        {
          title: 'Auftritte',
          text: 'Unzählige Auftritte (mit Powerkryner, Vienna Sound Club, …) in Österreich, Deutschland, Italien, Frankreich, Schweiz, Japan, Dubai, Hongkong, Singapur u.v.m.'
        },
        {
          title: 'VIERA BLECH',
          text: 'Seit 2020 ist Markus fixes Mitglied bei VIERA BLECH. Die Touren führen ihn regelmäßig nach Österreich, Deutschland, Schweiz, Niederlande, Italien, Frankreich und Kroatien.'
        },
        {
          title: 'Sonstiges',
          text: 'Neben Unterrichtstätigkeiten an den Musikschulen Deutsch Wagram und Groß-Enzersdorf ist er vor allem als Komponist und Arrangeur für verschiedenste Besetzungen gefragt: ORF Allstars Band, da Blechhauf’n, VIERA BLECH, Kaiser Musikanten, Weinviertler Mährische Musikanten, ... Auch als Aufnahmeleiter oder als Dozent bei Workshops ist er gern gesehen.'
        },
        {
          title: 'Musical',
          text: '2015 führte ihn eine deutsche Tourproduktion mit dem Musical „Elisabeth“ nach Essen und München. Seit 2022 ist Markus regelmäßig bei den Vereinigten Bühnen Wien als Posaunist und Tubist zu hören. Bisherige Musicals: „Cats“, „Rebecca“, „Der Glöckner von Notre Dame“ und „Jesus Christ Superstar“.'
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
        return '40vw'
      },
    },
  }
</script>

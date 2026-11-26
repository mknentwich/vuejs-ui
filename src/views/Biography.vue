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
    <v-timeline
      :side="isXsOnly ? 'end' : undefined"
      :density="isXsOnly ? 'compact' : 'default'"
      :hide-opposite="isXsOnly"
    >
      <v-timeline-item
        v-for="(timelineItem) in timelineItems"
        :key="timelineItem.title"
        dot-color="#2E5346"
        fill-dot
        size="small"
      >
        <template v-slot:opposite>
          <span class="font-weight-bold primary--text text-h5">{{ timelineItem.title }}</span>
        </template>
        <v-card class="secondaryAccent" elevation="0">
          <v-card-text>
            <div v-if="isXsOnly" class="font-weight-bold primary--text text-h6 mb-2">
              {{ timelineItem.title }}
            </div>
            <p
              v-for="(paragraph, index) in timelineItem.paragraphs"
              :key="index"
              :class="{ 'mb-3': index < timelineItem.paragraphs.length - 1 }"
            >
              {{ paragraph }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
    <v-sheet rounded="lg" color="primaryAccent" class="pa-4 mb-4">
      <v-row class="align-center">
        <v-spacer></v-spacer>
        <v-col cols="12" sm="6" justify="center" :class="isMdAndUp ? 'text-right' : 'text-center'">
          <div class="text-h5 font-weight-bold primary--text">
            Noch Fragen?
          </div>
        </v-col>

        <v-col cols="12" sm="6" :class="isMdAndUp ? 'text-left' : 'text-center'">
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
import { useDisplay } from 'vuetify';
import { computed } from 'vue';

export default {
  data: () => ({
    timelineItems: [
      {
        title: 'Anfänge',
        paragraphs: [
          'Markus wurde 1994 geboren und kam bereits sehr früh mit Musik in Berührung. Nach ersten Gehversuchen am Klavier erhielt er bei seinem Vater Felix an der örtlichen Musikschule seinen ersten Trompeten- und Posaunenunterricht. In den darauffolgenden Jahren wurde er mehrere Jahre von Reinhard Stöckl und ein Jahr von Thomas Zsivkovits unterrichtet.',
        ],
      },
      {
        title: 'Schulzeit & danach',
        paragraphs: [
          '2010 begann Markus den Vorbereitungslehrgang an der Universität für Musik und darstellende Kunst Wien bei Prof. Otmar Gaiswinkler. Seine Matura absolvierte er am Musikgymnasium Wien.',
          'Nach der Schulzeit leistete er 16 Monate Präsenzdienst bei der Gardemusik Wien. In dieser Zeit entstand auch die Band Powerkryner, bei der Markus als musikalischer Leiter und Arrangeur tätig war. Ende 2019 verließ er die Formation.',
        ],
      },
      {
        title: 'Musikalische Heimat',
        paragraphs: [
          'Seine musikalischen Wurzeln liegen im Musikverein Leopoldsdorf, dem Markus seit über 20 Jahren als Mitglied verbunden ist. Von 2013 an war er dort zehn Jahre lang als Kapellmeister tätig und prägte in dieser Funktion das musikalische Vereinsleben.',
        ],
      },
      {
        title: 'Studium',
        paragraphs: [
          '2013 begann Markus das Diplomstudium Konzertfach Posaune (Klassik) an der Universität für Musik und darstellende Kunst Wien bei Univ.-Prof. Otmar Gaiswinkler, Univ.-Prof. Dietmar Küblböck und Erik Hainzl. 2014 folgte das Studium Instrumental- und Gesangspädagogik (IGP Klassik).',
          'Beide Studien schloss er 2020 erfolgreich ab. Zusätzlich studierte er ab 2015 Jazzposaune bei Leonhard Paul und schloss dieses Studium 2021 ab.',
        ],
      },
      {
        title: 'Fixe Ensembles & Bands',
        paragraphs: [
          'Von 2020 bis Ende 2026 war Markus fixes Mitglied bei VIERA BLECH. Mit der Formation führten ihn zahlreiche Auftritte und Tourneen durch Österreich, Deutschland, die Schweiz, die Niederlande, Italien und Frankreich sowie nach Kroatien.',
          'Seit 2024 ist er fixes Mitglied der Thomas Gansch Blasmusik Supergroup.',
          'Bei den Niederalmer Musikanten begann Markus 2018 zunächst als Aushilfe und Arrangeur. Mittlerweile ist er fixes Mitglied der Formation und dort an Posaune, Tuba und Keyboard zu hören. Darüber hinaus stammen die meisten Arrangements der Gruppe aus seiner Feder.',
          'Als Substitut gern gesehen bei Wieder, Gansch & Paul, eine kleine dorfmusik, den Weinviertler Mährischen Musikanten, uvm.',
        ],
      },
      {
        title: 'Blasmusik – Komposition, Arrangement & Aufnahmeleitung',
        paragraphs: [
          'Als Arrangeur und Komponist ist Markus in der Blasmusikszene vielseitig tätig. Mittlerweile umfasst sein Repertoire mehr als 100 Arrangements für Blasorchester sowie über 200 Arrangements für Popmusik und Studio-Produktionen.',
          'Zu seinen Auftraggebern und musikalischen Partnern zählen unter anderem da Blechhauf’n, die Militärmusik Oberösterreich, Rian (Ö3), VIERA BLECH, Pepe Allstar Band, die Kaiser Musikanten, eine kleine dorfmusik, die Weinviertler Mährischen Musikanten, und unzählige weitere Besetzungen.',
          'Mit „Eine letzte Runde“ und „Marsch der Galaxien“ stammen auch zwei besonders erfolgreiche Blasmusikkompositionen aus seiner Feder. Neuerscheinungen sind regelmäßig im Notenshop zu finden.',
          'Neben seiner Tätigkeit als Komponist und Arrangeur ist Markus auch als Aufnahmeleiter tätig. In dieser Funktion betreute er unter anderem Produktionen der Kaiser Musikanten, Moritz & Co und Voixbrass sowie Aufnahmen verschiedener Musikvereine.',
        ],
      },
      {
        title: 'Studio',
        paragraphs: [
          'Auch als Studiomusiker ist Markus an Posaune, Tenorhorn und Tuba sehr gefragt – sowohl direkt vor Ort in Studios als auch remote aus dem eigenen Studio zu Hause.',
          'Häufig übernimmt er dabei nicht nur die instrumentalen Einspielungen, sondern arrangiert auch die passenden Bläserarrangements für die jeweilige Produktion. Zu seinen bisherigen musikalischen Partnern zählen unter anderem das Label Tonherd, die Kastelruther Spatzen, die Juzis, uvm.',
        ],
      },
      {
        title: 'Unterricht & Workshops',
        paragraphs: [
          'Von 2017 bis 2024 unterrichtete Markus an der Musikschule Groß-Enzersdorf, von 2018 bis 2022 zusätzlich an der Musikschule Deutsch-Wagram.',
          'Von 2024 bis 2026 war er als Dozent für Literaturkunde und Arrangement Blasorchester an der Universität für Musik und darstellende Kunst Wien tätig.',
          'Darüber hinaus war er als Dozent bei Jungmusikerseminaren und Orchesterwochen tätig.',
          'Bis heute gibt er regelmäßig Workshops für Blasorchester, kleinere Ensembles und Big Bands in ganz Österreich und Deutschland.',
        ],
      },
      {
        title: 'Musical',
        paragraphs: [
          '2015 war Markus Teil der deutschen Tourneeproduktion des Musicals „Elisabeth“, die ihn unter anderem nach Essen und München führte.',
          'Seit 2022 ist er als Substitut regelmäßig als Posaunist und Tubist bei den Vereinigten Bühnen Wien zu hören. Dabei wirkte er an zahlreichen Musicalproduktionen mit, darunter „Cats“, „Rebecca“, „Der Glöckner von Notre Dame“, „Jesus Christ Superstar“, „Rock Me Amadeus – Das Falco Musical“ und „Das Phantom der Oper“.',
        ],
      },
      {
        title: 'Tanzkapelle Kokomo',
        paragraphs: [
          '2026 gründete Markus die Tanzkapelle Kokomo. Bereits kurz nach dem Start sorgten die ersten Veröffentlichungen auf Instagram und Facebook für große Aufmerksamkeit und zahlreiche Klicks.',
        ],
      },
    ]
  }),
  setup() {
    const { xs, mdAndUp, lgAndUp, smAndUp } = useDisplay();

    const isXsOnly = xs;

    const avatarSize = computed(() => {
      if (lgAndUp.value) {
        return 250;
      }
      if (mdAndUp.value) {
        return 150;
      }
      if (smAndUp.value) {
        return '20vw';
      }
      return '30vw';
    });

    return {
      isXsOnly,
      avatarSize,
      mdAndUp,
      lgAndUp,
      smAndUp,
    };
  },
};
</script>

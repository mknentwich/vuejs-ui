<template>
  <v-sheet rounded="lg" color="secondaryAccentLight box-shadow" class="pa-4">
    <!-- author -->
    <v-row>
      <v-col cols="1" class="text-subtitle-2 primary--text">
        <v-icon class="secondary--text"> mdi-account </v-icon>
      </v-col>
      <v-col cols="11" class="text-body-1 primary--text">
        {{ author }}
      </v-col>
    </v-row>
    <!-- description -->
    <v-row>
      <v-col cols="1" class="text-subtitle-2 primary--text">
        <v-icon class="secondary--text"> mdi-information-variant </v-icon>
      </v-col>
      <v-col cols="11" class="text-body-1 primary--text">
        {{ description }}
      </v-col>
    </v-row>
    <!-- category -->
    <v-row>
      <v-col cols="1" class="text-subtitle-2 primary--text">
        <v-icon class="secondary--text"> mdi-bookmark </v-icon>
      </v-col>
      <v-col cols="11" class="text-body-1 primary--text">
        {{ category }}
      </v-col>
    </v-row>
    <!-- difficulty -->
    <v-row>
      <v-col cols="1" class="text-subtitle-2 primary--text">

      </v-col>
      <v-col cols="11" class="text-body-1 primary--text">
        <v-chip small color="secondaryAccent" class="font-weight-bold">
          <span class="mr-3"> Schwierigkeit </span>
          <span v-for="n in 5" v-bind:key="n">
            <v-icon small :color="n <= difficulty ? 'primary' : 'primaryAccent'">mdi-checkbox-blank-circle</v-icon>
          </span>
        </v-chip>
      </v-col>
    </v-row>
  </v-sheet>
</template>
<script>
  export default {
    name: 'Metadata',
    components: { },
    data: () => ({
      
    }),
    computed: {
    },
    methods: {
    },
    props: {
      author: {
        type: String,
        default: 'Autor'
      },
      category: {
        type: String,
        default: 'nicht klassifiziert'
      },
      description: {
        type: String,
        default: 'keine Beschreibung'
      },
      difficulty: {
        type: Number,
        default: 0
      },
    },
  }
</script>

<template>
  <v-row no-gutters>
    <!-- progress bar to indicate loading -->
    <v-col cols="12" v-if="loading">
      <div class="text-body-2 primary--text text-center">
        Inhalte werde geladen...
      </div>
      <v-progress-linear indeterminate class="primary--text">
      </v-progress-linear>
    </v-col>
    <v-col cols="12" class="text-center">
      <!-- filter header -->
      <v-sheet rounded="lg" color="primaryAccent" class="pa-1 mb-4">
        <v-row justify="space-between">
          <v-col cols="auto">
            <v-chip class="ma-3" variant="outlined" color="primary">
              <v-icon left>mdi-filter</v-icon>
              Filter
            </v-chip>
          </v-col>
          <v-col cols="auto">
            <v-chip-group v-model="selectedCategories" multiple>
              <v-chip
                v-for="category in catalogue"
                :key="category.id"
                :value="category.id"
                class="ma-2"
                color="primary"
                outlined
              >
                <v-icon left color="primary" class="mr-1">
                  {{
                    selectedCategories.includes(category.id)
                      ? 'mdi-check'
                      : 'mdi-eye-off'
                  }}
                </v-icon>
                {{ category.namePlural }}
              </v-chip>
            </v-chip-group>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <!-- View toggle button -->
            <v-btn-toggle v-model="viewMode" class="ma-2" density="compact">
              <v-btn color="primary" value="card" icon >
                <v-icon color="primary">mdi-view-grid</v-icon>
              </v-btn>
              <v-btn color="primary" value="list" icon>
                <v-icon color="primary">mdi-view-list</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row>
      </v-sheet>

      <!-- create list by category -->
      <div
        v-for="category in filteredCategories"
        :key="category.id"
        class="text-center mb-6"
      >
        <v-divider class="mt-6 mb-4"></v-divider>
        <h2 class="primary--text text-h4 font-weight-bold mb-6">{{ category.namePlural }}</h2>
        <v-row v-if="viewMode === 'card'" justify="center">
          <!-- Card view -->
          <v-spacer></v-spacer>
          <v-col
            class="d-flex align-stretch mx-auto"
            cols="12"
            md="4"
            sm="6"
            v-for="score in category.scores"
            :key="score.id"
          >
            <ScoreCard :score="score" :categoryName="category.name"></ScoreCard>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
        <v-row v-else>
          <!-- List view -->
          <v-col cols="12" v-for="score in category.scores" :key="score.id">
            <ScoreListItem :score="score" :categoryName="category.namePlural" />
          </v-col>
        </v-row>
        <!-- show sub-categories -->
        <div
          v-for="subcategory in category.children"
          :key="subcategory.id"
          rounded="lg"
        >
          <h3 class="primary--text">{{ subcategory.namePlural }}</h3>
          <v-row v-if="viewMode === 'card'" justify="center">
            <!-- Card view -->
            <v-spacer></v-spacer>
            <v-col
              class="d-flex align-stretch mx-auto"
              cols="12"
              md="4"
              sm="6"
              v-for="score in subcategory.scores"
              :key="score.id"
            >
              <ScoreCard :score="score" :categoryName="subcategory.name"></ScoreCard>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row v-else>
            <!-- List view -->
            <v-col cols="12" v-for="score in subcategory.scores" :key="score.id">
              <ScoreListItem :score="score" :categoryName="subcategory.name" />
            </v-col>
          </v-row>
        </div>
        <v-spacer></v-spacer>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import ScoreCard from '@/components/scores/ScoreCard.vue'
  import { mapMutations } from 'vuex'
import ScoreListItem from '@/components/scores/ScoreListItem.vue'

  export default {
    name: 'Overview',
    components: { ScoreCard, ScoreListItem },
    data: () => ({
      loading: false,
      scores: [],
      catalogue: [],
      selectedCategories: [], // Tracks selected categories
      viewMode: 'card', // Tracks the current view mode ('card' or 'list')
    }),
    computed: {
      filteredCategories() {
        // Show only categories that are explicitly selected
        return this.catalogue.filter(category =>
          this.selectedCategories.includes(category.id)
        )
      },
    },
    methods: {
      ...mapMutations(['addToCart']),
      fetchScores: function () {
        var that = this
        that.loading = true
        fetch(process.env.VUE_APP_API_URL + '/catalogue/')
          .then(response => response.json())
          .then(json => {
            // sort scores alphabetically
            json.children[0].scores.sort((a, b) =>
              a.title > b.title ? 1 : -1
            )
            that.catalogue = json.children
            that.selectedCategories = json.children.map(category => category.id) // Select all by default
            console.log(json.children[0].scores)
            that.loading = false
          })
      },
    },
    created() {
      this.fetchScores()
    },
  }
</script>
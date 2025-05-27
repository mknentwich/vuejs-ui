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
      <v-sheet rounded="lg" color="primaryAccent" class="pa-1">
        <v-row justify="space-between" no-gutters>
          <v-col cols="auto" class="ma-0">
            <v-chip-group v-model="selectedCategories" multiple>
              <v-chip disabled class="ma-1" variant="outlined" color="primary">
              <v-icon left>mdi-filter</v-icon>
              Filter
            </v-chip>
              <v-chip
                v-for="category in catalogue"
                :key="category.id"
                :value="category.id"
                class="ma-1"
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
          <!-- New grouping toggle as buttongroup -->
          <v-col cols="auto" justify="center" class="my-1">
            <v-chip disabled class="ma-1" variant="outlined" color="primary">
              <v-icon left>mdi-filter</v-icon>
              Gruppierung
            </v-chip>
            <v-btn-toggle v-model="groupingMode" mandatory density="compact" class="text-primary pa-1">
              <v-btn rounded="xl" size="small" density="compact" color="primary" value="category" class="mr-2">Kategorie</v-btn>
              <v-btn rounded="xl" size="small" density="compact" color="primary" value="groupType">Besetzung</v-btn>
            </v-btn-toggle>
          </v-col>
          
        </v-row>
        <!-- <v-row>
          <v-col cols="auto">
            <v-btn-toggle v-model="viewMode" class="ma-2" density="compact">
              <v-btn color="primary" value="card" icon >
                <v-icon color="primary">mdi-view-grid</v-icon>
              </v-btn>
              <v-btn color="primary" value="list" icon>
                <v-icon color="primary">mdi-view-list</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-col>
        </v-row> -->
      </v-sheet>

      <!-- Conditional grouping -->
      <template v-if="groupingMode === 'category'">
        <!-- Existing grouping by category -->
        <div
          v-for="category in filteredCategories"
          :key="category.id"
          class="text-center mb-6"
        >
          <v-divider class="mt-10 mb-4"></v-divider>
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
      </template>
      <template v-else>
        <!-- New grouping by score.groupType -->
        <div
          v-for="group in groupedScoresByGroupType"
          :key="group.groupType"
          class="text-center mb-6"
        >
          <v-divider class="mt-10 mb-4"></v-divider>
          <h2 class="primary--text text-h4 font-weight-bold mb-6">{{ group.groupType }}</h2>
          <v-row v-if="viewMode === 'card'" justify="center">
            <!-- Card view -->
            <v-spacer></v-spacer>
            <v-col
              class="d-flex align-stretch mx-auto"
              cols="12"
              md="4"
              sm="6"
              v-for="score in group.scores"
              :key="score.id"
            >
              <ScoreCard :score="score" :categoryName="score.groupType"></ScoreCard>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-row v-else>
            <!-- List view -->
            <v-col cols="12" v-for="score in group.scores" :key="score.id">
              <ScoreListItem :score="score" :categoryName="score.groupType" />
            </v-col>
          </v-row>
        </div>
      </template>
    </v-col>
  </v-row>
</template>

<script>
  import ScoreCard from '@/components/scores/ScoreCard.vue'
  import { mapMutations } from 'vuex'
  import { useDisplay } from 'vuetify'
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
      groupingMode: 'groupType', // New: 'category' or 'groupType'
    }),
    setup() {
      const display = useDisplay()
      return { display }
    },
    computed: {
      filteredCategories() {
        // Show only categories that are explicitly selected
        return this.catalogue.filter(category =>
          this.selectedCategories.includes(category.id)
        )
      },
      groupedScoresByGroupType() {
        // New computed property to group scores by score.groupType
        const groups = {}
        this.filteredCategories.forEach(category => {
          // Group scores from category
          category.scores.forEach(score => {
            const key = score.groupType || 'Unknown'
            if (!groups[key]) groups[key] = []
            groups[key].push(score)
          })
          // Group scores from sub-categories
          category.children.forEach(subcat => {
            subcat.scores.forEach(score => {
              const key = score.groupType || 'Unknown'
              if (!groups[key]) groups[key] = []
              groups[key].push(score)
            })
          })
        })
        // Sort each group's scores alphabetically by title
        Object.keys(groups).forEach(key => {
          groups[key].sort((a, b) =>
            a.title.toLowerCase().localeCompare(b.title.toLowerCase())
          )
        })
        // Return groups sorted by the groupType alphabetically
        return Object.keys(groups).map(key => ({
          groupType: key,
          scores: groups[key],
        })).sort((a, b) =>
          a.groupType.toLowerCase().localeCompare(b.groupType.toLowerCase())
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
            // sort scores alphabetically for each category and sub-category
            json.children.forEach(category => {
              if (category.scores) {
                category.scores.sort((a, b) =>
                  a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                )
              }
              if (category.children) {
                category.children.forEach(subcat => {
                  if (subcat.scores) {
                    subcat.scores.sort((a, b) =>
                      a.title.toLowerCase().localeCompare(b.title.toLowerCase())
                    )
                  }
                })
              }
            })
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
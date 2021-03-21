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
      <!-- create list by category -->
      <div v-for="category in catalogue" v-bind:key="category.id" class="text-center mb-6">

        <v-divider class="my-2"></v-divider>
        <h2 class="primary--text">{{category.namePlural}}</h2>
        <v-row>
          <!-- show list of scores associated w category -->
          <v-col class="d-flex align-stretch mx-auto" cols="12" md="4" sm="6" v-for="score in category.scores" v-bind:key="score.id">
            <ScoreCard :score="score" :categoryName="category.name"></ScoreCard>
          </v-col>
          <!-- show sub-categories -->
          <div v-for="subcategory in category.children" v-bind:key="subcategory.id" rounded="lg">
            <h3 class="primary--text">{{subcategory.namePlural}}</h3>
            <v-row>
              <!-- show list of scores -->
              <v-col class="d-flex align-stretch mx-auto" cols="12" md="4" sm="6" v-for="score in subcategory.scores" v-bind:key="score.id">
                <ScoreCard :score="score" :categoryName="subcategory.name"></ScoreCard>
              </v-col>
            </v-row>
          </div>
          <v-spacer></v-spacer>
        </v-row>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import ScoreCard from '@/components/scores/ScoreCard.vue'
  import {
    mapMutations
  } from 'vuex'

  export default {
    name: 'Overview',
    components: { ScoreCard },
    data: () => ({
      loading: false,
      scores: [],
      catalogue: [],
    }),
    methods: {
      ...mapMutations(['addToCart']),
      fetchScores: function() {
        var that = this
        that.loading = true
        fetch(process.env.VUE_APP_API_URL + '/catalogue/')
        .then(response => response.json())
        .then(json => {
          that.loading = false
          that.catalogue = json.children
        })
      },
    },
    created() {
      this.fetchScores()
    }
  }
</script>
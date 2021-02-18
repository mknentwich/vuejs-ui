<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-sheet rounded="lg" color="grey lighten-3" class="pa-2">
        <v-row class="align-center justify-center" dense>
          <v-col cols="auto">
            <v-img
              :src="require('@/assets/nentwichVerlag_logos_color.svg')"
              height="90"
              width="200"
              contain
            ></v-img>
          </v-col>
          <v-col cols="auto">
            <h1 class="text-h4 font-weight-bold primary--text">
              Noten bestellen
            </h1>
          </v-col>
          <!-- Filter functionality not yet implemented 
          <v-spacer></v-spacer>
          <v-col cols="auto">
            <v-row dense class="align-center">
              <v-col cols="auto">
                <v-icon color="primary">mdi-filter</v-icon>
              </v-col>
              <v-col cols="auto">
                <v-chip 
                  v-for="category in allCategories" 
                  v-bind:key="category.id"
                  :color="selectedCategories.includes(category.id) ? 'primary' : 'primaryAccent'"
                  @click="addOrRemoveFromSelectedCategories(category.id)"
                  class="font-weight-bold mx-1"
                  link
                > 
                  {{ category.name }}
                </v-chip>
              </v-col>
            </v-row>
          </v-col> -->
        </v-row>
      </v-sheet>
    </v-col>
    <v-col cols="12" class="text-center">
      <!-- create list by category -->
      <div v-for="category in catalogue" v-bind:key="category.id" class="text-center mb-6">

        <v-divider class="my-2"></v-divider>
        <h2 class="primary--text">{{category.namePlural}}</h2>

        <!-- show list of scores associated w category -->
        <v-col class="d-flex align-stretch mx-auto" cols="12" md="4" sm="6" v-for="score in category.scores" v-bind:key="score.id">
          <ScoreCard :score="score" :categoryName="category.name"></ScoreCard>
        </v-col>
        <!-- show sub-categories -->
        <div v-for="subcategory in category.children" v-bind:key="subcategory.id" rounded="lg">
          <h3 class="primary--text">{{subcategory.namePlural}}</h3>
          <!-- show list of scores -->
          <v-col class="d-flex align-stretch mx-auto" cols="12" md="4" sm="6" v-for="score in subcategory.scores" v-bind:key="score.id">
            <ScoreCard :score="score" :categoryName="subcategory.name"></ScoreCard>
          </v-col>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import ScoreCard from '@/components/scores/ScoreCard.vue'
  import {
    mapMutations,
    mapState
  } from 'vuex'

  export default {
    name: 'Overview',
    components: { ScoreCard },
    data: () => ({
      scores: [],
      catalogue: [],
      allCategories: [],
      selectedCategories: []
    }),
    computed: {
      ...mapState(['testScores'])
    },
    methods: {
      ...mapMutations(['addToCart']),
      fetchScores: function() {
        var that = this
        fetch('/api/v1/catalogue/')
        .then(response => response.json())
        .then(json => {
          console.log(json)
          that.catalogue = json.children
          that.setAllCategories()
        })
      },
      setAllCategories: function() {
        this.catalogue.forEach(function(category) {
          this.allCategories.push({id: category.id, name: category.name})
          // by default all categories are to be shown
          this.selectedCategories.push(category.id)
        }, this);
      },
      addOrRemoveFromSelectedCategories: function(id) {
        if (this.selectedCategories.includes(id)) {
          this.selectedCategories.splice(this.selectedCategories.indexOf(id), 1)
        } else {
          this.selectedCategories.push(id)
        }
      }
    },
    created() {
      this.fetchScores()
    }
  }
</script>
<style scoped>
.box-shadow {
  box-shadow: 5px 5px 0px #d5d5d5 !important;
  height: 100%;
}
.no-underline {
  text-decoration: none !important;
}
</style>
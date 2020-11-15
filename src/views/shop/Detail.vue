<template>
  <v-container>
  <v-row class="flex-wrap">
    <v-col cols="12" class="pb-0">
      <v-btn text rounded class="font-weight-bold primary--text" to="/shop">
        <v-icon small class="mr-1">mdi-arrow-left</v-icon>
        zur Übersicht
      </v-btn>
    </v-col>
  </v-row>
  <v-row v-if="score">
    <v-col cols="12">
      <ScoreHeader 
        :scoreId="score.id"
        :title="score.title"
        :instrumentation="score.instrumentation"
        :author="score.author"
        :price="score.price"
      ></ScoreHeader>
    </v-col>
    <v-col cols="12" md="7">
      <v-row no-gutters>
        <v-col cols="12" class="mb-6">
          <ScoreMetadata
          :author="score.author"
          :description="score.description"
          :category="score.category"
          :difficulty="score.difficulty"
          ></ScoreMetadata>
        </v-col>
        <v-col cols="12">
          <Player></Player>
        </v-col>
      </v-row>
      
    </v-col>
    <v-col cols="12" md="5">
      <Carousel></Carousel>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  import ScoreHeader from '@/components/scores/Header.vue'
  import ScoreMetadata from '@/components/scores/Metadata.vue'
  import Player from '@/components/scores/Player.vue'
  import Carousel from '@/components/scores/Carousel.vue'

  export default {
    name: 'ShopHome',
    components: {
      ScoreHeader, ScoreMetadata, Player, Carousel
    },
    data: () => ({
      score: {}
    }),
    computed: {
      scoreId: function () {
        return this.$route.params.scoreId
      }
    },
    methods: {
      getScoreById: function (id) {
        return this.$store.getters.getScoreById(id)
      }
    },
    created() {
      this.score = this.getScoreById(Number(this.$route.params.scoreId))
    },
  }
</script>

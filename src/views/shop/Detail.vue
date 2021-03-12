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
        :groupType="score.groupType"
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
            :category="score.categoryId"
            :difficulty="score.difficulty"
            :instrumentation="score.instrumentation"
          ></ScoreMetadata>
        </v-col>
        <v-col cols="12">
          <Player :scoreId="score.id"></Player>
        </v-col>
      </v-row>
      
    </v-col>
    <v-col cols="12" md="5">
      <PdfView :scoreId="score.id"></PdfView>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
  import ScoreHeader from '@/components/scores/Header.vue'
  import ScoreMetadata from '@/components/scores/Metadata.vue'
  import Player from '@/components/scores/Player.vue'
  import PdfView from '@/components/scores/PdfView.vue'

  export default {
    name: 'ShopHome',
    components: {
      ScoreHeader, ScoreMetadata, Player, PdfView
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
      fetchScoreById: function (id) {
        var that = this
        fetch(`${process.env.VUE_APP_API_URL}/catalogue/scores/${id}`)
        .then(response => response.json())
        .then(json => {
          console.log(json)
          that.score = json
        })
      }
    },
    created() {
      this.score = this.fetchScoreById(this.$route.params.scoreId)
    },
  }
</script>

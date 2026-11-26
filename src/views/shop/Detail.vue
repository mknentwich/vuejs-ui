<template>
  <v-container>
    <v-row class="flex-wrap" no-gutters>
      <v-col cols="12" class="pb-0">
        <v-btn variant="text" rounded class="font-weight-bold primary--text" to="/shop">
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
              :summary="score.summary"
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
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'
import ScoreHeader from '@/components/scores/Header.vue'
import ScoreMetadata from '@/components/scores/Metadata.vue'
import Player from '@/components/scores/Player.vue'
import PdfView from '@/components/scores/PdfView.vue'
  
export default {
  name: 'ShopHome',
  components: { ScoreHeader, ScoreMetadata, Player, PdfView },
  setup() {
    const route = useRoute()
    const score = ref(null)

    const fetchScoreById = async (id) => {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/catalogue/scores/${id}`)
      score.value = await response.json()
    }

    onMounted(() => {
      fetchScoreById(route.params.scoreId)
    })

    useHead(() => (score.value ? {
      title: score.value.title,
      meta: [
        { name: 'description', content: score.value.summary },
        { property: 'og:title', content: score.value.title },
        { property: 'og:description', content: score.value.summary },
        { property: 'og:url', content: window.location.href }
      ]
    } : {}))

    return { score }
  }
}
</script>

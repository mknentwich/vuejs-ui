<template>
  <div class="fill-height">
    <object :data="pdfUrl" type="application/pdf" width="100%" height="80%">
      <!-- fallback -->
      Die PDF-Vorschau wird von Ihrem Browser nicht unterstützt.
    </object>
      <v-btn class="primary my-4" :href="pdfUrl" target="_blank">
        <v-icon left>mdi-download</v-icon>
        Vorschau-PDF herunterladen
      </v-btn>
  </div>
</template>
<script>
  export default {
    name: 'PdfView',
    props: {
      scoreId: Number
    },
    computed: {
      pdfUrl: function() {
        return `${process.env.VUE_APP_API_URL}/assets/scores/${this.scoreId}/pdf`
      }
    }
  }
</script>

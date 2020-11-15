<template>
  <v-footer width="100%" color="primary">
    <v-container>
      <v-row>
        <v-col cols="4">
          <div v-for="link in footerLinks" v-bind:key="link.path" >
          <v-btn dark class="font-weight-bold" text :to="link.path">
            {{ link.label }}
          </v-btn>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col
          class="text-center white--text"
          cols="auto"
        >
          <v-img
            height="70px"
            width="350px"
            :src="require('@/assets/nentwichVerlag_logos_name_grey_grey.svg')"
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  props: {
    footerLinks: Array,
  },
}
</script>
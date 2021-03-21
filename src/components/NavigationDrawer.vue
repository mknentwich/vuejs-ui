<template>
  <v-navigation-drawer
    v-model="drawerValue"
    app
    disable-resize-watcher
    color="primary"
    dark
  >
    <v-row justify="center" no-gutters class="pa-6">
      <v-img
        height="30px"
        width="80px"
        :src="require('@/assets/nentwichVerlag_logos_name_grey_grey.svg')"
      ></v-img>
    </v-row>
    <v-divider></v-divider>

    <v-list nav>
      <v-list-item link v-for="item in items" v-bind:key="item.path" :to="item.path">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    name: 'NavigationDrawer',
    computed: {
      ...mapState(['drawer']),
      drawerValue: {
        get: function () {
          return this.drawer
        },
        set: function (value) {
          this.setDrawerValue(value)
        }
      }
    },
    methods: {
      ...mapMutations(['setDrawerValue'])
    },
    props: {
      items: Array
    }
  }
</script>

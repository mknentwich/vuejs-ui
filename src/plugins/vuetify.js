import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
      iconfont: 'mdi'
    },
    theme: {
      themes: {
        light: {
            primary: '#2E5346',
            secondary: '#B2A89C',
            primaryAccent: '#d6d8d2',
            secondaryAccent: '#ECE6DD',
            highlightDark: '#3f3432'
        }
      }
    }
});

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
            primaryAccentLight: '#f2f2f2',
            primaryAccentLightAlt: '#eaeaea',
            secondaryAccent: '#ECE6DD',
            secondaryAccentLight: '#f8f5f2',
            highlightDark: '#3f3432',
            caution: '#ed9220',
            cautionContrast: '#6d430e'
        }
      }
    }
});

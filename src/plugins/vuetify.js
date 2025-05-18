import { createVuetify } from 'vuetify';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

export default createVuetify({
  icons: {
    defaultSet: 'mdi', // Updated for Vuetify 3
  },
  theme: {
    defaultTheme: 'light', // Updated for Vuetify 3
    themes: {
      light: {
        colors: {
          primary: '#2E5346',
          secondary: '#B2A89C',
          primaryAccent: '#d6d8d2',
          primaryAccentLight: '#f2f2f2',
          primaryAccentLightAlt: '#eaeaea',
          secondaryAccent: '#ECE6DD',
          secondaryAccentLight: '#f8f5f2',
          highlightDark: '#3f3432',
          caution: '#ed9220',
          cautionContrast: '#6d430e',
        },
      },
    },
  },
});

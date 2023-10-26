import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";

const custom = {
  tBlue: '#3a9bbb',
  tYellow: "#e8b02a",
  tRed: "#cc3144",
  tGreen: "#55e3ad",
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "dark",
      themes: {
        custom,
      },
    },
  });
  app.vueApp.use(vuetify);
});

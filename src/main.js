import { createApp } from "vue";
import { createI18n } from "vue-i18n";

import App from "./App.vue";
import router from "./router/router";
import store from "./store";

const messages = {
  ru: {
    header: {
      converter: "Конвертер",
      currencies: "Курсы",
    },
    currencies: {
      base: "Базовая валюта",
      name: "Название",
      rate: "Курс",
    },
    converter: {
      loading: "Загрузка...",
    },
  },
  en: {
    header: {
      converter: "Converter",
      currencies: "Currencies",
    },
    currencies: {
      base: "Base currency",
      name: "Name",
      rate: "Rate",
    },
    converter: {
      loading: "Loading...",
    },
  },
};

export const i18n = createI18n({
  locale: "ru",
  messages,
});

createApp(App).use(store).use(router).use(i18n).mount("#app");

<template>
  <header>
    <nav>
      <router-link to="/">{{ $t("header.converter") }}</router-link>
      <router-link to="/currencies">{{ $t("header.currencies") }}</router-link>
    </nav>
    <div class="locales">
      <div class="locale">{{ locale }}</div>
      <div class="min-locale" @click="switchLocale">
        {{ locale === "en" ? "ru" : "en" }}
      </div>
    </div>
  </header>
  <main>
    <preloader v-if="$store.state.app.isLoading" />
    <router-view v-else />
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { i18n } from "@/main";
import Preloader from "@/components/Preloader";

export default {
  components: {
    Preloader,
  },
  data() {
    return {
      locale: i18n.global.locale,
    };
  },
  methods: {
    ...mapActions({
      getSymbols: "app/getSymbols",
    }),
    switchLocale() {
      i18n.global.locale = i18n.global.locale === "en" ? "ru" : "en";
      this.locale = i18n.global.locale;
    },
  },
  mounted() {
    this.getSymbols();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@700&family=Roboto:wght@400;500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  user-select: none;
}
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  padding: 20px 60px;
  background-color: #0052cc;
  z-index: 100;
}
.locales {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
}
.locale {
  margin-right: 10px;
  color: white;
  font-size: 29px;
  text-transform: uppercase;
}
.min-locale {
  margin-bottom: 4px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  text-transform: uppercase;
}
.min-locale:hover {
  color: rgb(204, 204, 204);
}
main {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
}
.wrapper {
  padding: 15px 10px;
}
a {
  margin-right: 25px;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
}
a:hover {
  color: rgb(204, 204, 204);
}
.router-link-active {
  color: rgb(204, 204, 204);
}
input {
  width: 200px;
  padding: 6px 8px;
  margin-right: 15px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
}
select {
  padding: 6px 8px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
}
</style>

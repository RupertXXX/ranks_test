<template>
  <div class="wrapper">
    <div class="title">
      {{ $t("currencies.base") }}:
      <select @change="getCurrencies" v-model="base">
        <option v-for="symbol in $store.state.app.symbols">
          {{ symbol }}
        </option>
      </select>
    </div>
    <div class="grid bold">
      <div>{{ $t("currencies.name") }}</div>
      <div>{{ $t("currencies.rate") }}</div>
    </div>
    <preloader v-if="currencies.length === 0" />
    <div class="grid" v-else v-for="currecy in currencies">
      <div>{{ currecy.shortName }}</div>
      <div>{{ `=  ${(1 / currecy.course).toFixed(3)}   ${base}` }}</div>
    </div>
  </div>
</template>

<script>
import Preloader from "@/components/Preloader";
import api from "@/api";

export default {
  components: {
    Preloader,
  },
  data() {
    return {
      currencies: [],
      base: "RUB",
    };
  },
  methods: {
    async getCurrencies() {
      this.currencies = [];

      let res = await api(
        "https://api.apilayer.com/exchangerates_data/latest",
        "GET",
        {
          symbols: this.$store.state.app.symbols,
          base: this.base,
        }
      );

      this.currencies = Object.keys(res.rates).map((el) => ({
        shortName: el,
        course: res.rates[el],
      }));
    },
  },
  mounted() {
    this.getCurrencies();
  },
};
</script>

<style scoped>
input {
  width: 200px;
  padding: 6px 8px;
  margin-right: 15px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(20px, auto);
  width: 100%;
  padding: 10px 40px;
  border-bottom: 1px solid rgb(201, 201, 201);
}
.title {
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin-bottom: 35px;
}
.bold {
  font-weight: 600;
  letter-spacing: 1px;
}
</style>

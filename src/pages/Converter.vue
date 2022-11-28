<template>
  <div class="wrapper">
    <div class="row">
      <input @input="numberChange" v-bind:value="number" type="number" />
      <select @change="getCoef" v-model="symbol">
        <option v-for="symbol in $store.state.app.symbols">
          {{ symbol }}
        </option>
      </select>
    </div>
    <div class="row">
      <input class="answer" disabled v-bind:value="result" type="text" />
      <select @change="getCoef" v-model="base">
        <option v-for="symbol in $store.state.app.symbols">
          {{ symbol }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  data() {
    return {
      number: 0,
      currentCoef: 1,
      symbol: this.$store.state.app.symbols[0],
      base: this.$store.state.app.symbols[0],
      result: 0,
    };
  },
  methods: {
    numberChange(e) {
      if (!isNaN(e.target.valueAsNumber) && e.target.valueAsNumber >= 0)
        this.number = e.target.valueAsNumber;
      else this.number = 0;

      this.result = (this.number / this.currentCoef).toFixed(3);
    },
    async getCoef() {
      if (this.symbol && this.base) {
        this.result = this.$t("converter.loading");
        let res = await api(
          "https://api.apilayer.com/exchangerates_data/latest",
          "GET",
          {
            symbols: this.symbol,
            base: this.base,
          }
        );
        this.currentCoef = res.rates[this.symbol];
        this.result = (this.number / this.currentCoef).toFixed(3);
      }
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
</style>

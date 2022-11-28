import api from "@/api";

export const appModule = {
  state: () => ({
    symbols: [],
    isLoading: true,
  }),
  mutations: {
    setSymbols(state, symbols) {
      state.symbols = symbols;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async getSymbols({ commit }) {
      try {
        let res = await api(
          "https://api.apilayer.com/exchangerates_data/symbols",
          "GET"
        );

        commit("setSymbols", Object.keys(res.symbols));
        commit("setLoading", false);
      } catch (e) {}
    },
  },
  namespaced: true,
};

import { createStore } from "vuex";
import { appModule } from "./appModule";

export default createStore({
  modules: {
    app: appModule,
  },
});

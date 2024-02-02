import "./assets/style/reset.css";
import "./assets/style/fonts.css";
import "./assets/style/variables.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const app = createApp(App).use(store).use(router).mount("#app");



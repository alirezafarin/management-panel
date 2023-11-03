import { VueQueryPlugin, type VueQueryPluginOptions } from '@tanstack/vue-query';
import Vue, { createApp } from '@vue/compat';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import App from './App.vue';
import router from './router';

Vue.use(BootstrapVue);

const app = createApp(App);

const vueQueryPluginOptions: VueQueryPluginOptions = {
  queryClientConfig: {
    defaultOptions: {
      queries: { retry: false },
    },
  },
};

app.use(VueQueryPlugin, vueQueryPluginOptions);
app.use(router);
app.use(Toast);

app.mount('#app');

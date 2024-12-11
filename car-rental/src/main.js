import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueAMap, {initAMapApiLoader} from '@vuemap/vue-amap';
import '@vuemap/vue-amap/dist/style.css';

initAMapApiLoader({
  key: '85ad11b8f59ab3c43abfbac01d5dfb0a', // 请替换为您的高德地图key
  securityJsCode: '' // 安全密钥
});

createApp(App)
  .use(router)
  .mount('#app');

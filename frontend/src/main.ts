import {createApp} from 'vue'
import App from './App.vue'
import './styles/index.scss';
import "tailwindcss/tailwind.css";

import { router, setupRouter } from '@/router';
// import { setupRouterGuard } from '@/router/guard';
import { setupStore } from '@/store';

async function bootstrap() {
  const app = createApp(App);

  // Configure store
  // 配置 store
  setupStore(app);

  // Configure routing
  // 配置路由
  setupRouter(app);

  // router-guard
  // 路由守卫
  // setupRouterGuard(router);

  // https://next.router.vuejs.org/api/#isready
  // await router.isReady();

  app.mount('#app');
}

bootstrap();

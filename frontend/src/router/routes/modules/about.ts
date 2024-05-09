import type { AppRouteModule } from '@/router/types';

import { LAYOUT } from '@/router/constant';

const about: AppRouteModule = {
  path: '/about',
  name: 'About',
  component: LAYOUT,
  redirect: '/about/index',
  meta: {
    hideChildrenInMenu: true,
    icon: 'simple-icons:aboutdotme',
    title: 'routes.dashboard.about',
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'AboutPage',
      component: () => import('@/views/sys/about/index.vue'),
      meta: {
        title: 'routes.dashboard.about',
        icon: 'simple-icons:aboutdotme',
        hideMenu: true,
      },
    },
  ],
};

export default about;

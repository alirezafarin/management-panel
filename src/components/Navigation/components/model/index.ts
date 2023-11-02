import type { RouteLocationRaw } from 'vue-router';

export interface ISidebarLink {
  variant?: string;
  to: RouteLocationRaw;
}

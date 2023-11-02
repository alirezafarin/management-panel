import type { InjectionKey } from 'vue';
import type { IArticleFormInject } from '..';

export const formInjectionKey = Symbol() as InjectionKey<IArticleFormInject>;

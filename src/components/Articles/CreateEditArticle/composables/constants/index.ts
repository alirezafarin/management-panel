import type { InjectionKey } from 'vue';
import type { IArticleFormInject, ITagsInject } from '..';

export const formInjectionKey = Symbol() as InjectionKey<IArticleFormInject>;
export const tagsInjectionKey = Symbol() as InjectionKey<ITagsInject>;

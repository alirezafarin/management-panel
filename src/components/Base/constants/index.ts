import type { InjectionKey } from 'vue';
import type { IModalInject } from '../model';

export const modalInjectionKey = Symbol() as InjectionKey<IModalInject>;

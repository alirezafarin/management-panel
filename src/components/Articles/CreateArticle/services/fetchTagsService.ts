import { http } from '@/http';
import type { ITags } from '.';

export const fetchTagsService = async () => {
  const { data: response } = await http.get<ITags>('/tags');
  return response;
};

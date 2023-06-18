import axios from 'axios';

export type Action = 'merging' | 'giverole';
type Method = 'post' | 'get';

export async function databaseMergeRequest(action: Action, method: Method, data?: any) {
  if (method == 'post') {
    const response = await axios.post(`api/admin/${action}`, data);
    return response.data;
  } else if (method == 'get') {
    const response = await axios.get(`api/admin/${action}`);
    return response.data;
  }
}

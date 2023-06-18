import axios from 'axios';

type Action = 'singtable';
type Method = 'get' | 'post';

export async function tablesRequest(action: Action, method: Method, data?: any) {
  if (method == 'get') {
    const response = await axios.get(`api/table/${action}`);
    return response.data;
  } else if (method == 'post') {
    const response = await axios.post(`api/table/${action}`, data);
    return response.data;
  }
}

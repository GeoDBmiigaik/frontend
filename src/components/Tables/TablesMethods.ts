import axios from 'axios';

type Action = 'singtable';
type Method = 'get' | 'post';

export async function tablesRequest(action: Action, method: Method) {
  if (method == 'get') {
    const response = await axios.get(`api/table/${action}`);
    return response.data;
  }
}

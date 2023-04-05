import axios from 'axios';

export interface AuthState {
  credentials: string[];
}

export const unauthenticatedState = {
  credentials: ['anonymous'],
};

export type responseData = {
  user: {
    id: number;
    display_name: string;
    credentials: string[];
  };
};

type Action = 'session' | 'signup' | 'signin';
type Method = 'get' | 'post' | 'delete';

export async function formsRequest(action: Action, method: Method, data?: any) {
  if (method == 'post') {
    const response = await axios.post(`api/users/${action}`, data);
    return response.data;
  } else if (method == 'get') {
    const response = await axios.get(`api/users/${action}`);
    return response.data;
  } else if (method == 'delete') {
    const response = await axios.delete(`api/users/${action}`);
    return response.data;
  }
}

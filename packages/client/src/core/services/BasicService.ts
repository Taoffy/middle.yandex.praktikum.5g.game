import { AxiosResponse } from 'axios';
import { apiHasError } from '../utils/apiHasError';

export class BasicServiceClass {
  protected checkAnswer<T>(response: AxiosResponse<T>) {
    if (response.status !== 200 && response.status !== 201) {
      if (apiHasError(response.data)) {
        throw new Error(response.data.reason);
      }
      throw new Error(response.statusText);
    }
    return response.data;
  }
}

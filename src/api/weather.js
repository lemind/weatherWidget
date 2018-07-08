import { ajax } from 'rxjs/observable/dom/ajax';
import { API_HOST } from '../config';

export const weatherAPI = {
  fetchWeather: () => {
    return ajax.getJSON(`${API_HOST}/req`);
  },

};

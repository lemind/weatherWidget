import { ajax } from 'rxjs/observable/dom/ajax';
import { API_HOST, APP_ID } from '../config';

const appId = APP_ID;
export const weatherAPI = {
  weatherByTerm: (term) => {
    return ajax.getJSON(`${API_HOST}/weather?q=${term}&APPID=${appId}`);
  },
  weatherBulkCities: (ids) => {
    return ajax.getJSON(`${API_HOST}/group?id=${ids.join(',')}&APPID=${appId}`);
  }
};

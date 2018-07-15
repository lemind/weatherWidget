import { ajax } from 'rxjs/observable/dom/ajax';
import { API_HOST } from '../config';

export const weatherAPI = {
  weatherByTerm: (term) => {
  	const appId = '9d750758281f88d31834537546aee57e'

    return ajax.getJSON(`${API_HOST}/weather?q=${term}&APPID=${appId}`);
  },

};

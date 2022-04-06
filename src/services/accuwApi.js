import axios from 'axios';

import { ACCUW_APIKEY } from '@env';

export const accuWeather = axios.create({
	baseURL: "http://dataservice.accuweather.com",
	params: {
		apikey: ACCUW_APIKEY,
		language: 'pt-br'
	}
});

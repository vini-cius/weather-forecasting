import axios from 'axios';

const apiAccuW = axios.create({
	baseURL: "http://dataservice.accuweather.com/locations/v1/"
});

export default apiAccuW;

import axios from 'axios';

const apiAccuW = axios.create({
	baseURL: "http://dataservice.accuweather.com/"
});

export default apiAccuW;
